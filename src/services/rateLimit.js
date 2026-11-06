// Selainkohtainen toistorajoitin (liukuva aikaikkuna, tallennus localStorageen).
// Estää napin hakkaamisen, skriptatun spämmäyksen tavallisen käyttöliittymän kautta
// ja PIN-koodin arvailun. HUOM: tämä ei korvaa palvelinpuolen suojausta
// (Firestore-säännöt, App Check), koska selaimen tallennuksen voi tyhjentää.

const PREFIX = 'aivan_rl_';

const readStamps = (key) => {
  try {
    const arr = JSON.parse(localStorage.getItem(PREFIX + key) || '[]');
    return Array.isArray(arr) ? arr.filter(n => typeof n === 'number') : [];
  } catch {
    return [];
  }
};

/**
 * Tarkistaa ja kirjaa yrityksen.
 * @returns {{ ok: boolean, waitSeconds: number }}
 */
export const checkRateLimit = (key, maxAttempts, windowMs) => {
  const now = Date.now();
  const recent = readStamps(key).filter(t => now - t < windowMs);
  if (recent.length >= maxAttempts) {
    const waitMs = windowMs - (now - recent[0]);
    return { ok: false, waitSeconds: Math.max(1, Math.ceil(waitMs / 1000)) };
  }
  recent.push(now);
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(recent));
  } catch { /* tallennus täynnä tai estetty - ei estetä käyttöä */ }
  return { ok: true, waitSeconds: 0 };
};

export const formatWait = (seconds) =>
  seconds >= 60 ? `${Math.ceil(seconds / 60)} min` : `${seconds} s`;

// Raja-arvot yhdessä paikassa
export const LIMITS = {
  createSession: { max: 3, windowMs: 10 * 60 * 1000 },   // 3 uutta luokkaa / 10 min
  resumeSession: { max: 5, windowMs: 5 * 60 * 1000 },    // 5 PIN-yritystä / 5 min
  pinRecovery:   { max: 5, windowMs: 5 * 60 * 1000 },    // 5 PIN-hakua / 5 min
  joinClass:     { max: 8, windowMs: 60 * 1000 },        // 8 liittymisyritystä / min
};
