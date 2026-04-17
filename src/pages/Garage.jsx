import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, PaintBucket, ShieldCheck, Radio, Sparkles, Wrench, Grid, Disc, Aperture, ChevronDown, Layers, ChevronLeft, X, Trophy, Save, Download } from 'lucide-react';
import { store } from '../services/store';
import { categories } from '../data/questions';

export default function Garage() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState(0);
  const [purchased, setPurchased] = useState([]);
  const [equipped, setEquipped] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const tutorialSkipped = store.getTutorialSkipped();
  const [isTutorialActive, setIsTutorialActive] = useState(!store.getTutorialCompleted() && !tutorialSkipped);
  const [hideTutorialBox, setHideTutorialBox] = useState(false);
  const [showGreenPulse, setShowGreenPulse] = useState(false);
  const [flashScreen, setFlashScreen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [closedGarageTuition, setClosedGarageTuition] = useState(() => localStorage.getItem('aivan_garage_tuition') === 'true');

  const [earnedTrophies, setEarnedTrophies] = useState([]);
  const [earnedMedals, setEarnedMedals] = useState({ platinum: 0, gold: 0, silver: 0, bronze: 0 });
  const [showTrophyCabinet, setShowTrophyCabinet] = useState(false);
  const [showTrophyTuition, setShowTrophyTuition] = useState(false);
  const [hoverCabinet, setHoverCabinet] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [clickPoints, setClickPoints] = useState([]);

  const [saveCode, setSaveCode] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [showMeterTutorial, setShowMeterTutorial] = useState(false);

  const handleCreateSave = async () => {
      setIsSaving(true);
      setSaveError(null);
      const code = await store.exportProgressToCloud();
      setIsSaving(false);
      
      if (code && !code._error) {
          setSaveCode(code);
      } else {
          setSaveError(code?._error ? code.message : "Yhteys aikakatkaistiin.");
      }
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === 'e') {
        setIsEditMode(prev => {
            if (prev) setClickPoints([]);
            return !prev;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [activeCategory, setActiveCategory] = useState(isTutorialActive ? 'g_floor' : 'body');

  const trophyMap = [
    { id: 'trophy1', mapId: 'perusteet', name: 'Tekoälyn perusteet' },
    { id: 'trophy2', mapId: 'arjessa', name: 'Tekoäly arjessamme' },
    { id: 'trophy3', mapId: 'konepellin', name: 'Konepellin alla' },
    { id: 'trophy4', mapId: 'aivoterveys', name: 'Aivoterveys' },
    { id: 'trophy5', mapId: 'reilu_peli', name: 'Reilu peli' },
    { id: 'trophy6', mapId: 'kayttotaidot', name: 'Tekoälyn käyttötaidot' },
    { id: 'trophy7', mapId: 'digiturva', name: 'Digiturva' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setSparks(await store.getSparks());
      setPurchased(await store.getPurchasedItems());
      setEquipped(await store.getEquippedItems());
      setCompletedLessons(store.getCompletions());

      // Palkintokaapin laskenta
      const stats = store.getNodeStats();
      let earned = [];
      trophyMap.forEach(t => {
         const cat = categories.find(c => c.id === t.mapId);
         if (!cat) return;
         const finalSub = cat.subcategories.find(sub => sub.id.endsWith('_7'));
         if (finalSub) {
             const stat = stats[finalSub.id];
             if (stat && stat.correct >= 7) {
                 earned.push(t.id);
             }
         }
      });
      setEarnedTrophies(earned);

      let mCounts = { platinum: 0, gold: 0, silver: 0, bronze: 0 };
      categories.forEach(cat => {
         cat.subcategories.forEach(sub => {
             const stat = stats[sub.id];
             if (stat && stat.total > 0) {
                 const ratio = stat.correct / stat.total;
                 if (stat.correct === stat.total) mCounts.platinum++;
                 else if (ratio >= 0.75) mCounts.gold++;
                 else if (ratio >= 0.40) mCounts.silver++;
                 else if (stat.correct >= 1) mCounts.bronze++;
             }
         });
      });
      setEarnedMedals(mCounts);
      
      if (earned.length > 0 && !localStorage.getItem('aivan_trophy_tuition')) {
         setShowTrophyTuition(true);
      }
    };
    fetchData();
    
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const carUpgrades = [
    // MAALIPINNAT
    { id: 'van-body01', category: 'body', categoryName: 'Maalipinnat', name: 'Sininen salama', desc: 'Kotimainen ja luotettava perusväri.', price: 0, isDefault: true, icon: <PaintBucket size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-body02', category: 'body', categoryName: 'Maalipinnat', name: 'Punainen liekki', desc: 'Räiskyvän punainen pinta.', price: 800, icon: <PaintBucket size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'van-body03', category: 'body', categoryName: 'Maalipinnat', name: 'Lumivalko', desc: 'Puhdas ja tyylikkään vaalea.', price: 800, icon: <PaintBucket size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'van-body04', category: 'body', categoryName: 'Maalipinnat', name: 'Kukkavoima', desc: 'Rauhaa, rakkautta ja tekoälyä.', price: 1500, icon: <PaintBucket size={28} />, color: '#ec4899', bg: '#fbcfe8' },
    { id: 'van-body05', category: 'body', categoryName: 'Maalipinnat', name: 'Seikkailija', desc: 'Sulaudu täydellisesti maastoon.', price: 1200, icon: <PaintBucket size={28} />, color: '#4d7c0f', bg: '#ecfccb' },
    { id: 'van-body06', category: 'body', categoryName: 'Maalipinnat', name: 'VIP-kyyti', desc: 'Hopean ja kullan ylellinen liitto.', price: 2500, icon: <PaintBucket size={28} />, color: '#d97706', bg: '#fef3c7' },
    { id: 'van-body07', category: 'body', categoryName: 'Maalipinnat', name: 'Varikkomestari', desc: 'Vauhdikas tuki kisaradoille.', price: 1500, icon: <PaintBucket size={28} />, color: '#dc2626', bg: '#fee2e2' },
    { id: 'van-body08', category: 'body', categoryName: 'Maalipinnat', name: 'Neon-unelma', desc: 'Kasarin kyberyötä huokuva retro.', price: 2000, icon: <PaintBucket size={28} />, color: '#c026d3', bg: '#fae8ff' },
    { id: 'van-body09', category: 'body', categoryName: 'Maalipinnat', name: 'Sateenkaari', desc: 'Väriä ja iloa teille.', price: 1200, icon: <PaintBucket size={28} />, color: '#fbbf24', bg: '#fef3c7' },
    { id: 'van-body10', category: 'body', categoryName: 'Maalipinnat', name: 'Kukkaniitty', desc: 'Tyylitelty ja kaunis kuosi.', price: 2000, icon: <PaintBucket size={28} />, color: '#f472b6', bg: '#fce7f3' },
    { id: 'van-body11', category: 'body', categoryName: 'Maalipinnat', name: 'Yön ritari', desc: 'Tumma ja puhuva mattamusta.', price: 800, icon: <PaintBucket size={28} />, color: '#1e293b', bg: '#f1f5f9' },
    { id: 'van-body12', category: 'body', categoryName: 'Maalipinnat', name: 'AI Team', desc: 'Rakastan sitä, kun promptit loksahtelevat kohdilleen.', price: 1200, icon: <PaintBucket size={28} />, color: '#ef4444', bg: '#1e293b' },
    
    // PUSKURIT (Punainen Mittari: Yritä uudelleen)
    { id: 'van-bumper01', category: 'bumper', categoryName: 'Puskurit', name: 'Peruspuskuri', desc: 'Luotettava perussuoja kaduille.', price: 0, isDefault: true, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'van-bumper05', category: 'bumper', categoryName: 'Puskurit', name: 'Rustiikkinen puskuri', desc: 'Rouheaa asennetta huokuva teräs.', price: 150, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Uusi yritys', desc: 'Antaa 2 uutta yritystä väärin menneisiin kysymyksiin per kartta!' } },
    { id: 'van-bumper02', category: 'bumper', categoryName: 'Puskurit', name: 'Kromipuskuri', desc: 'Kiiltävää näyttävyyttä.', price: 300, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Uusi yritys', desc: 'Antaa 3 uutta yritystä väärin menneisiin kysymyksiin per kartta!' } },
    { id: 'van-bumper04', category: 'bumper', categoryName: 'Puskurit', name: 'Mattamusta', desc: 'Hillitty ja moderni.', price: 600, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Uusi yritys', desc: 'Antaa 4 uutta yritystä väärin menneisiin kysymyksiin per kartta!' } },
    { id: 'van-bumper06', category: 'bumper', categoryName: 'Puskurit', name: 'Pronssipuskuri', desc: 'Hillityn arvokas.', price: 1000, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Uusi yritys', desc: 'Antaa 5 uutta yritystä väärin menneisiin kysymyksiin per kartta!' } },
    { id: 'van-bumper03', category: 'bumper', categoryName: 'Puskurit', name: 'Kultapuskuri', desc: 'Bling bling!', price: 1500, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Arvokas yritys', desc: 'Antaa peräti 6 uutta yritystä väärin menneisiin kysymyksiin per kartta!' } },

    // VANTEET (Keltainen Mittari: Vaihtoehdon poisto)
    { id: 'van-wheel01', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Peltivanteet', desc: 'Kestävä valinta.', price: 0, isDefault: true, icon: <Disc size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'van-wheel04', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Maastorenkaat', desc: 'Järeään käyttöön.', price: 150, icon: <Disc size={28} />, color: '#eab308', bg: '#fef08a', buff: { title: 'Väärän poisto', desc: 'Antaa +2 Poistoa per kartta!' } },
    { id: 'van-wheel02', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Alumiinivanteet', desc: 'Kevyet ja tyylikkäät.', price: 300, icon: <Aperture size={28} />, color: '#eab308', bg: '#fef08a', buff: { title: 'Väärän poisto', desc: 'Antaa +3 Poistoa per kartta!' } },
    { id: 'van-wheel03', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Erikoisvanteet', desc: 'Kun vain paras kelpaa.', price: 600, icon: <Sparkles size={28} />, color: '#eab308', bg: '#fef08a', buff: { title: 'Väärän poisto', desc: 'Antaa +4 Poistoa per kartta!' } },
    { id: 'van-wheel05', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Vintage-vanteet', desc: 'Tyylikästä nostalgiaa.', price: 1000, icon: <Disc size={28} />, color: '#eab308', bg: '#fef08a', buff: { title: 'Väärän poisto', desc: 'Antaa +5 Poistoa per kartta!' } },
    { id: 'van-wheel06', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Talvirenkaat', desc: 'Pitoa liukkaille.', price: 800, icon: <Disc size={28} />, color: '#0ea5e9', bg: '#e0f2fe', buff: { title: 'Talvipito', desc: 'Perus +2 Poistoa, mutta Reilu peli -kartalla antaa jopa +5 Poistoa!' } },

    // EXTRA
    { id: 'van-extra01', category: 'extra', categoryName: 'Erityisosat', name: 'Roots-ahdin', desc: 'Lisää tehoa konepellille!', price: 2000, icon: <Zap size={28} />, color: '#f59e0b', bg: '#fef3c7' },
    { id: 'van-extra02', category: 'extra', categoryName: 'Erityisosat', name: 'Työkalusarja vaativiin oloihin', desc: 'Valmiina kaikkiin remontteihin tien päällä.', price: 1000, icon: <Wrench size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'van-extra03', category: 'extra', categoryName: 'Erityisosat', name: 'Taakkateline ja lisävalot', desc: 'Taakkateline ja lisävalot katolle.', price: 1500, icon: <Sparkles size={28} />, color: '#6366f1', bg: '#e0e7ff' },
    { id: 'van-extra04', category: 'extra', categoryName: 'Erityisosat', name: 'Vinssi', desc: 'Vinssi, jolla kapuaa korkeimmallekin vuorelle.', price: 800, icon: <ShieldCheck size={28} />, color: '#fb7185', bg: '#fee2e2', buff: { title: 'Vuoristoapu', desc: 'Vinssi antaa +3 Vaihto-apua Aivoterveys-kartalla!' } },
    { id: 'van-extra05', category: 'extra', categoryName: 'Erityisosat', name: 'Sivuikkuna takatilaan', desc: 'Lisää valoa ja tilan tunnetta.', price: 600, icon: <Grid size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-extra06', category: 'extra', categoryName: 'Erityisosat', name: 'Snorkkeli', desc: 'Vedenaalaisiin seikkailuihin.', price: 1000, icon: <Map size={28} />, color: '#0ea5e9', bg: '#e0f2fe', buff: { title: 'Sukellusvaruste', desc: 'Antaa 3 uutta yritystä Digiturva-kartalla!' } },
    { id: 'van-extra07', category: 'extra', categoryName: 'Erityisosat', name: 'Erämaa-antenni', desc: 'Jotta poppi pauhaa erämaassakin.', price: 700, icon: <Radio size={28} />, color: '#8b5cf6', bg: '#ede9fe', buff: { title: 'Erämaayhteys', desc: 'Antaa +3 Poistoa Konepellin alle -kartalla!' } }
  ];

  const garageUpgrades = [
    { id: 'g-clean', category: 'g_floor', categoryName: 'Lattia', name: 'Siivous', desc: 'Raivaa seittien ja lian pahin kerros.', price: 200, icon: <Sparkles size={28} />, color: '#854d0e', bg: '#fefce8' },
    { id: 'g-floor-base', category: 'g_floor', categoryName: 'Lattia', name: 'Öljytahrojen poisto', desc: 'Siivoaa öljyläikät.', price: 400, icon: <Grid size={28} />, color: '#a16207', bg: '#fefce8' },
    { id: 'g-floor2', category: 'g_floor', categoryName: 'Lattia', name: 'Säröjen korjaus', desc: 'Korjaa lattian säröt.', price: 800, icon: <Grid size={28} />, color: '#78716c', bg: '#f5f5f4' },
    { id: 'g-floor3', category: 'g_floor', categoryName: 'Lattia', name: 'Betonilattia', desc: 'Uusi kestävä betonivalu.', price: 1500, icon: <Grid size={28} />, color: '#44403c', bg: '#e7e5e4', buff: { title: 'Työviihtyvyys', desc: 'Saat oikeista vastauksista +10% enemmän kipinöitä', isSpark: true } },
    
    { id: 'g-walls-base', category: 'g_walls', categoryName: 'Seinät', name: 'Seinien pesu', desc: 'Pesee lian seiniltä.', price: 500, icon: <Layers size={28} />, color: '#9a3412', bg: '#ffedd5' },
    { id: 'g-walls2', category: 'g_walls', categoryName: 'Seinät', name: 'Syväpuhdistus', desc: 'Korjaa ja syväpuhdistaa seinät.', price: 1200, icon: <Layers size={28} />, color: '#c2410c', bg: '#ffedd5', buff: { title: 'Puhdas talli!', desc: 'Saat oikeista vastauksista +10% enemmän kipinöitä', isSpark: true } },
    { id: 'g-walls3', category: 'g_walls', categoryName: 'Seinät', name: 'Nykyaikainen talli', desc: 'Luotettava ja puhdas moderni tyyli.', price: 2000, icon: <Layers size={28} />, color: '#64748b', bg: '#f1f5f9', buff: { title: 'Kiviseinät', desc: 'Saat oikeista vastauksista +20% enemmän kipinöitä', isSpark: true } },
    { id: 'g-walls4', category: 'g_walls', categoryName: 'Seinät', name: 'Futuristinen halli', desc: 'Korkean teknologian ja lasin liitto.', price: 5000, icon: <Sparkles size={28} />, color: '#334155', bg: '#e2e8f0', buff: { title: 'Tulevaisuus', desc: 'Saat oikeista vastauksista +30% enemmän kipinöitä', isSpark: true } },
    
    // TYÖKALUSARJAT (Vihreä mittari: Kysymyksen ohitus)
    { id: 'g-walltools6', category: 'g_tools', categoryName: 'Työkalut', name: '"Paremman puutteessa" -työkalut', desc: 'Näilläkin saa jotain aikaiseksi.', price: 150, icon: <Wrench size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Kysymyksen vaihto', desc: 'Antaa +2 Vaihtoa per kartta!' } },
    { id: 'g-walltools1', category: 'g_tools', categoryName: 'Työkalut', name: 'Työkalusarja', desc: 'Perustyökalut esille.', price: 300, icon: <Wrench size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Kysymyksen vaihto', desc: 'Antaa +3 Vaihtoa per kartta!' } },
    { id: 'g-walltools5', category: 'g_tools', categoryName: 'Työkalut', name: '"Ihan ok" -työkalut', desc: 'Ajaa asiansa.', price: 600, icon: <Wrench size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Kysymyksen vaihto', desc: 'Antaa +4 Vaihtoa per kartta!' } },
    { id: 'g-walltools2', category: 'g_tools', categoryName: 'Työkalut', name: 'Parannetut työkalut', desc: 'Kattavampi setti harrastajalle.', price: 1000, icon: <Wrench size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Kysymyksen vaihto', desc: 'Antaa +5 Vaihtoa per kartta.' } },
    { id: 'g-walltools3', category: 'g_tools', categoryName: 'Työkalut', name: 'Huipputyökalut', desc: 'Kaikki mitä ammattilainen tarvitsee.', price: 1500, icon: <Sparkles size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Kysymyksen vaihto', desc: 'Antaa +6 Vaihtoa per kartta.' } },
    { id: 'g-walltools4', category: 'g_tools', categoryName: 'Työkalut', name: 'Tulevaisuuden työkalut', desc: 'Tulevaisuuden tekijöille.', price: 2000, icon: <Zap size={28} />, color: '#22c55e', bg: '#dcfce7', buff: { title: 'Tuplavaihto', desc: 'Antaa huikeat +7 Vaihtoa per kartta!' } },

    // TUNKIT (Sininen ominaisuus)
    { id: 'g-jack1', category: 'g_jack', categoryName: 'Tunkit', name: 'Perustunkki', desc: 'Nostaa auton turvallisesti.', price: 500, icon: <Disc size={28} />, color: '#3b82f6', bg: '#dbeafe', buff: { title: 'Putoamisen esto (Taso 1)', desc: 'Satunnainen mahdollisuus saada toinen yritys Oikein vai väärin -tehtävässä.' } },
    { id: 'g-jack2', category: 'g_jack', categoryName: 'Tunkit', name: 'Laatutunkki', desc: 'Nopea ja vahva hallitunkki.', price: 1000, icon: <Disc size={28} />, color: '#3b82f6', bg: '#dbeafe', buff: { title: 'Putoamisen esto (Taso 2)', desc: 'Pieni mahdollisuus saada toinen yritys Oikein vai väärin -tehtävässä.' } },
    { id: 'g-jack3', category: 'g_jack', categoryName: 'Tunkit', name: 'Levitaatiotunkki', desc: 'Auto nousee ilmaan melkein itsestään. Maagista!', price: 2500, icon: <Aperture size={28} />, color: '#3b82f6', bg: '#dbeafe', buff: { title: 'Levitaatio (Taso 3)', desc: 'Kohtalainen mahdollisuus saada toinen yritys Oikein vai väärin -tehtävässä.' } }
  ];

  const setCategory = (cat) => {
    if (isTutorialActive && cat !== 'g_floor') return;
    setActiveCategory(cat);
  };

  const renderSquareItem = (item) => {
    const isCarItem = carUpgrades.some(u => u.id === item.id);
    const equippableGarageCategories = ['g_tools', 'g_jack', 'g_walls'];
    const isEquippableGarage = equippableGarageCategories.includes(item.category);
    const isOwned = purchased.includes(item.id) || item.isDefault;
    const slot = item.category === 'extra' ? item.id : item.category;
    const isEquipped = isCarItem ? (equipped[slot] === item.id || (!equipped[slot] && item.isDefault)) : (isEquippableGarage ? (equipped[slot] === item.id || (!equipped[slot] && item.isDefault)) : isOwned);
    
    let meetsPrereq = true;
    let prereqText = '';
    if (item.id === 'g-floor2' && !purchased.includes('g-floor-base')) {
        meetsPrereq = false;
        prereqText = 'VAATII EDELLISEN';
    } else if (item.id === 'g-floor3' && !purchased.includes('g-floor2')) {
        meetsPrereq = false;
        prereqText = 'VAATII EDELLISEN';
    } else if (item.id === 'g-walls2' && !purchased.includes('g-walls-base')) {
        meetsPrereq = false;
        prereqText = 'VAATII EDELLISEN';
    } else if (item.id === 'g-walls3' && !purchased.includes('g-walls2')) {
        meetsPrereq = false;
        prereqText = 'VAATII EDELLISEN';
    } else if (item.id === 'g-walls4' && !purchased.includes('g-walls3')) {
        meetsPrereq = false;
        prereqText = 'VAATII EDELLISEN';
    }

    let btnText = item.price === 0 && !isOwned ? 'OTA KÄYTTÖÖN' : `OSTA ⚡ ${item.price}`;
    let btnBg = (sparks >= item.price || item.isDefault) ? '#3b82f6' : '#e2e8f0'; 
    let btnColor = (sparks >= item.price || item.isDefault) ? 'white' : 'var(--text-muted)';
    const canBuy = sparks >= item.price && !isOwned && !item.isDefault && meetsPrereq && (!isTutorialActive || item.id === 'g-clean');
    let btnShadow = canBuy ? '0 4px 6px rgba(59, 130, 246, 0.3)' : 'none';
    let cursor = (canBuy || (item.isDefault && !isEquipped && !isTutorialActive)) ? 'pointer' : 'not-allowed';

    if (isTutorialActive && item.id !== 'g-clean') {
       btnBg = '#f1f5f9';
       btnColor = '#94a3b8';
       cursor = 'not-allowed';
    } else if (!meetsPrereq && !isOwned) {
       btnText = prereqText;
       btnBg = '#f1f5f9';
       btnColor = '#94a3b8';
       cursor = 'not-allowed';
    } else if (isEquipped && item.category === 'extra') {
       btnText = 'POISTA';
       btnBg = '#64748b'; 
       btnColor = 'white';
       cursor = 'pointer';
    } else if (isEquipped) {
       btnText = 'ASENNETTU';
       btnBg = '#10b981'; 
       btnColor = 'white';
       cursor = 'default';
    } else if (isOwned && (isCarItem || isEquippableGarage)) {
       btnText = 'ASENNA';
       btnBg = '#0ea5e9'; 
       btnColor = 'white';
       cursor = 'pointer';
    }

    let extraBtnClass = "";
    if (isTutorialActive && item.id === 'g-clean') {
        extraBtnClass = " animate-wiggle";
    }

    return (
      <div key={item.id} className={`glass-panel grid-item ${isEquipped ? 'equipped-highlight' : ''}`}
           style={{ 
               background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)', 
               borderColor: isEquipped ? '#10b981' : '#cbd5e1',
               borderWidth: '2px',
               boxShadow: '0 4px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
               position: 'relative'
           }} 
           onMouseEnter={() => { if (!isTutorialActive || item.id === 'g-clean') setHoveredItem(item.id); }}
           onMouseLeave={() => setHoveredItem(null)}>
           
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', width: '100%', flexGrow: 1, position: 'relative', padding: '0.6rem' }}>
              {item.buff && (
                  <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderTop: `45px solid ${item.buff.isSpark ? '#f59e0b' : (item.color || '#22c55e')}`, borderLeft: '45px solid transparent', zIndex: 10, filter: 'drop-shadow(-2px 2px 4px rgba(0,0,0,0.1))' }} title={`${item.buff.title}: ${item.buff.desc}`}>
                      <div style={{ position: 'absolute', top: '-40px', right: '0px', color: 'rgba(255,255,255,0.95)', transform: 'rotate(15deg)', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                         {item.buff.isSpark ? <Zap size={18} fill="white" /> : '✦'}
                      </div>
                  </div>
              )}
              {item.category === 'body' ? (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0, borderRadius: '10px 10px 0 0' }}>
                    <img src={`/carparts/${item.id}.png`} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(3.5)', transformOrigin: '30% 65%', opacity: 1, filter: 'saturate(1.2)' }} alt={item.name} />
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}></div>
                  </div>
              ) : (
                  <div style={{ 
                      color: '#475569', 
                      zIndex: 1, 
                      marginTop: 'auto', 
                      marginBottom: '0.6rem',
                      background: 'linear-gradient(135deg, #cbd5e1 0%, #f1f5f9 100%)',
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 5px rgba(255,255,255,0.7)',
                      border: '1px solid #94a3b8',
                      flexShrink: 0
                  }}>
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, marginTop: item.category === 'body' ? 'auto' : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: item.category === 'body' ? 'white' : '#1e293b', textAlign: 'center', lineHeight: '1.2', textShadow: item.category === 'body' ? '0 2px 4px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8)' : 'none' }}>{item.name}</span>
                  </div>
              </div>
          </div>

          <div style={{ padding: '0.6rem', paddingTop: '0.4rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 5 }}>
             <button 
                className={`btn-primary${extraBtnClass}`} 
                style={{ padding: '0.5rem', fontSize: '0.85rem', width: '100%', background: btnBg, color: btnColor, boxShadow: btnShadow, cursor, borderRadius: '8px' }}
                onClick={async (e) => {
                  e.stopPropagation();
                        if (canBuy) {
                          const success = await store.purchaseItem(item.id, item.price, (isCarItem || isEquippableGarage) ? slot : null);
                          if (success) {
                            setSparks(await store.getSparks());
                            setPurchased(await store.getPurchasedItems());
                            setEquipped(await store.getEquippedItems());
                            
                            if (['bumper', 'wheel', 'g_tools'].includes(item.category)) {
                                if (!localStorage.getItem('aivan_meter_tutorial_seen')) {
                                    localStorage.setItem('aivan_meter_tutorial_seen', 'true');
                                    setShowMeterTutorial(true);
                                }
                            }
                            
                            if (item.id === 'g-clean' && isTutorialActive) {
                                store.completeTutorial();
                                setIsTutorialActive(false);
                                setActiveCategory('g_floor'); 
                                setFlashScreen(true);
                                setTimeout(() => {
                                    setShowGreenPulse(true);
                                }, 2500);
                            }
                          }
                        } else if (isEquipped && item.category === 'extra') {
                           const success = await store.unequipItem(slot);
                           if (success) {
                             setEquipped(await store.getEquippedItems());
                           }
                        } else if (isOwned && (isCarItem || isEquippableGarage) && !isEquipped) {
                           const success = await store.equipItem(item.id, slot);
                           if (success) {
                             setEquipped(await store.getEquippedItems());
                           }
                        }
                      }}
                    >
                      {btnText}
                </button>
             </div>
      </div>
    );
  };

  const categorisedCar = [...carUpgrades].sort((a, b) => a.price - b.price).reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = { name: item.categoryName, items: [] };
    acc[item.category].items.push(item);
    return acc;
  }, {});

  const categorisedGarage = [...garageUpgrades].sort((a, b) => a.price - b.price).reduce((acc, item) => {
    let displayCat = item.category;
    if (displayCat === 'g_jack') displayCat = 'g_tools';

    if (!acc[displayCat]) acc[displayCat] = { name: (displayCat === 'g_tools' ? 'Työkalut' : item.categoryName), items: [] };
    acc[displayCat].items.push(item);
    return acc;
  }, {});

  const hoveredObj = hoveredItem ? [...carUpgrades, ...garageUpgrades].find(i => i.id === hoveredItem) : null;
  const hoverSlot = hoveredObj ? (hoveredObj.category === 'extra' ? hoveredObj.id : hoveredObj.category) : null;
  const isGlobalPreview = hoveredObj && equipped[hoverSlot] !== hoveredObj.id && hoveredObj.id !== 'g-clean';

  return (
    <>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: 'radial-gradient(circle at 50% 0%, #fefefe 0%, #e2e8f0 70%, #cbd5e1 100%)' }} />
    <div className="animate-fade-in" style={{ padding: '1rem 2rem', maxWidth: '2000px', margin: '0 auto', width: '100%' }}>
      <style>{`
        .garage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (min-width: 1100px) {
          .garage-grid {
            grid-template-columns: 260px 420px 1fr;
          }
        }
        @media (max-width: 1099px) {
          .garage-left { order: 1; }
          .garage-center { order: 2; }
          .garage-right { order: 3; }
        }
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1rem;
          background: rgba(255,255,255,0.7);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          user-select: none;
          border: 1px solid rgba(0,0,0,0.05);
          margin-bottom: 0.5rem;
        }
        .category-header:hover {
          background: rgba(255,255,255,0.9);
          border-color: var(--primary-color);
        }
        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.8rem;
          margin-bottom: 2rem;
          align-content: start;
        }
        .grid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          padding: 0;
          min-height: 120px;
        }
        .grid-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          z-index: 10;
        }
        .equipped-highlight {
           box-shadow: inset 0 0 0 3px rgba(16, 185, 129, 0.2);
        }
        @keyframes blackoutFade {
          0% { opacity: 1; }
          60% { opacity: 1; }
          100% { opacity: 0; }
        }
        .flash-blackout {
          animation: blackoutFade 3.5s ease-in-out forwards;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) scale(1.05); }
          50% { transform: rotate(3deg) scale(1.05); }
        }
        @keyframes wiggle-glow {
          0%, 100% { transform: rotate(-3deg) scale(1.05); box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); }
          50% { transform: rotate(3deg) scale(1.05); box-shadow: 0 0 30px rgba(16, 185, 129, 1); }
        }
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out infinite;
        }
        .animate-wiggle-glow {
          animation: wiggle-glow 0.8s ease-in-out infinite;
        }
      `}</style>

      {/* flashScreen moved to garage-right */}
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            className="btn-secondary" 
            style={{ 
                padding: '0.8rem 1.5rem', 
                borderRadius: '15px', 
                background: 'white', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: isTutorialActive ? 'not-allowed' : 'pointer',
                opacity: isTutorialActive ? 0.3 : 1
            }}
            onClick={() => { if (!isTutorialActive) navigate('/lobby') }}
          >
            <ChevronLeft size={28} color="var(--primary-color)" />
            <span style={{ fontWeight: 900, color: 'var(--primary-color)', fontSize: '0.9rem' }}>PÄÄVALIKKO</span>
          </button>
          <div>
            <h1 style={{ margin: 0, fontSize: '3rem' }}>Autotalli</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-main)' }}>Rakennetaan yhdessä unelmien AI-paku!</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#d97706', background: '#fef3c7', border: '2px solid #fde68a', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-main)' }}>
            <Zap size={24} fill="#d97706" /> {sparks} Kipinää
          </div>
          {!isTutorialActive && (
              <button 
                onClick={handleCreateSave} 
                disabled={isSaving}
                className="btn-secondary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Save size={20} color="#0ea5e9" /> {isSaving ? 'Tallennetaan...' : 'Luo jatkamiskoodi'}
              </button>
          )}
          <button 
             className={`btn-secondary ${showGreenPulse ? 'animate-wiggle-glow' : (!isTutorialActive && sparks === 0 ? 'animate-pulse' : '')}`} 
             onClick={() => navigate('/roadmap')}
             disabled={isTutorialActive}
             style={{ 
                 opacity: isTutorialActive ? 0.3 : 1, 
                 cursor: isTutorialActive ? 'not-allowed' : 'pointer',
                 background: showGreenPulse ? '#10b981' : undefined,
                 color: showGreenPulse ? 'white' : undefined,
                 borderColor: showGreenPulse ? '#10b981' : undefined,
                 boxShadow: showGreenPulse ? undefined : undefined
             }}
          >
            <Map size={20} /> Tiekartta
          </button>
        </div>
      </div>

      <div className="garage-grid">
        
        {/* LEFT COLUMN: Categories Menu */}
        <div className="garage-left">
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'left', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Auton osat</h3>
                {Object.entries(categorisedCar).map(([catId, category]) => {
                  const isLocked = isTutorialActive;
                  return (
                    <div key={catId} style={{ marginBottom: '0.5rem' }}>
                      <div 
                        className="category-header" 
                        onClick={() => setCategory(catId)}
                        style={{ 
                          borderColor: activeCategory === catId ? 'var(--primary-color)' : 'rgba(0,0,0,0.05)',
                          background: activeCategory === catId ? '#f8fafc' : 'rgba(255,255,255,0.7)',
                          pointerEvents: isLocked ? 'none' : 'auto',
                          opacity: isLocked ? 0.4 : 1,
                          filter: isLocked ? 'grayscale(100%)' : 'none',
                          boxShadow: activeCategory === catId ? '0 4px 10px rgba(0,0,0,0.05)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                           {catId === 'body' && <PaintBucket size={18} color="var(--primary-color)" />}
                           {catId === 'bumper' && <ShieldCheck size={18} color="var(--primary-color)" />}
                           {catId === 'wheel' && <Aperture size={18} color="var(--primary-color)" />}
                           {catId === 'extra' && <Zap size={18} color="var(--primary-color)" />}
                           <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{category.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'left', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tallin parannukset</h3>
                {Object.entries(categorisedGarage).map(([catId, category]) => {
                  const isLocked = isTutorialActive && catId !== 'g_floor';
                  return (
                    <div key={catId} style={{ marginBottom: '0.5rem' }}>
                      <div 
                        className="category-header" 
                        onClick={() => setCategory(catId)}
                        style={{ 
                          borderColor: activeCategory === catId ? '#8b5cf6' : 'rgba(0,0,0,0.05)',
                          background: activeCategory === catId ? '#f5f3ff' : 'rgba(255,255,255,0.7)',
                          pointerEvents: isLocked ? 'none' : 'auto',
                          opacity: isLocked ? 0.4 : 1,
                          filter: isLocked ? 'grayscale(100%)' : 'none',
                          boxShadow: activeCategory === catId ? '0 4px 10px rgba(0,0,0,0.05)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                           {catId === 'g_floor' && <Grid size={18} color="#8b5cf6" />}
                           {catId === 'g_walls' && <Layers size={18} color="#8b5cf6" />}
                           {catId === 'g_tools' && <Wrench size={18} color="#8b5cf6" />}
                           {catId === 'g_jack' && <Disc size={18} color="#8b5cf6" />}
                           <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{category.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
           </div>
        </div>

        {/* CENTER COLUMN: Selected Category Items */}
        <div className="garage-center">
            <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: 0, marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              {activeCategory ? (categorisedCar[activeCategory]?.name || categorisedGarage[activeCategory]?.name) : "Valitse kategoria"}
            </h2>
            {activeCategory === 'g_tools' ? (
              <>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Seinätyökalut</h3>
                <div className="items-grid animate-fade-in" style={{ marginBottom: '2.5rem' }}>
                     {categorisedGarage['g_tools']?.items.filter(i => i.category === 'g_tools').map(item => renderSquareItem(item))}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Tunkit</h3>
                <div className="items-grid animate-fade-in">
                     {categorisedGarage['g_tools']?.items.filter(i => i.category === 'g_jack').map(item => renderSquareItem(item))}
                </div>
              </>
            ) : (
              <div className="items-grid animate-fade-in">
                   {activeCategory && categorisedGarage[activeCategory]?.items.map(item => renderSquareItem(item))}
                   {activeCategory && categorisedCar[activeCategory]?.items.map(item => renderSquareItem(item))}
              </div>
            )}
        </div>

        {/* RIGHT COLUMN: Visual Preview Graphic */}
        <div className="garage-right">
           <div style={{ 
            position: 'relative', 
            width: '100%',
            aspectRatio: '16/9',
            minHeight: '400px',
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '4px solid rgba(76, 133, 17, 0.4)',
            transition: 'box-shadow 0.3s ease',
            boxShadow: isGlobalPreview 
              ? '0 0 0 6px rgba(16, 185, 129, 0.9), inset 0 0 50px rgba(0,0,0,0.5), 0 20px 40px rgba(0, 0, 0, 0.2)' 
              : 'inset 0 0 50px rgba(0,0,0,0.5), 0 20px 40px rgba(0, 0, 0, 0.1)',
            background: 'radial-gradient(circle at top, #334155 0%, #0f172a 100%)'
          }}>
              
              {flashScreen && (
                <div className="flash-blackout" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#020617', zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <Sparkles size={80} color="#fbbf24" style={{ animation: 'wiggle 0.5s infinite' }} />
                    <h2 style={{ color: 'white', marginTop: '1rem', fontFamily: 'var(--font-display)', letterSpacing: '4px' }}>TALLIN SIIVOUS KÄYNNISSÄ...</h2>
                </div>
              )}

              {isTutorialActive && !hideTutorialBox && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 3rem 1.2rem 1.5rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => setHideTutorialBox(true)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   Olet nyt vanhan autotallin omistaja. Romun seasta käteesi osui heti laatikollinen kipinöitä! Kuka tietää, mitä muuta tallista löytyy, kunhan tartut toimeen. Osta valikosta <b>Siivous</b> ja katso, mitä aarteita romun alta paljastuu!
                </div>
              )}
              
              {showGreenPulse && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 3rem 1.2rem 1.5rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => setShowGreenPulse(false)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   <b>Tulipa siistiä!</b> Tallista löytyi auto... Eikä mikä tahansa auto, vaan ihkaoikea <span style={{ background: 'linear-gradient(90deg, #166534, #4ade80, #38bdf8, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI van!</span>, joka vie sinut tekoälyseikkailulle!<br/>Kipinät loppuivat, joten klikkaapa oikeasta ylänurkasta "Tiekartta" ja käy keräämässä lisää!
                </div>
              )}
              
              {completedLessons.length > 0 && !closedGarageTuition && !isTutorialActive && !tutorialSkipped && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 3rem 1.2rem 1.5rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => { localStorage.setItem('aivan_garage_tuition', 'true'); setClosedGarageTuition(true); }} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   <b>Tervetuloa takaisin!</b><br/>
                   Voit käyttää tienaamiasi kipinöitä <span style={{ background: 'linear-gradient(90deg, #166534, #4ade80, #38bdf8, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI vanin</span> päivityksiin tai tehdä tallistasi entistä hienomman. Valikot toimivat tosi helposti: klikkaa haluamaasi osa-aluetta vasemmalta, niin näet kaikki päivitykset heti siinä vieressä!
                   <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', background: '#3b82f6' }} onClick={() => {
                        localStorage.setItem('aivan_garage_tuition', 'true');
                        setClosedGarageTuition(true);
                   }}>Eikun hommiin!</button>
                </div>
              )}
              
              {showTrophyTuition && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.98)', padding: '1.5rem 3rem 1.5rem 2rem', borderRadius: '24px', border: '5px solid #eab308', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 90, textAlign: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.3)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => { localStorage.setItem('aivan_trophy_tuition', 'true'); setShowTrophyTuition(false); }} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                      <img src="/trophy/trophy1.png" style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt="Pokaali" />
                   </div>
                   <b>Loistosuoritus!</b> Ansaitsit pokaalin selvitettyäsi kartan.<br/><br/>Voit ihastella palkintojasi palkintokaapista - löydätkö sen tallistasi?
                   <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', background: '#eab308', color: '#0f172a' }} onClick={() => {
                        localStorage.setItem('aivan_trophy_tuition', 'true');
                        setShowTrophyTuition(false);
                        setShowTrophyCabinet(true);
                   }}>Avaa Palkintokaappi</button>
                </div>
              )}
              
               {saveCode && (
                 <div className="animate-bounce" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.98)', padding: '2rem 3rem', borderRadius: '16px', border: '4px solid #0ea5e9', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 90, textAlign: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.3)', width: '90%', maxWidth: '600px' }}>
                    <button onClick={() => setSaveCode(null)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={24} /></button>
                    <h3 style={{ margin: '0 0 1rem 0', color: '#0ea5e9', fontSize: '1.6rem', fontFamily: 'var(--font-display)' }}>Rekisterikilpesi on valmis!</h3>
                    <p style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.1rem' }}>Ota tämä koodi talteen. Kun palaat pelaamaan Lobbyn kautta uudella laitteella, syötä tämä rekisterikilpi sille varattuun kenttään, ja saat kaikki kipinäsi ja varusteesi takaisin.</p>
                    
                    <div style={{ background: 'white', border: '3px solid #cbd5e1', borderRadius: '12px', display: 'flex', alignItems: 'stretch', boxShadow: '0 8px 25px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden', margin: '0 1rem' }}>
                       <div style={{ background: '#0ea5e9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1.2rem', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                          <div style={{ display: 'flex', gridTemplateColumns: 'repeat(3, 1fr)', width: '32px', height: '32px', gap: '3px', display: 'grid', justifyContent: 'center', alignContent: 'center', marginBottom: '8px' }}>
                             {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <div key={i} style={{ width: '8px', height: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i !== 4 && <Zap size={8} fill="#fde047" color="#fde047" strokeWidth={1} />}</div>)}
                          </div>
                          FIN
                       </div>
                       <div style={{ padding: '0.8rem 1rem', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '8px', color: '#1e293b', fontFamily: 'monospace' }}>{saveCode}</span>
                       </div>
                    </div>
                    
                    <button className="btn-primary" style={{ background: '#0ea5e9', marginTop: '2rem', width: '100%', fontSize: '1.3rem' }} onClick={() => setSaveCode(null)}>
                       Selvä juttu! Otan talteen
                    </button>
                 </div>
               )}

               {showTrophyCabinet && (
                 <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowTrophyCabinet(false)}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
                       <button onClick={() => setShowTrophyCabinet(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: 'white', borderRadius: '50%', padding: '0.5rem', zIndex: 600, transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}><X size={40} /></button>
                       
                       <div style={{ position: 'relative', display: 'flex', maxHeight: '100%', maxWidth: '1400px', justifyContent: 'center', alignItems: 'center' }}>
                           <img src="/talli/cabinet2.png" alt="Palkintokaappi" style={{ maxHeight: '90vh', maxWidth: '100%', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain', zIndex: 4, pointerEvents: 'none' }} />
                       
                           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50, cursor: isEditMode ? 'crosshair' : 'default' }}
                            onClick={(e) => {
                               if (!isEditMode) return;
                               const rect = e.currentTarget.getBoundingClientRect();
                               const x = ((e.clientX - rect.left) / rect.width) * 100;
                               const y = ((e.clientY - rect.top) / rect.height) * 100;
                               setClickPoints(prev => prev.length >= 2 ? [{x, y}] : [...prev, {x, y}]);
                            }}>
                            
                            {isEditMode && clickPoints.map((p, i) => (
                                <div key={i} style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: '10px', height: '10px', background: 'red', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 401, pointerEvents: 'none' }} />
                            ))}
                            {isEditMode && clickPoints.length === 2 && (
                                <>
                                    <div style={{ position: 'absolute', left: `${Math.min(clickPoints[0].x, clickPoints[1].x)}%`, top: `${Math.min(clickPoints[0].y, clickPoints[1].y)}%`, width: `${Math.abs(clickPoints[0].x - clickPoints[1].x)}%`, height: `${Math.abs(clickPoints[0].y - clickPoints[1].y)}%`, background: 'rgba(59, 130, 246, 0.4)', border: '2px dashed #60a5fa', zIndex: 400, pointerEvents: 'none' }} />
                                    <div style={{ position: 'absolute', backgroundColor: 'black', color: '#10b981', padding: '1.5rem', top: '20px', left: '20px', zIndex: 500, fontFamily: 'monospace', borderRadius: '8px', border: '2px solid #10b981', fontSize: '1.2rem' }}>
                                        Ota ylös nämä koordinaatit:<br/><br/>
                                        top: '{Math.min(clickPoints[0].y, clickPoints[1].y).toFixed(2)}%',<br/>
                                        left: '{Math.min(clickPoints[0].x, clickPoints[1].x).toFixed(2)}%',<br/>
                                        width: '{Math.abs(clickPoints[0].x - clickPoints[1].x).toFixed(2)}%',<br/>
                                        height: '{Math.abs(clickPoints[0].y - clickPoints[1].y).toFixed(2)}%'
                                    </div>
                                </>
                            )}
                       </div>

                       {/* Ylähylly: Pokaalit */}
                       <div style={{ position: 'absolute', top: '12.09%', left: '21.83%', width: '56.42%', height: '34.85%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: 5, pointerEvents: 'none', paddingBottom: '1%' }}>
                           {trophyMap.map(t => { 
                               const isEarned = earnedTrophies.includes(t.id);
                               return (
                                   <div key={t.id} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', filter: isEarned ? 'drop-shadow(0 0 10px rgba(250,204,21,0.6))' : 'brightness(0) opacity(0.2)', transition: 'all 0.3s' }}>
                                       <img src={`/trophy/${t.id}.png`} style={{ maxHeight: '90%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom' }} alt={t.name} />
                                   </div>
                               );
                           })}
                       </div>
                       
                       {/* Alahylly: Mitalit */}
                       <div style={{ position: 'absolute', top: '50.66%', left: '22.17%', width: '55.42%', height: '33.95%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: 5, pointerEvents: 'none', paddingBottom: '1%' }}>
                            {['platinum', 'gold', 'silver', 'bronze'].map(type => {
                                 const count = earnedMedals[type] || 0;
                                 if (count === 0) {
                                     // Show placeholder if no medals
                                     return (
                                          <div key={type} style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', opacity: 0.15, filter: 'brightness(0)', height: '100%' }}>
                                              <img src={`/trophy/medal-${type === 'platinum' ? 'plat' : type}.png`} alt={type} style={{ maxHeight: '60%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom' }} />
                                          </div>
                                     );
                                 }
                                 
                                 const maxShow = Math.min(count, 10);
                                 
                                 return (
                                     <div key={type} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                                         <div style={{ position: 'relative', height: '60%', aspectRatio: '1/1' }}>
                                             {Array.from({ length: maxShow }).map((_, i) => (
                                                  <img key={i} src={`/trophy/medal-${type === 'platinum' ? 'plat' : type}.png`} alt={type} style={{ position: 'absolute', bottom: `${i * 10}%`, left: `calc(50% - ${i * 1.5}px)`, transform: 'translateX(-50%)', width: '100%', height: '100%', objectFit: 'contain', zIndex: i }} />
                                             ))}
                                         </div>
                                         <div style={{ position: 'absolute', top: '25%', right: '-30%', background: '#eab308', color: '#0f172a', fontWeight: 'bold', fontSize: '1rem', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '2px solid white', zIndex: 20, boxShadow: '0 4px 6px rgba(0,0,0,0.5)' }}>
                                              {count}
                                         </div>
                                     </div>
                                 );
                            })}
                           </div>
                        </div>
                     </div>
                  </div>
               )}

              {isTutorialActive ? (
                <img src="/tutorial1.png" alt="Likainen Autotalli tutoriaali" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0, pointerEvents: 'none' }} />
              ) : (
                <>
                  <img src="/talli/autotalli-base.png" alt="Autotallin tausta" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0, pointerEvents: 'none' }} />
                  <img src="/talli/cabinet.png" alt="Palkintokaappi" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, pointerEvents: 'none', filter: hoverCabinet && (earnedTrophies.length > 0 || Object.values(earnedMedals).reduce((a, b) => a + b, 0) > 0) ? 'drop-shadow(0 0 15px rgba(253, 224, 71, 0.8)) brightness(1.15)' : 'none', transition: 'all 0.2s' }} />
                  <div style={{ position: 'absolute', top: '38.44%', left: '72.85%', width: '10.51%', height: '14.42%', zIndex: 10, cursor: 'pointer' }} onMouseEnter={() => setHoverCabinet(true)} onMouseLeave={() => setHoverCabinet(false)} onClick={() => setShowTrophyCabinet(true)} />
                </>
              )}

              {garageUpgrades.map(item => {
                const isHovered = hoveredItem === item.id;
                const isOwned = purchased.includes(item.id);
                const hoverActiveCategoryItem = Object.values(garageUpgrades).find(u => u.id === hoveredItem);
                
                let shouldShow = false;
                let isPreview = false;

                if (isHovered) {
                    shouldShow = true;
                    if (!isOwned) isPreview = true;
                 } else if (isOwned) {
                    const equippableGarageCategories = ['g_tools', 'g_jack', 'g_walls'];
                    if (equippableGarageCategories.includes(item.category)) {
                        if (equipped[item.category] === item.id) {
                            shouldShow = true;
                        } else {
                            shouldShow = false;
                        }
                    } else if (hoverActiveCategoryItem && hoverActiveCategoryItem.category === item.category) {
                        shouldShow = false;
                    } else {
                        shouldShow = true;
                    }
                }

                if (shouldShow) {
                   if (item.id === 'g-clean') return null; 
                   const fileName = item.id.replace('g-', '');
                   const filterStyle = isPreview ? 'drop-shadow(0 0 15px rgba(255,255,255,0.7)) brightness(1.1)' : 'none';
                   return <img key={item.id} src={`/talli/${fileName}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, pointerEvents: 'none', filter: filterStyle, transition: 'all 0.2s' }} />;
                }
                return null;
              })}

              {isTutorialActive ? (
                  <img src="/tutorial-van.png" alt="Auto Peitetty" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 3, padding: '2rem', pointerEvents: 'none' }} />
              ) : (
                  <img src="/carparts/van1-base.png" alt="Auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 3, padding: '2rem', pointerEvents: 'none' }} />
              )}
              
              {!isTutorialActive && [...carUpgrades]
                .sort((a, b) => {
                  const order = { body: 1, wheel: 2, bumper: 3, extra: 4 };
                  return (order[a.category] || 99) - (order[b.category] || 99);
                })
                .map(item => {
                  const isHovered = hoveredItem === item.id;
                  const isOwned = purchased.includes(item.id);
                  const slot = item.category === 'extra' ? item.id : item.category;
                  const isEquipped = equipped[slot] === item.id || (!equipped[slot] && item.isDefault);
                  const hoverActiveCategoryItem = Object.values(carUpgrades).find(u => u.id === hoveredItem);
                  
                  let shouldShow = false;
                  let isPreview = false;

                  if (isHovered) {
                      shouldShow = true;
                      if (!isOwned || !isEquipped) isPreview = true;
                  } else if (isEquipped) {
                      if (hoverSlot && hoverSlot === slot) {
                          shouldShow = false;
                      } else {
                          shouldShow = true;
                      }
                  }

                  if (shouldShow) {
                     const order = { body: 1, wheel: 2, bumper: 3, extra: 4 };
                     const filterStyle = isPreview ? 'drop-shadow(0 0 15px rgba(255,255,255,0.7)) brightness(1.1)' : 'none';
                     return <img key={item.id} src={`/carparts/${item.id}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 3 + (order[item.category] || 1), padding: '2rem', pointerEvents: 'none', filter: filterStyle, transition: 'all 0.2s' }} />;
                  }
                  return null;
                })}

              {isGlobalPreview && (
                <div className="animate-pulse" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(16, 185, 129, 0.95)', color: 'white', padding: '0.6rem 1.4rem', borderRadius: '16px', fontWeight: 'bold', letterSpacing: '2px', zIndex: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
                   ESIKATSELU
                </div>
              )}

              {hoveredObj && hoveredObj.buff && (
                <div className="animate-fade-in" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(255, 255, 255, 0.95)', padding: '1.2rem', borderRadius: '16px', borderLeft: `6px solid ${hoveredObj.color || '#22c55e'}`, color: 'var(--text-main)', zIndex: 20, boxShadow: '0 15px 30px rgba(0,0,0,0.4)', maxWidth: '350px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: hoveredObj.color || '#22c55e', border: '1px solid rgba(0,0,0,0.2)', boxShadow: `0 0 8px ${hoveredObj.color || '#22c55e'}, inset 0 2px 4px rgba(255,255,255,0.8)` }} />
                      <span style={{ fontWeight: '900', fontSize: '1.1rem', color: hoveredObj.color || '#166534', textTransform: 'uppercase', letterSpacing: '0.5px', textShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>{hoveredObj.buff.title}</span>
                   </div>
                   <div style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#334155', fontWeight: '500' }}>
                      {hoveredObj.buff.desc}
                   </div>
                </div>
              )}

           </div>
        </div>

      </div>
    </div>

    {saveError && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.3s ease-out' }}>
             <div className="modal-content" style={{ background: 'linear-gradient(145deg, #7f1d1d 0%, #450a0a 100%)', padding: '3rem', borderRadius: '24px', maxWidth: '500px', width: '90%', border: '2px solid #ef4444', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', color: 'white', position: 'relative', textAlign: 'center' }}>
                 <div style={{ background: 'rgba(239,68,68,0.2)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', border: '2px solid #ef4444' }}>
                     <X size={48} color="#ef4444" />
                 </div>
                 <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fca5a5' }}>Voi rähmä!</h2>
                 <p style={{ fontSize: '1.2rem', color: '#fecaca', marginBottom: '1rem', lineHeight: '1.6' }}>Yhteys rekisterikeskukseen katkesi. Tarkista nettiyhteytesi ja yritä myöhemmin uudelleen.</p>
                 <div style={{ background: '#7f1d1d', color: '#fca5a5', padding: '1rem', borderRadius: '8px', fontSize: '1rem', marginBottom: '2rem', fontFamily: 'monospace' }}>
                     Virhekoodi: {saveError}
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                     <button 
                        onClick={() => setSaveError(null)}
                        style={{ padding: '0.8rem 2rem', fontSize: '1.2rem', borderRadius: '12px', background: 'transparent', color: '#fca5a5', fontWeight: 'bold', border: '2px solid #ef4444', cursor: 'pointer' }}>
                        Palaa peliin
                     </button>
                 </div>
             </div>
        </div>
    )}

    {showMeterTutorial && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.3s ease-out' }}>
            <div className="modal-content" style={{ background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)', padding: '3rem', borderRadius: '24px', maxWidth: '650px', width: '90%', border: '2px solid #38bdf8', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <button onClick={() => setShowMeterTutorial(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.5rem' }}>
                    <X size={28} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: '#38bdf8', padding: '1rem', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}>
                        <Zap size={36} color="white" />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'white', letterSpacing: '1px' }}>Erikoiskyvyt avattu!</h2>
                </div>
                
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Olet juuri hankkinut ensimmäisen varusteesi, joka antaa sinulle <strong>karttakohtaisia apuja!</strong> Näet ne kysymysruutujen kulmassa pelatessasi.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #ef4444', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <ShieldCheck size={28} color="#ef4444" />
                        <div>
                            <strong style={{ color: '#ef4444', display: 'block', marginBottom: '0.2rem' }}>YRITÄ UUDELLEEN (Puskurit)</strong>
                            Saat uuden yrityksen väärin menneeseen kysymykseen ilmaiseksi.
                        </div>
                    </div>
                    <div style={{ background: 'rgba(234, 179, 8, 0.2)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #eab308', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Disc size={28} color="#eab308" />
                        <div>
                            <strong style={{ color: '#eab308', display: 'block', marginBottom: '0.2rem' }}>POISTO (Renkaat)</strong>
                            Voit käyttää monivalinnoissa poistamaan 1-2 täysin väärää vaihtoehtoa.
                        </div>
                    </div>
                    <div style={{ background: 'rgba(34, 197, 94, 0.2)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #22c55e', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Wrench size={28} color="#22c55e" />
                        <div>
                            <strong style={{ color: '#22c55e', display: 'block', marginBottom: '0.2rem' }}>VAIHTO (Työkalut)</strong>
                            Antaa luvan vaihtaa kysymyksen täysin uuteen rangaistuksetta!
                        </div>
                    </div>
                </div>

                <p style={{ color: '#94a3b8', fontStyle: 'italic', marginBottom: '2rem' }}>
                    Vinkki: Omat apusi ovat ns. karttakohtainen potti (esim. 5kpl Digiturva-kartalla). Voit vapaasti käyttää ne kaikki yhdessä visassa, tai säästellä niitä kartan vaikeimpiin vaiheisiin!
                </p>

                <button 
                    onClick={() => setShowMeterTutorial(false)}
                    className="btn-primary"
                    style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', borderRadius: '12px', background: '#38bdf8', color: 'white', fontWeight: 'bold' }}>
                    Selvä homma!
                </button>
            </div>
        </div>
    )}

    </>
  );
}
