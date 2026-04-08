import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, PaintBucket, ShieldCheck, Radio, Sparkles, Wrench, Grid, Disc, Aperture, ChevronDown, Layers } from 'lucide-react';
import { store } from '../services/store';

export default function Garage() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState(0);
  const [purchased, setPurchased] = useState([]);
  const [equipped, setEquipped] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const tutorialSkipped = store.getTutorialSkipped();
  const [isTutorialActive, setIsTutorialActive] = useState(!store.getTutorialCompleted() && !tutorialSkipped);
  const [showGreenPulse, setShowGreenPulse] = useState(false);
  const [flashScreen, setFlashScreen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(isTutorialActive ? 'g_clean' : 'body'); // Default open: Body (or g_clean in tutorial)

  useEffect(() => {
    const fetchData = async () => {
      setSparks(await store.getSparks());
      setPurchased(await store.getPurchasedItems());
      setEquipped(await store.getEquippedItems());
    };
    fetchData();
    
    // Polling to keep sparks and inventory updated if playing co-op
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const carUpgrades = [
    // MAALIPINNAT
    { id: 'van-body01', category: 'body', categoryName: 'Maalipinnat', name: 'Sininen Salama', desc: 'Kotimainen ja luotettava perusväri.', price: 0, isDefault: true, icon: <PaintBucket size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-body02', category: 'body', categoryName: 'Maalipinnat', name: 'Punainen Liekki', desc: 'Räiskyvän punainen pinta.', price: 1000, icon: <PaintBucket size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'van-body03', category: 'body', categoryName: 'Maalipinnat', name: 'Lumivalko', desc: 'Puhdas ja tyylikkään vaalea.', price: 1000, icon: <PaintBucket size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'van-body04', category: 'body', categoryName: 'Maalipinnat', name: 'Kukkavoima', desc: 'Rauhaa, rakkautta ja tekoälyä.', price: 1200, icon: <PaintBucket size={28} />, color: '#ec4899', bg: '#fbcfe8' },
    { id: 'van-body05', category: 'body', categoryName: 'Maalipinnat', name: 'Seikkailija', desc: 'Sulaudu täydellisesti maastoon.', price: 1500, icon: <PaintBucket size={28} />, color: '#4d7c0f', bg: '#ecfccb' },
    { id: 'van-body06', category: 'body', categoryName: 'Maalipinnat', name: 'VIP-Kyyti', desc: 'Hopean ja kullan ylellinen liitto.', price: 2000, icon: <PaintBucket size={28} />, color: '#d97706', bg: '#fef3c7' },
    { id: 'van-body07', category: 'body', categoryName: 'Maalipinnat', name: 'Varikkomestari', desc: 'Vauhdikas tuki kisaradoille.', price: 1400, icon: <PaintBucket size={28} />, color: '#dc2626', bg: '#fee2e2' },
    { id: 'van-body08', category: 'body', categoryName: 'Maalipinnat', name: 'Neon-Unelma', desc: 'Kasarin kyberyötä huokuva retro.', price: 2500, icon: <PaintBucket size={28} />, color: '#c026d3', bg: '#fae8ff' },
    { id: 'van-body09', category: 'body', categoryName: 'Maalipinnat', name: 'Sateenkaari', desc: 'Väriä ja iloa teille.', price: 1800, icon: <PaintBucket size={28} />, color: '#fbbf24', bg: '#fef3c7' },
    { id: 'van-body10', category: 'body', categoryName: 'Maalipinnat', name: 'Kukkaniitty', desc: 'Tyylitelty ja kaunis kuosi.', price: 2200, icon: <PaintBucket size={28} />, color: '#f472b6', bg: '#fce7f3' },
    { id: 'van-body11', category: 'body', categoryName: 'Maalipinnat', name: 'Yön Ritari', desc: 'Tumma ja puhuva mattamusta.', price: 1000, icon: <PaintBucket size={28} />, color: '#1e293b', bg: '#f1f5f9' },
    { id: 'van-body12', category: 'body', categoryName: 'Maalipinnat', name: 'AI Team', desc: 'Rakastan sitä, kun promptit loksahtelevat kohdilleen.', price: 3000, icon: <PaintBucket size={28} />, color: '#ef4444', bg: '#1e293b' },
    
    // PUSKURIT
    { id: 'van-bumper01', category: 'bumper', categoryName: 'Puskurit', name: 'Peruspuskuri', desc: 'Luotettava perussuoja.', price: 400, icon: <ShieldCheck size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'van-bumper02', category: 'bumper', categoryName: 'Puskurit', name: 'Kromipuskuri', desc: 'Kiiltävää näyttävyyttä.', price: 600, icon: <ShieldCheck size={28} />, color: '#94a3b8', bg: '#f8fafc' },
    { id: 'van-bumper03', category: 'bumper', categoryName: 'Puskurit', name: 'Urheilupuskuri', desc: 'Aerodynaaminen muotoilu.', price: 800, icon: <ShieldCheck size={28} />, color: '#475569', bg: '#e2e8f0' },
    { id: 'van-bumper04', category: 'bumper', categoryName: 'Puskurit', name: 'Maastopuskuri', desc: 'Kestää kovempaakin menoa.', price: 900, icon: <ShieldCheck size={28} />, color: '#1e293b', bg: '#cbd5e1' },
    { id: 'van-bumper05', category: 'bumper', categoryName: 'Puskurit', name: 'Erikoispuskuri', desc: 'Huipputason designia.', price: 1200, icon: <ShieldCheck size={28} />, color: '#0f172a', bg: '#94a3b8' },

    // VANTEET
    { id: 'van-wheel01', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Peltivanteet', desc: 'Klassinen ja kestävä valinta.', price: 400, icon: <Disc size={28} />, color: '#4b5563', bg: '#f3f4f6' },
    { id: 'van-wheel02', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Alumiinivanteet', desc: 'Kevyet ja tyylikkäät.', price: 1200, icon: <Aperture size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-wheel03', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Erikoisvanteet', desc: 'Kun vain paras kelpaa.', price: 1800, icon: <Sparkles size={28} />, color: '#8b5cf6', bg: '#ede9fe' },
    { id: 'van-wheel04', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Luotettavat peltivanteet', desc: 'Jykevät renkaat järeään käyttöön.', price: 800, icon: <Disc size={28} />, color: '#64748b', bg: '#f1f5f9' },

    // EXTRA
    { id: 'van-extra01', category: 'extra', categoryName: 'Erityisosat', name: 'Turbo-Ahdin', desc: 'Lisää tehoa konepellille!', price: 2000, icon: <Zap size={28} />, color: '#f59e0b', bg: '#fef3c7' },
    { id: 'van-extra02', category: 'extra', categoryName: 'Erityisosat', name: 'Työkalusarja vaativiin oloihin', desc: 'Valmiina kaikkiin remontteihin tien päällä.', price: 1000, icon: <Wrench size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'van-extra03', category: 'extra', categoryName: 'Erityisosat', name: 'Taakkateline ja lisävalot', desc: 'Taakkateline ja lisävalot katolle.', price: 1500, icon: <Sparkles size={28} />, color: '#6366f1', bg: '#e0e7ff' },
    { id: 'van-extra04', category: 'extra', categoryName: 'Erityisosat', name: 'Vinssi', desc: 'Vinssi, jolla kapuaa korkeimmallekin vuorelle.', price: 2200, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'van-extra05', category: 'extra', categoryName: 'Erityisosat', name: 'Sivuikkuna takatilaan', desc: 'Lisää valoa ja tilan tunnetta.', price: 1200, icon: <Grid size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-extra06', category: 'extra', categoryName: 'Erityisosat', name: 'Snorkkeli', desc: 'Vedenaalaisiin seikkailuihin.', price: 2500, icon: <Map size={28} />, color: '#0ea5e9', bg: '#e0f2fe' },
    { id: 'van-extra07', category: 'extra', categoryName: 'Erityisosat', name: 'Erämaa-antenni', desc: 'Jotta poppi pauhaa erämaassakin.', price: 800, icon: <Radio size={28} />, color: '#8b5cf6', bg: '#ede9fe' }
  ];

  const garageUpgrades = [
    { id: 'g-clean', category: 'g_clean', categoryName: 'Siisteys', name: 'Siivous', desc: 'Raivaa seittien ja lian pahin kerros.', price: 200, icon: <Sparkles size={28} />, color: '#a855f7', bg: '#f3e8ff' },
    
    { id: 'g-floor-base', category: 'g_floor', categoryName: 'Lattia', name: 'Öljytahrojen poisto', desc: 'Siivoaa öljyläikät.', price: 400, icon: <Grid size={28} />, color: '#6366f1', bg: '#e0e7ff' },
    { id: 'g-floor2', category: 'g_floor', categoryName: 'Lattia', name: 'Säröjen korjaus', desc: 'Korjaa lattian säröt.', price: 800, icon: <Grid size={28} />, color: '#4f46e5', bg: '#e0e7ff' },
    { id: 'g-floor3', category: 'g_floor', categoryName: 'Lattia', name: 'Betonilattia', desc: 'Uusi kestävä betonivalu.', price: 1500, icon: <Grid size={28} />, color: '#3730a3', bg: '#e0e7ff' },
    
    { id: 'g-walls-base', category: 'g_walls', categoryName: 'Seinät', name: 'Seinien pesu', desc: 'Pesee lian seiniltä.', price: 500, icon: <Layers size={28} />, color: '#ec4899', bg: '#fbcfe8' },
    { id: 'g-walls2', category: 'g_walls', categoryName: 'Seinät', name: 'Syväpuhdistus', desc: 'Korjaa ja syväpuhdistaa seinät.', price: 1200, icon: <Layers size={28} />, color: '#db2777', bg: '#fbcfe8' },
    { id: 'g-walls3', category: 'g_walls', categoryName: 'Seinät', name: 'Nykyaikainen talli', desc: 'Luotettava ja puhdas moderni tyyli.', price: 2000, icon: <Layers size={28} />, color: '#9d174d', bg: '#fbcfe8' },
    { id: 'g-walls4', category: 'g_walls', categoryName: 'Seinät', name: 'Futuristinen halli', desc: 'Korkean teknologian ja lasin liitto.', price: 5000, icon: <Sparkles size={28} />, color: '#831843', bg: '#fbcfe8' },
    
    // TYÖKALUSARJAT (Mutually Exclusive)
    { id: 'g-walltools1', category: 'g_tools', categoryName: 'Työkalut', name: 'Työkalusarja', desc: 'Perustyökalut hienosti esille.', price: 600, icon: <Wrench size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'g-walltools2', category: 'g_tools', categoryName: 'Työkalut', name: 'Parannetut työkalut', desc: 'Kattavampi setti harrastajalle.', price: 1200, icon: <Wrench size={28} />, color: '#ca8a04', bg: '#fef08a' },
    { id: 'g-walltools3', category: 'g_tools', categoryName: 'Työkalut', name: 'Huipputyökalut', desc: 'Kaikki mitä ammattilainen tarvitsee.', price: 2500, icon: <Sparkles size={28} />, color: '#a16207', bg: '#fef08a' },
    { id: 'g-walltools4', category: 'g_tools', categoryName: 'Työkalut', name: 'Tulevaisuuden työkalut', desc: 'Tulevaisuuden tekijöille.', price: 3000, icon: <Zap size={28} />, color: '#854d0e', bg: '#fef08a' },

    // TUNKIT (Mutually Exclusive)
    { id: 'g-jack1', category: 'g_jack', categoryName: 'Tunkit', name: 'Perustunkki', desc: 'Nostaa auton turvallisesti.', price: 500, icon: <Disc size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'g-jack2', category: 'g_jack', categoryName: 'Tunkit', name: 'Laatutunkki', desc: 'Nopea ja vahva hallitunkki.', price: 1000, icon: <Disc size={28} />, color: '#475569', bg: '#f1f5f9' }
  ];



  const setCategory = (cat) => {
    if (isTutorialActive && cat !== 'g_clean') return;
    setActiveCategory(cat);
  };

  const renderUpgradeItem = (item) => {
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
    }

    let btnText = item.price === 0 && !isOwned ? 'OTA KÄYTTÖÖN' : `OSTA ⚡ ${item.price}`;
    let btnBg = (sparks >= item.price || item.isDefault) ? '#fef3c7' : '#e2e8f0'; // Toned down amber for buy
    let btnColor = (sparks >= item.price || item.isDefault) ? '#d97706' : 'var(--text-muted)';
    const canBuy = sparks >= item.price && !isOwned && !item.isDefault && meetsPrereq;
    let btnShadow = canBuy ? '0 4px 6px rgba(0,0,0,0.1)' : 'none';
    let cursor = (canBuy || (item.isDefault && !isEquipped)) ? 'pointer' : 'not-allowed';

    if (!meetsPrereq && !isOwned) {
       btnText = prereqText;
       btnBg = '#f1f5f9';
       btnColor = '#94a3b8';
       cursor = 'not-allowed';
    } else if (isEquipped && item.category === 'extra') {
       btnText = 'POISTA';
       btnBg = '#64748b'; // Neutral gray instead of red
       btnColor = 'white';
       cursor = 'pointer';
    } else if (isEquipped) {
       btnText = 'ASENNETTU';
       btnBg = '#10b981'; // Green
       btnColor = 'white';
       cursor = 'default';
    } else if (isOwned && (isCarItem || isEquippableGarage)) {
       btnText = 'ASENNA';
       btnBg = '#3b82f6'; // Blue
       btnColor = 'white';
       cursor = 'pointer';
    }

    return (
      <div key={item.id} className="carousel-item glass-panel" 
           style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '0.8rem', transition: 'all 0.2s', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)', justifyContent: 'space-between', flex: '0 0 auto' }} 
           onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = item.color; setHoveredItem(item.id); }} 
           onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; setHoveredItem(null); }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', flexGrow: 1 }}>
          <div style={{ background: item.bg, padding: '0.6rem', borderRadius: '12px', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {React.cloneElement(item.icon, { size: 20 })}
          </div>
          <div style={{ fontFamily: 'var(--font-main)' }}>
            <h3 style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-display)', color: 'var(--text-main)', lineHeight: '1.2' }}>{item.name}</h3>
            <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.desc}</p>
          </div>
        </div>
        <button 
          className="btn-primary" 
          style={{ 
            padding: '0.3rem', fontSize: '0.75rem', width: '100%',
            background: btnBg, color: btnColor, boxShadow: btnShadow, cursor
          }}
          onClick={async (e) => {
            e.stopPropagation();
            if (canBuy) {
              const success = await store.purchaseItem(item.id, item.price, (isCarItem || isEquippableGarage) ? slot : null);
              if (success) {
                setSparks(await store.getSparks());
                setPurchased(await store.getPurchasedItems());
                setEquipped(await store.getEquippedItems());
                if (item.id === 'g-clean' && isTutorialActive) {
                    store.completeTutorial();
                    setIsTutorialActive(false);
                    setActiveCategory('body'); // Auto-switch to car body painting!
                    setFlashScreen(true);
                    setTimeout(() => {
                        setShowGreenPulse(true);
                    }, 1500);
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
    );
  };

  // Group items by category for rendering
  const categorisedCar = carUpgrades.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { name: item.categoryName, items: [] };
    }
    acc[item.category].items.push(item);
    return acc;
  }, {});

  const categorisedGarage = garageUpgrades.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { name: item.categoryName, items: [] };
    }
    acc[item.category].items.push(item);
    return acc;
  }, {});

  const hoveredObj = hoveredItem ? [...carUpgrades, ...garageUpgrades].find(i => i.id === hoveredItem) : null;
  const hoverSlot = hoveredObj ? (hoveredObj.category === 'extra' ? hoveredObj.id : hoveredObj.category) : null;
  const isGlobalPreview = hoveredObj && equipped[hoverSlot] !== hoveredObj.id;

  return (
    <div className="animate-fade-in" style={{ padding: '1rem 2rem', maxWidth: '1800px', margin: '0 auto', width: '100%' }}>
      <style>{`
        .garage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (min-width: 1100px) {
          .garage-grid {
            grid-template-columns: minmax(200px, 1.5fr) 7fr minmax(250px, 2fr);
          }
        }
        @media (max-width: 1099px) {
          .garage-left { order: 2; }
          .garage-center { order: 1; }
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
        .category-content {
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .item-carousel {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 1rem;
          padding: 1rem 0.5rem;
          margin: 1rem auto 0 auto;
          width: 100%;
          max-width: 1000px;
          min-height: 150px;
          scrollbar-width: thin;
          scrollbar-color: var(--primary-color) rgba(0,0,0,0.1);
          align-items: stretch;
        }
        .item-carousel::-webkit-scrollbar {
          height: 8px;
        }
        .item-carousel::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        .item-carousel::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 4px;
        }
        .carousel-item {
          width: 250px;
          min-width: 250px;
          flex-shrink: 0;
        }
        @keyframes flashBang {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .flash-bang {
          animation: flashBang 2s ease-out forwards;
        }
      `}</style>

      {flashScreen && (
         <div className="flash-bang" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', zIndex: 9999, pointerEvents: 'none' }}></div>
      )}
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '3rem' }}>Autotalli</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-main)' }}>Käytä kipinöitä tekoälypakusi tuunaukseen!</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#d97706', background: '#fef3c7', border: '2px solid #fde68a', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-main)' }}>
            <Zap size={24} fill="#d97706" /> {sparks} Kipinää
          </div>
          <button 
             className={`btn-secondary ${showGreenPulse ? 'animate-pulse' : (!isTutorialActive && sparks === 0 ? 'animate-pulse' : '')}`} 
             onClick={() => navigate('/roadmap')}
             disabled={isTutorialActive}
             style={{ 
                 opacity: isTutorialActive ? 0.3 : 1, 
                 cursor: isTutorialActive ? 'not-allowed' : 'pointer',
                 background: showGreenPulse ? '#10b981' : '',
                 color: showGreenPulse ? 'white' : '#64748b',
                 borderColor: showGreenPulse ? '#10b981' : ''
             }}
          >
            <Map size={20} /> Tiekartta
          </button>
        </div>
      </div>

      <div className="garage-grid">
        
        {/* LEFT COLUMN: Garage Items (Collapsible) */}
        <div className="garage-left">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tallin varusteet</h3>
          
          {Object.entries(categorisedGarage).map(([catId, category]) => {
            const isLocked = isTutorialActive && catId !== 'g_clean';
            return (
            <div key={catId} style={{ marginBottom: '0.5rem' }}>
              <div 
                className="category-header" 
                onClick={() => setCategory(catId)}
                style={{ 
                  borderColor: activeCategory === catId ? 'var(--primary-color)' : 'rgba(0,0,0,0.05)',
                  background: activeCategory === catId ? '#f5f3ff' : 'rgba(255,255,255,0.7)',
                  pointerEvents: isLocked ? 'none' : 'auto',
                  opacity: isLocked ? 0.4 : 1,
                  filter: isLocked ? 'grayscale(100%)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                   {catId === 'g_clean' && <Sparkles size={18} color="#a855f7" />}
                   {catId === 'g_floor' && <Grid size={18} color="#6366f1" />}
                   {catId === 'g_walls' && <Layers size={18} color="#ec4899" />}
                   {catId === 'g_tools' && <Wrench size={18} color="#eab308" />}
                   {catId === 'g_jack' && <Disc size={18} color="#64748b" />}
                   <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{category.name}</span>
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* CENTER COLUMN: Visual Preview */}
        <div className="garage-center">
          <div style={{ 
            position: 'relative', 
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            aspectRatio: '16/9', 
            maxHeight: '50vh',
            minHeight: '300px',
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '4px solid rgba(0, 114, 198, 0.4)',
            transition: 'box-shadow 0.3s ease',
            boxShadow: isGlobalPreview 
              ? '0 0 0 6px rgba(16, 185, 129, 0.9), inset 0 0 50px rgba(0,0,0,0.5), 0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
              : 'inset 0 0 50px rgba(0,0,0,0.5), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            background: 'radial-gradient(circle at center, #334155 0%, #0f172a 100%)' // Dark "garage" theme
          }}>
              {isTutorialActive && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '3px solid #f59e0b', color: 'var(--text-main)', fontSize: '0.9rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                   <b>Löysit hylätyn autotallin ja laatikollisen kipinöitä! ✨</b><br/>
                   Hämähäkinseittien takia emme pääse kunnolla töihin. Osta sivupaneelista "Siivous" nähdäksesi mitä kaikkea pölyn alta paljastuu...
                </div>
              )}
              
              {showGreenPulse && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '3px solid #10b981', color: 'var(--text-main)', fontSize: '0.9rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                   <b>Huippua! Auto on paljastettu. 🚐</b><br/>
                   Kipinät loppuivat kesken. Tienaa varallisuutta viemällä paku testeihin klikkaamalla vihreää "Tiekartta" -painiketta!
                </div>
              )}

              {isTutorialActive ? (
                <img src="/tutorial1.png" alt="Likainen Autotalli tutoriaali" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0, pointerEvents: 'none' }} />
              ) : (
                <img src="/talli/autotalli-base.png" alt="Autotallin tausta" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 0, pointerEvents: 'none' }} />
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
                      // Only show if equipped
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
                 if (item.id === 'g-clean') {
                    return null; // Siivous-tutoriaalivaiheen "tavara" ei piirrä uutta render-tasoa, sillä taustakuva vaihtuu automaattisesti!
                 }
                 const fileName = item.id.replace('g-', '');
                 const filterStyle = isPreview ? 'drop-shadow(0 0 15px rgba(255,255,255,0.7)) brightness(1.1)' : 'none';
                 return <img key={item.id} src={`/talli/${fileName}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, pointerEvents: 'none', filter: filterStyle, transition: 'all 0.2s' }} />;
              }
              return null;
            })}

            {isTutorialActive ? (
                <img src="/tutorial-van.png" alt="Auto Peitetty" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, padding: '2rem', pointerEvents: 'none' }} />
            ) : (
                <img src="/carparts/van1-base.png" alt="Auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, padding: '2rem', pointerEvents: 'none' }} />
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
                   return <img key={item.id} src={`/carparts/${item.id}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 + (order[item.category] || 1), padding: '2rem', pointerEvents: 'none', filter: filterStyle, transition: 'all 0.2s' }} />;
                }
                return null;
              })}

            {isGlobalPreview && (
              <div className="animate-pulse" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(16, 185, 129, 0.9)', color: 'white', padding: '0.4rem 1rem', borderRadius: '12px', fontWeight: 'bold', letterSpacing: '2px', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                 ESIKATSELU
              </div>
            )}

           </div>

           {/* Carousel Below the Image */}
           <div className="item-carousel animate-fade-in">
             {activeCategory && categorisedGarage[activeCategory]?.items.map(item => renderUpgradeItem(item))}
             {activeCategory && categorisedCar[activeCategory]?.items.map(item => renderUpgradeItem(item))}
           </div>
        </div>

        {/* RIGHT COLUMN: Car Upgrades (Collapsible) */}
        <div className="garage-right">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Auton osat</h3>
          
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
                  filter: isLocked ? 'grayscale(100%)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                   {catId === 'body' && <PaintBucket size={18} />}
                   {catId === 'bumper' && <ShieldCheck size={18} />}
                   {catId === 'wheel' && <Aperture size={18} />}
                   {catId === 'extra' && <Zap size={18} />}
                   <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{category.name}</span>
                </div>
              </div>
            </div>
          )})}
        </div>

      </div>
    </div>
  );
}
