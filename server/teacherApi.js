// Opettajan PIN-koodin tarkistus palvelimella.
//
// Opettaja kirjautuu luokkaan luokkakoodilla ja PIN-koodilla. Palvelin vertaa PIN-koodia
// tallennettuun ja palauttaa luokan pitkän satunnaisen avaimen (token). Selain todistaa
// opettajan kirjoitukset tällä avaimella (store.teacherBatch), jota ei voi arvata.
// Väärät PIN-yritykset lasketaan luokkakohtaisesti, joten PIN-koodin kokeileminen
// skriptillä pysähtyy, vaikka PIN on vain 4 merkkiä.
//
// Tietokannassa:
//   class_sessions/{code}/private/secret  { pin, fails, failWindowStart, lockedUntil }  (vain palvelin)
//   class_sessions/{code}/private/auth    { token, lastAuthAt }                         (selain kirjoittaa, ei lue)
import crypto from 'crypto';
import express from 'express';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

// Väärät yritykset: 10 kpl 15 minuutin sisällä lukitsee luokan kirjautumisen 15 minuutiksi.
// Opettaja ei käytännössä osu rajaan, mutta 4-numeroisen PIN-koodin läpikäynti veisi päiviä.
export const MAX_FAILS = 10;
export const FAIL_WINDOW_MS = 15 * 60 * 1000;
export const LOCK_MS = 15 * 60 * 1000;

// Uusien luokkien luonti: enintään 300 luokkaa 10 minuutissa palvelininstanssia kohti.
// Koulujen opettajat jakavat usein saman IP-osoitteen, joten rajaa ei tehdä IP-kohtaisesti.
const CREATE_MAX = 300;
const CREATE_WINDOW_MS = 10 * 60 * 1000;
const createStamps = [];

const CODE_CHARS = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';

let db = null;
// Alustetaan vasta ensimmäisellä kutsulla: jos tunnukset puuttuvat, peli toimii silti
// ja vain opettajan kirjautuminen palauttaa virheen.
const getDb = () => {
  if (!db) {
    if (!getApps().length) initializeApp({ projectId: process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT || 'aivan-a9d6e' });
    db = getFirestore();
  }
  return db;
};

// Vain testejä varten: korvaa tietokannan.
export const setDbForTests = (fake) => { db = fake; };

const randomCode = () => Array.from({ length: 6 }, () => CODE_CHARS[crypto.randomInt(CODE_CHARS.length)]).join('');
const newToken = () => crypto.randomBytes(24).toString('base64url');
const pinOk = (pin) => typeof pin === 'string' && pin.length >= 4 && pin.length <= 32;
const codeOk = (code) => /^[A-Z0-9]{4,16}$/.test(code);
const sameSecret = (a, b) => {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
};
const millis = (ts) => (ts && typeof ts.toMillis === 'function' ? ts.toMillis() : 0);

const refs = (fs, code) => {
  const session = fs.doc(`class_sessions/${code}`);
  return { session, auth: session.collection('private').doc('auth'), secret: session.collection('private').doc('secret') };
};

export const teacherApi = express.Router();
teacherApi.use(express.json({ limit: '2kb' }));
teacherApi.use((req, res, next) => { res.setHeader('Cache-Control', 'no-store'); next(); });

// Uusi oppitunti: palauttaa luokkakoodin ja avaimen.
teacherApi.post('/create', async (req, res) => {
  const { pin, requireTutorial } = req.body || {};
  if (!pinOk(pin)) return res.status(400).json({ error: 'bad_pin' });
  const now = Date.now();
  while (createStamps.length && now - createStamps[0] > CREATE_WINDOW_MS) createStamps.shift();
  if (createStamps.length >= CREATE_MAX) return res.status(429).json({ error: 'busy', waitSeconds: 60 });
  createStamps.push(now);

  try {
    const fs = getDb();
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = randomCode();
      const r = refs(fs, code);
      const token = newToken();
      const created = await fs.runTransaction(async (t) => {
        const [s, a] = await Promise.all([t.get(r.session), t.get(r.auth)]);
        if (s.exists || a.exists) return false; // koodi on jo käytössä, arvotaan uusi
        t.create(r.session, { status: 'active', requireTutorial: requireTutorial === true, createdAt: FieldValue.serverTimestamp() });
        t.create(r.secret, { pin, fails: 0, failWindowStart: null, lockedUntil: null });
        t.create(r.auth, { token, lastAuthAt: FieldValue.serverTimestamp() });
        return true;
      });
      if (created) return res.json({ code, token });
    }
    return res.status(503).json({ error: 'server' });
  } catch (err) {
    console.error('teacher/create', err);
    return res.status(503).json({ error: 'server' });
  }
});

// Paluu oppitunnille: tarkistaa PIN-koodin ja palauttaa avaimen.
teacherApi.post('/login', async (req, res) => {
  const code = String(req.body?.code || '').toUpperCase().trim();
  const pin = req.body?.pin;
  if (!codeOk(code) || !pinOk(pin)) return res.status(400).json({ error: 'bad_request' });

  try {
    const fs = getDb();
    const r = refs(fs, code);
    const result = await fs.runTransaction(async (t) => {
      const [s, a, sec] = await Promise.all([t.get(r.session), t.get(r.auth), t.get(r.secret)]);
      if (!s.exists) return { status: 404, body: { error: 'not_found' } };

      // Ennen tätä muutosta luoduissa luokissa PIN on private/auth-dokumentissa: siirretään se secret-dokumenttiin.
      let secret = sec.exists ? sec.data() : null;
      if (!secret) {
        const oldPin = a.exists ? a.data().pin : null;
        if (typeof oldPin !== 'string') return { status: 403, body: { error: 'wrong_pin' } };
        secret = { pin: oldPin, fails: 0, failWindowStart: null, lockedUntil: null };
      }

      const now = Date.now();
      const lockedUntil = millis(secret.lockedUntil);
      if (lockedUntil > now) return { status: 429, body: { error: 'locked', waitSeconds: Math.ceil((lockedUntil - now) / 1000) } };

      if (!sameSecret(pin, secret.pin)) {
        const windowStart = millis(secret.failWindowStart);
        const inWindow = windowStart && now - windowStart < FAIL_WINDOW_MS;
        const fails = inWindow ? (secret.fails || 0) + 1 : 1;
        if (fails >= MAX_FAILS) {
          t.set(r.secret, { pin: secret.pin, fails: 0, failWindowStart: null, lockedUntil: Timestamp.fromMillis(now + LOCK_MS) });
          return { status: 429, body: { error: 'locked', waitSeconds: Math.ceil(LOCK_MS / 1000) } };
        }
        t.set(r.secret, { pin: secret.pin, fails, failWindowStart: inWindow ? secret.failWindowStart : Timestamp.fromMillis(now), lockedUntil: null });
        return { status: 403, body: { error: 'wrong_pin' } };
      }

      // Oikea PIN. Avain pysyy samana, jotta opettaja voi olla kirjautuneena useammalla laitteella.
      const existing = a.exists ? a.data().token : null;
      const token = typeof existing === 'string' && existing.length >= 20 ? existing : newToken();
      if (!sec.exists || secret.fails || secret.lockedUntil) {
        t.set(r.secret, { pin: secret.pin, fails: 0, failWindowStart: null, lockedUntil: null });
      }
      if (token !== existing) t.set(r.auth, { token, lastAuthAt: FieldValue.serverTimestamp() });
      return { status: 200, body: { token, status: s.data().status || 'active' } };
    });
    return res.status(result.status).json(result.body);
  } catch (err) {
    console.error('teacher/login', err);
    return res.status(503).json({ error: 'server' });
  }
});

// Rikkinäinen tai liian suuri pyyntö: lyhyt JSON-vastaus ilman virheen yksityiskohtia.
// eslint-disable-next-line no-unused-vars
teacherApi.use((err, req, res, next) => {
  res.status(err?.status && err.status < 500 ? err.status : 400).json({ error: 'bad_request' });
});
