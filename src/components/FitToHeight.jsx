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
 *
 * Siirtymäanimaatiot (transition) kytketään pois sovituksen ajaksi. Chrome tulkitsee zoomin muutoksen
 * elementtien koon muutokseksi ja käynnistäisi muuten esim. nappien `transition: all` -animaatiot;
 * animaatio muuttaa kokoa, mikä käynnistää uuden sovituksen ja taas uudet animaatiot (tärinä,
 * joka näkyi erityisesti selaimen zoomaustasoilla 110 %, 125 % jne.).
 *
 * Värähtelyn esto: zoomin muutos rivittää tekstin uudelleen, mikä voi joissain ympäristöissä
 * (esim. Windowsin vierityspalkit, näytön skaalaus) muuttaa tilaa takaisin ja käynnistää
 * uuden sovituksen loputtomasti. Siksi
 *  - korkeus mitataan zoomaamattomasta kääreestä (zoomatun elementin mitat voivat poiketa selaimittain),
 *  - sovitukseen jätetään pieni marginaali puolikkaiden pikseleiden varalle ja
 *  - jos zoom alkaa heilua edestakaisin (suunta vaihtuu toistuvasti lyhyessä ajassa), zoomia
 *    saa sen jälkeen vain pienentää. Sisältö mahtuu silti aina, ja heilunta loppuu varmasti.
 *    Rajoitus poistuu, kun fitKey tai ikkunan koko muuttuu.
 * Varmistus: sovitus tarkistetaan lisäksi sekunnin välein. Sisältöä ei koskaan leikata piiloon:
 * jos se ei jostain syystä mahdu, sivua voi vierittää (pelin napit eivät jää piiloon).
 *
 * Vianetsintä: osoitteen perään ?fitdebug (tai localStorage.aivan_fitdebug = '1') näyttää
 * jokaisen sovitusalueen tilan ruudun kulmassa.
 */
const isDebug = () => {
  try {
    return /fitdebug/.test(window.location.search + window.location.hash) || window.localStorage.getItem('aivan_fitdebug') === '1';
  } catch {
    return false;
  }
};
const SAFETY_PX = 2;
const OSC_WINDOW_MS = 2000;
const OSC_REVERSALS = 2;
export default function FitToHeight({ children, fitKey, minZoom = 0.6, maxZoom = 1, className = '', style }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const measureRef = useRef(null);
  const debugRef = useRef(null);
  const statsRef = useRef({ fits: 0, checks: 0, why: '' });
  // Viimeisimmän sovituksen tulos: tunnistetaan omat zoom-muutokset, ettei niistä lasketa turhaan uudelleen
  const lastRef = useRef(null);
  // Värähtelyn tunnistus: viimeaikaiset sovitustulokset ja tieto siitä, saako zoom enää kasvaa
  const historyRef = useRef([]);
  const shrinkOnlyRef = useRef(false);
  const appliedRef = useRef(null);

  const fit = useCallback((why = '') => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    const measure = measureRef.current;
    if (!outer || !inner || !measure) return;
    const avail = outer.clientHeight;
    if (!avail) return;
    // Ei siirtymäanimaatioita zoomia vaihdettaessa (ks. yllä)
    outer.classList.add('fit-measuring');
    const apply = (z) => { inner.style.zoom = z === 1 ? '' : String(Math.floor(z * 1000) / 1000); };
    const fits = (z) => { apply(z); return measure.getBoundingClientRect().height <= avail - SAFETY_PX; };
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
    // Heiluuko zoom edestakaisin? Lasketaan suunnanvaihdot viimeaikaisista tuloksista.
    const now = performance.now();
    const hist = historyRef.current.filter(h => now - h.t < OSC_WINDOW_MS);
    const prev = hist.length ? hist[hist.length - 1].z : null;
    if (shrinkOnlyRef.current && appliedRef.current != null) best = Math.min(best, appliedRef.current);
    if (prev == null || Math.abs(best - prev) > 0.0005) hist.push({ t: now, z: best });
    historyRef.current = hist;
    if (!shrinkOnlyRef.current) {
      let reversals = 0;
      for (let i = 2; i < hist.length; i++) {
        const d1 = hist[i - 1].z - hist[i - 2].z;
        const d2 = hist[i].z - hist[i - 1].z;
        if (d1 * d2 < 0) reversals++;
      }
      if (reversals >= OSC_REVERSALS) {
        shrinkOnlyRef.current = true;
        best = Math.min(...hist.slice(-3).map(h => h.z));
      }
    }
    apply(best);
    appliedRef.current = best;
    const r = measure.getBoundingClientRect(); // pakottaa tyylit lopulliseen zoomiin ennen animaatioiden palautusta
    outer.classList.remove('fit-measuring');
    lastRef.current = { avail, w: r.width, h: r.height };
    const st = statsRef.current;
    st.fits++;
    st.why = typeof why === 'string' ? why : 'raf';
    if (debugRef.current) {
      debugRef.current.textContent = `zoom ${best.toFixed(3)} | sisältö ${r.height.toFixed(1)} / tila ${avail} | sovituksia ${st.fits} (${st.why})${shrinkOnlyRef.current ? ' | HEILUNTA-ESTO' : ''}`;
    }
  }, [minZoom, maxZoom]);

  // Ulkoinen muutos (uusi sisältö tai ikkunan koko): rajoitus ja historia nollataan
  const reset = useCallback(() => {
    shrinkOnlyRef.current = false;
    historyRef.current = [];
  }, []);

  useLayoutEffect(() => {
    reset();
    fit('fitKey');
  }, [fit, reset, fitKey]);

  useLayoutEffect(() => {
    let raf = 0;
    const schedule = (why) => {
      const outer = outerRef.current;
      const measure = measureRef.current;
      const last = lastRef.current;
      if (outer && measure && last) {
        const r = measure.getBoundingClientRect();
        // Ei muutosta viime sovituksen jälkeen (esim. oma zoom-muutos) -> ei uutta laskentaa
        if (outer.clientHeight === last.avail && Math.abs(r.height - last.h) < 0.5 && Math.abs(r.width - last.w) < 0.5) return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => fit(why));
    };
    const onWindowResize = () => { reset(); schedule('ikkuna'); };
    const ro = new ResizeObserver(() => schedule('koko'));
    if (outerRef.current) ro.observe(outerRef.current);
    if (measureRef.current) ro.observe(measureRef.current);
    window.addEventListener('resize', onWindowResize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => schedule('fontit'));
    // Varmistus: jos jokin muutos jäi huomaamatta, sovitus korjataan viimeistään sekunnissa
    const interval = setInterval(() => { statsRef.current.checks++; schedule('tarkistus'); }, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
      ro.disconnect();
      window.removeEventListener('resize', onWindowResize);
    };
  }, [fit, reset]);

  return (
    <div ref={outerRef} className={`fit-outer ${className}`} style={style}>
      <div ref={measureRef} className="fit-measure">
        <div ref={innerRef} className="fit-inner">
          {children}
        </div>
      </div>
      {isDebug() && <div ref={debugRef} className="fit-debug" />}
    </div>
  );
}
