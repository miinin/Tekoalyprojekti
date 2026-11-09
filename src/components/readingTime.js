// Lukuaika lasketaan tekstin pituudesta. Arvot on valittu niin, että nopeakin lukija
// ehtii lukea tekstin, mutta ohjetta tai selitystä ei voi ohittaa heti lukematta.
const READ_MS_PER_CHAR = 35;
const READ_MIN_MS = 3000;
const READ_MAX_MS = 10000;

// Poimii React-sisällöstä pelkän tekstin lukuajan laskemista varten
export const textOf = (node) => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join(' ');
  if (node.props) return textOf(node.props.children);
  return '';
};

export const readingTimeMs = (text) => {
  const chars = String(text || '').replace(/\s+/g, ' ').trim().length;
  return Math.min(READ_MAX_MS, Math.max(READ_MIN_MS, chars * READ_MS_PER_CHAR));
};

export const READ_WARNING = 'Lue tämä ohje ensin, niin tiedät mitä tehdä!';
