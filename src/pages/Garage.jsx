import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, PaintBucket, ShieldCheck, Radio, Sparkles, Wrench, Grid, Disc, Aperture, ChevronDown, Layers, ChevronLeft, X } from 'lucide-react';
import { store } from '../services/store';

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

  const [activeCategory, setActiveCategory] = useState(isTutorialActive ? 'g_floor' : 'body');

  useEffect(() => {
    const fetchData = async () => {
      setSparks(await store.getSparks());
      setPurchased(await store.getPurchasedItems());
      setEquipped(await store.getEquippedItems());
      setCompletedLessons(store.getCompletions());
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
    
    // PUSKURIT
    { id: 'van-bumper01', category: 'bumper', categoryName: 'Puskurit', name: 'Peruspuskuri', desc: 'Luotettava ja vähäeleinen perussuoja kaduille.', price: 0, isDefault: true, icon: <ShieldCheck size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'van-bumper02', category: 'bumper', categoryName: 'Puskurit', name: 'Kromipuskuri', desc: 'Kiiltävää näyttävyyttä ja tyylikästä retrohenkeä.', price: 800, icon: <ShieldCheck size={28} />, color: '#94a3b8', bg: '#f8fafc' },
    { id: 'van-bumper03', category: 'bumper', categoryName: 'Puskurit', name: 'Kultapuskuri', desc: 'Katujen todellisille mestareille. Bling bling!', price: 2500, icon: <ShieldCheck size={28} />, color: '#d97706', bg: '#fef3c7' },
    { id: 'van-bumper04', category: 'bumper', categoryName: 'Puskurit', name: 'Mattamusta', desc: 'Tyylikäs, erittäin hillitty ja moderni tumma suoja.', price: 1200, icon: <ShieldCheck size={28} />, color: '#1e293b', bg: '#e2e8f0' },
    { id: 'van-bumper05', category: 'bumper', categoryName: 'Puskurit', name: 'Rustiikkinen puskuri', desc: 'Rouheaa asennetta huokuva, ajan patinoima teräs.', price: 600, icon: <ShieldCheck size={28} />, color: '#9a3412', bg: '#ffedd5' },
    { id: 'van-bumper06', category: 'bumper', categoryName: 'Puskurit', name: 'Pronssipuskuri', desc: 'Hillityn arvokas, lämpimän hohtava pronssisuoja.', price: 1800, icon: <ShieldCheck size={28} />, color: '#b45309', bg: '#fef08a' },

    // VANTEET
    { id: 'van-wheel01', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Peltivanteet', desc: 'Klassinen ja kestävä valinta.', price: 0, isDefault: true, icon: <Disc size={28} />, color: '#4b5563', bg: '#f3f4f6' },
    { id: 'van-wheel02', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Alumiinivanteet', desc: 'Kevyet ja tyylikkäät.', price: 1200, icon: <Aperture size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-wheel03', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Erikoisvanteet', desc: 'Kun vain paras kelpaa.', price: 1800, icon: <Sparkles size={28} />, color: '#8b5cf6', bg: '#ede9fe' },
    { id: 'van-wheel04', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Maastorenkaat', desc: 'Jykevät renkaat järeään käyttöön.', price: 800, icon: <Disc size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'van-wheel05', category: 'wheel', categoryName: 'Renkaat ja vanteet', name: 'Talvirenkaat', desc: 'Pitoa liukkaille.', price: 2500, icon: <Disc size={28} />, color: '#0ea5e9', bg: '#e0f2fe', buff: { title: 'Kartta-apu: Reilu Peli', desc: 'Antaa yhden väärän vastauksen pelastuksen tai vihjeen lumisen haasteen kysymyksissä.' } },

    // EXTRA
    { id: 'van-extra01', category: 'extra', categoryName: 'Erityisosat', name: 'Turbo-ahdin', desc: 'Lisää tehoa konepellille!', price: 2000, icon: <Zap size={28} />, color: '#f59e0b', bg: '#fef3c7' },
    { id: 'van-extra02', category: 'extra', categoryName: 'Erityisosat', name: 'Työkalusarja vaativiin oloihin', desc: 'Valmiina kaikkiin remontteihin tien päällä.', price: 1000, icon: <Wrench size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'van-extra03', category: 'extra', categoryName: 'Erityisosat', name: 'Taakkateline ja lisävalot', desc: 'Taakkateline ja lisävalot katolle.', price: 1500, icon: <Sparkles size={28} />, color: '#6366f1', bg: '#e0e7ff' },
    { id: 'van-extra04', category: 'extra', categoryName: 'Erityisosat', name: 'Vinssi', desc: 'Vinssi, jolla kapuaa korkeimmallekin vuorelle.', price: 2200, icon: <ShieldCheck size={28} />, color: '#ef4444', bg: '#fee2e2', buff: { title: 'Apulaite: Aivoterveys', desc: 'Vuoristokartalla asennettuna AIvan auttaa yhden askeleen verran jokaisessa kysymyksessä!' } },
    { id: 'van-extra05', category: 'extra', categoryName: 'Erityisosat', name: 'Sivuikkuna takatilaan', desc: 'Lisää valoa ja tilan tunnetta.', price: 1200, icon: <Grid size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-extra06', category: 'extra', categoryName: 'Erityisosat', name: 'Snorkkeli', desc: 'Vedenaalaisiin seikkailuihin.', price: 2500, icon: <Map size={28} />, color: '#0ea5e9', bg: '#e0f2fe', buff: { title: 'Apulaite: Digiturva', desc: 'Vedenalaisessa kartassa AIvan sulkee yhden väärän vaihtoehdon tai antaa toisen mahdollisuuden.' } },
    { id: 'van-extra07', category: 'extra', categoryName: 'Erityisosat', name: 'Erämaa-antenni', desc: 'Jotta poppi pauhaa erämaassakin.', price: 800, icon: <Radio size={28} />, color: '#8b5cf6', bg: '#ede9fe', buff: { title: 'Apulaite: Konepellin alle', desc: 'Aavikkokartalla erämaa-antenni takaa varman yhteyden tekoälyyn, joka poistaa yhden väärän vaihtoehdon!' } }
  ];

  const garageUpgrades = [
    { id: 'g-clean', category: 'g_floor', categoryName: 'Lattia', name: 'Siivous', desc: 'Raivaa seittien ja lian pahin kerros.', price: 200, icon: <Sparkles size={28} />, color: '#a855f7', bg: '#f3e8ff' },
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
               boxShadow: '0 4px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)'
           }} 
           onMouseEnter={() => { if (!isTutorialActive || item.id === 'g-clean') setHoveredItem(item.id); }}
           onMouseLeave={() => setHoveredItem(null)}>
           
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', width: '100%', flexGrow: 1, position: 'relative', padding: '0.6rem' }}>
              {item.category === 'body' ? (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0, borderRadius: '10px 10px 0 0' }}>
                    <img src={`/carparts/${item.id}.png`} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(3.5)', transformOrigin: '50% 65%', opacity: 1, filter: 'saturate(1.2)' }} alt={item.name} />
                    <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}></div>
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
                      <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: item.category === 'body' ? 'white' : '#1e293b', textAlign: 'center', lineHeight: '1.2', textShadow: item.category === 'body' ? '0 1px 3px rgba(0,0,0,0.9)' : 'none' }}>{item.name}</span>
                      {item.buff && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '1px solid #14532d', boxShadow: '0 0 6px rgba(34, 197, 94, 0.6), inset 0 2px 3px rgba(255,255,255,0.8)' }} title="Tällä esineellä on apulaiteominaisuus!" />}
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
          <button 
             className={`btn-secondary ${showGreenPulse ? 'animate-wiggle-glow' : (!isTutorialActive && sparks === 0 ? 'animate-pulse' : '')}`} 
             onClick={() => navigate('/roadmap')}
             disabled={isTutorialActive}
             style={{ 
                 opacity: isTutorialActive ? 0.3 : 1, 
                 cursor: isTutorialActive ? 'not-allowed' : 'pointer',
                 background: showGreenPulse ? '#10b981' : '',
                 color: showGreenPulse ? 'white' : '#64748b',
                 borderColor: showGreenPulse ? '#10b981' : '',
                 boxShadow: showGreenPulse ? undefined : ''
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
            border: '4px solid rgba(0, 114, 198, 0.4)',
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
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 2rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => setHideTutorialBox(true)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   Olet nyt vanhan autotallin omistaja. Romun seasta käteesi osui heti laatikollinen kipinöitä! Kuka tietää, mitä muuta tallista löytyy, kunhan tartut toimeen. Osta valikosta <b>Siivous</b> ja katso, mitä aarteita romun alta paljastuu!
                </div>
              )}
              
              {showGreenPulse && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 2rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => setShowGreenPulse(false)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   <b>Tulipa siistiä!</b> Tallista löytyi auto... Eikä mikä tahansa auto, vaan ihkaoikea <span style={{ background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI van!</span>, joka vie sinut tekoälyseikkailulle!<br/>Kipinät loppuivat, joten klikkaapa oikeasta ylänurkasta "Tiekartta" ja käy keräämässä lisää!
                </div>
              )}
              
              {completedLessons.length > 0 && !closedGarageTuition && !isTutorialActive && !tutorialSkipped && (
                <div className="animate-bounce" style={{ position: 'absolute', top: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '1.2rem 2rem', borderRadius: '16px', border: '4px solid #10b981', color: 'var(--text-main)', fontSize: '1.2rem', zIndex: 50, textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxWidth: '500px', width: '90%' }}>
                   <button onClick={() => { localStorage.setItem('aivan_garage_tuition', 'true'); setClosedGarageTuition(true); }} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
                   <b>Tervetuloa takaisin!</b><br/>
                   Voit käyttää tienaamiasi kipinöitä <span style={{ background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI vanin</span> päivityksiin tai tehdä tallistasi entistä hienomman. Valikot toimivat tosi helposti: klikkaa haluamaasi osa-aluetta vasemmalta, niin näet kaikki päivitykset heti siinä vieressä!
                   <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', background: '#3b82f6' }} onClick={() => {
                        localStorage.setItem('aivan_garage_tuition', 'true');
                        setClosedGarageTuition(true);
                   }}>Eikun hommiin!</button>
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
                <div className="animate-pulse" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(16, 185, 129, 0.95)', color: 'white', padding: '0.6rem 1.4rem', borderRadius: '16px', fontWeight: 'bold', letterSpacing: '2px', zIndex: 10, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}>
                   ESIKATSELU
                </div>
              )}

              {hoveredObj && hoveredObj.buff && (
                <div className="animate-fade-in" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(255, 255, 255, 0.95)', padding: '1.2rem', borderRadius: '16px', borderLeft: '6px solid #22c55e', color: 'var(--text-main)', zIndex: 20, boxShadow: '0 15px 30px rgba(0,0,0,0.4)', maxWidth: '350px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', border: '1px solid #14532d', boxShadow: '0 0 8px rgba(34, 197, 94, 0.8), inset 0 2px 4px rgba(255,255,255,0.8)' }} />
                      <span style={{ fontWeight: '900', fontSize: '1.1rem', color: '#166534', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{hoveredObj.buff.title}</span>
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
    </>
  );
}
