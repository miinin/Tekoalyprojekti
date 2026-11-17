import express from 'express';
import compression from 'compression';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { teacherApi } from './server/teacherApi.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');

// Ei kerrota, millä palvelinohjelmistolla sivu toimii.
app.disable('x-powered-by');

// Sisältöturvakäytäntö: sivu saa ladata koodia vain omalta palvelimelta. index.html:n sisäinen
// virheenkäsittelyskripti sallitaan sen tiivisteellä, joka lasketaan käynnistyksessä buildatusta tiedostosta.
const inlineScriptHashes = (() => {
  try {
    const html = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
    return [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)]
      // Selain muuttaa rivinvaihdot muotoon LF ennen tiivisteen laskemista, joten tehdään samoin.
      .map((m) => `'sha256-${crypto.createHash('sha256').update(m[1].replace(/\r\n?/g, '\n'), 'utf8').digest('base64')}'`);
  } catch {
    return [];
  }
})();

const csp = [
  "default-src 'self'",
  `script-src 'self' ${inlineScriptHashes.join(' ')}`.trim(),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://faktabaari.fi",
  "connect-src 'self' https://firestore.googleapis.com https://*.googleapis.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Peliä ei voi upottaa muille sivuille (eduks.fi vain linkittää peliin).
  "frame-ancestors 'none'",
].join('; ');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', csp);
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Gzip compress responses
app.use(compression());

// Opettajan kirjautuminen (PIN-koodin tarkistus palvelimella)
app.use('/api/teacher', teacherApi);
app.use('/api', (req, res) => res.status(404).json({ error: 'not_found' }));

// Serve static files from the Vite build directory, with strict cache control for HTML
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Handle client-side routing by returning index.html for all other routes
app.use((req, res, next) => {
  if (req.method === 'GET') {
    // Jos selain pyytää assettia (esim. .js, .css), jota express.static ei löytänyt,
    // palautetaan heti 404, jotta selain ei saa index.html-tulosta scripti-tagiin.
    if (req.path.match(/\.[a-zA-Z0-9]+$/) && !req.path.endsWith('.html')) {
      return res.status(404).send('Not found');
    }

    if (req.accepts('html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      return res.sendFile(path.join(distPath, 'index.html'));
    }
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
