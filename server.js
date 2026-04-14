import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Gzip compress responses
app.use(compression());

// Serve static files from the Vite build directory, with strict cache control for HTML
const distPath = path.join(__dirname, 'dist');
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
