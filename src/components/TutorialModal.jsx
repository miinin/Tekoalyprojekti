import React, { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Hand, X } from 'lucide-react';

// Lukuaika lasketaan ohjeen pituudesta. Arvot on valittu niin, että nopeakin lukija
// ehtii lukea tekstin, mutta ikkunaa ei voi ohittaa heti lukematta.
const READ_MS_PER_CHAR = 35;
const READ_MIN_MS = 3000;
const READ_MAX_MS = 10000;

// Poimii React-sisällöstä pelkän tekstin lukuajan laskemista varten
const textOf = (node) => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join(' ');
  if (node.props) return textOf(node.props.children);
  return '';
};

const readingTimeMs = (text) => {
  const chars = text.replace(/\s+/g, ' ').trim().length;
  return Math.min(READ_MAX_MS, Math.max(READ_MIN_MS, chars * READ_MS_PER_CHAR));
};

/**
 * Opastusikkuna, jota ei voi ohittaa lukematta.
 *
 * - Jatkonappi aktivoituu vasta lukuajan jälkeen (nappiin täyttyy edistymispalkki).
 * - Jos pelaaja yrittää klikata ohi liian aikaisin (nappia, taustaa tai Esc-näppäintä),
 *   ikkuna tärähtää, teksti korostuu ja näkyviin tulee muistutus lukea ohje.
 * - requireReading={false}: tavallinen ohje (esim. pelaajan itse avaama), sulkeutuu heti.
 */
export default function TutorialModal({
  title,
  children,
  buttonText,
  onConfirm,
  onClose,
  accent = '#10b981',
  titleColor,
  icon = null,
  maxWidth = 560,
  zIndex = 10050,
  requireReading = true,
  bodyAlign = 'center',
  buttonTextColor = 'white',
}) {
  const titleId = useId();
  const boxRef = useRef(null);
  const bodyRef = useRef(null);
  const btnRef = useRef(null);
  const [readMs] = useState(() => readingTimeMs(`${textOf(title)} ${textOf(children)}`));
  const [ready, setReady] = useState(!requireReading);
  const [warned, setWarned] = useState(false);

  useEffect(() => {
    if (!requireReading) return undefined;
    const t = setTimeout(() => setReady(true), readMs);
    return () => clearTimeout(t);
  }, [requireReading, readMs]);

  // Fokus ikkunaan (ruudunlukijat ja Esc-näppäin toimivat), nappiin pääsee sarkaimella
  useEffect(() => {
    if (boxRef.current) boxRef.current.focus({ preventScroll: true });
  }, []);

  const shake = () => {
    if (boxRef.current && boxRef.current.animate) {
      boxRef.current.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-14px)' },
          { transform: 'translateX(12px)' },
          { transform: 'translateX(-9px)' },
          { transform: 'translateX(6px)' },
          { transform: 'translateX(0)' },
        ],
        { duration: 450, easing: 'ease-out' }
      );
    }
  };

  const pulseButton = () => {
    if (btnRef.current && btnRef.current.animate) {
      btnRef.current.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
        { duration: 400, easing: 'ease-out' }
      );
    }
  };

  const nudge = () => {
    setWarned(true);
    shake();
    if (bodyRef.current && bodyRef.current.animate) {
      bodyRef.current.animate(
        [{ backgroundColor: '#fde047' }, { backgroundColor: '#fef9c3' }],
        { duration: 700, easing: 'ease-out' }
      );
    }
  };

  const handleConfirm = () => {
    if (!ready) {
      nudge();
      return;
    }
    onConfirm();
  };

  const handleOutside = () => {
    if (!ready) {
      nudge();
      return;
    }
    if (onClose && !requireReading) onClose();
    else pulseButton();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleOutside();
    }
  };

  const showWarning = warned && !ready;

  return createPortal(
    <div className="tutorial-backdrop" style={{ zIndex }} onClick={(e) => { if (e.target === e.currentTarget) handleOutside(); }}>
      <div
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className="tutorial-box"
        tabIndex={-1}
        style={{ borderColor: accent, maxWidth, outline: 'none' }}
        onKeyDown={handleKeyDown}
      >
        {onClose && !requireReading && (
          <button type="button" className="tutorial-close" onClick={onClose} aria-label="Sulje">
            <X size={22} />
          </button>
        )}
        {(icon || title) && (
          <div className="tutorial-head">
            {icon}
            {title && (
              <h2 id={titleId} className="tutorial-title" style={{ color: titleColor || accent }}>
                {title}
              </h2>
            )}
          </div>
        )}
        <div ref={bodyRef} className={`tutorial-body${showWarning ? ' tutorial-body--warn' : ''}`} style={{ textAlign: bodyAlign }}>
          {children}
        </div>
        {showWarning && (
          <div className="tutorial-warning" role="alert">
            <Hand size={22} style={{ flexShrink: 0 }} />
            <span>Lue tämä ohje ensin, niin tiedät mitä tehdä!</span>
          </div>
        )}
        <button
          ref={btnRef}
          type="button"
          className="btn-primary tutorial-confirm"
          aria-disabled={!ready}
          onClick={handleConfirm}
          style={{ background: accent, color: ready ? buttonTextColor : 'white' }}
        >
          {!ready && <span className="tutorial-confirm-fill" style={{ animationDuration: `${readMs}ms` }} />}
          <span className="tutorial-confirm-label">
            {ready ? buttonText : (<><Eye size={20} /> Lue ohje ensin…</>)}
          </span>
        </button>
      </div>
    </div>,
    document.body
  );
}
