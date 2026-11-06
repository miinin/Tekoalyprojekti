import React, { useCallback, useLayoutEffect, useRef } from 'react';

/**
 * Mahduttaa sisällön aina sille varattuun korkeuteen ilman vieritystä.
 *
 * Näkymät on mitoitettu mahtumaan sellaisenaan tavallisille Chromebook-näytöille.
 * Tämä on varmistus: jos sisältöä on poikkeuksellisen paljon (pitkä kysymys) tai
 * ikkuna on hyvin matala, sisältöä pienennetään CSS:n zoom-ominaisuudella juuri sen
 * verran, että kaikki mahtuu. Zoomauksessa teksti rivittyy uudelleen leveämmälle,
 * joten pienennystä tarvitaan vähemmän kuin pelkässä skaalauksessa.
 * maxZoom > 1 sallii myös suurentamisen, kun sisältöä on vähän (tila käytetään hyödyksi).
 *
 * fitKey: arvo, jonka muuttuessa sovitus lasketaan heti uudelleen ennen piirtoa
 * (esim. kysymyksen vaihtuminen). Muut koonmuutokset huomataan ResizeObserverilla.
 */
export default function FitToHeight({ children, fitKey, minZoom = 0.6, maxZoom = 1, className = '', style }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  // Viimeisimmän sovituksen tulos: tunnistetaan omat zoom-muutokset, ettei niistä lasketa turhaan uudelleen
  const lastRef = useRef(null);

  const fit = useCallback(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const avail = outer.clientHeight;
    if (!avail) return;
    const apply = (z) => { inner.style.zoom = z === 1 ? '' : String(Math.floor(z * 1000) / 1000); };
    const fits = (z) => { apply(z); return inner.getBoundingClientRect().height <= avail + 0.5; };
    // Suurin zoom väliltä [lo, hi], jolla sisältö mahtuu. Korkeus kasvaa zoomin mukana, joten puolitushaku toimii.
    const search = (lo, hi) => {
      for (let i = 0; i < 9; i++) {
        const mid = (lo + hi) / 2;
        if (fits(mid)) lo = mid;
        else hi = mid;
      }
      return lo;
    };

    let best;
    if (fits(1)) {
      if (maxZoom <= 1) best = 1;
      else if (fits(maxZoom)) best = maxZoom;
      else best = search(1, maxZoom);
    } else {
      best = search(minZoom, 1);
    }
    apply(best);
    const r = inner.getBoundingClientRect();
    lastRef.current = { avail, w: r.width, h: r.height };
  }, [minZoom, maxZoom]);

  useLayoutEffect(() => {
    fit();
  }, [fit, fitKey]);

  useLayoutEffect(() => {
    let raf = 0;
    const schedule = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      const last = lastRef.current;
      if (outer && inner && last) {
        const r = inner.getBoundingClientRect();
        // Ei muutosta viime sovituksen jälkeen (esim. oma zoom-muutos) -> ei uutta laskentaa
        if (outer.clientHeight === last.avail && Math.abs(r.height - last.h) < 0.5 && Math.abs(r.width - last.w) < 0.5) return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(fit);
    };
    const ro = new ResizeObserver(schedule);
    if (outerRef.current) ro.observe(outerRef.current);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener('resize', schedule);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, [fit]);

  return (
    <div ref={outerRef} className={`fit-outer ${className}`} style={style}>
      <div ref={innerRef} className="fit-inner">
        {children}
      </div>
    </div>
  );
}
