import { Image as ImageIcon, BookOpen, Hand, Laptop } from 'lucide-react';

// Tuorein päivitys. Päivitä tämä, kun peliin tulee uusi julkaisu:
// sama sisältö näkyy etusivun uutisessa ja Tietoa pelistä -ikkunassa.
export const LATEST_UPDATE = {
  date: '9.11.2026',
  title: 'Iso päivitys: kuvatehtävät ja uudet kysymykset',
  // Lyhyt otsikko etusivun uutiseen (mahtuu painikkeiden alle)
  short: 'Kuvatehtävät ja uudet kysymykset',
  items: [
    { icon: Laptop, text: 'Peli mahtuu nyt pienillekin näytöille, kuten Chromebookeille, ilman vierittämistä.' },
    { icon: Hand, text: 'Tärkeitä ohjeita ei voi enää ohittaa vahingossa: ohje pitää ensin ehtiä lukea.' },
    { icon: BookOpen, text: 'Tekoälyn perusteet -osion kysymykset on uudistettu kokonaan.' },
    { icon: ImageIcon, text: 'Uusi kysymystyyppi: kuvatehtävät! Niitä löytyy perusteista sekä Konepellin alla- ja Digiturva-osioista.' },
  ],
};
