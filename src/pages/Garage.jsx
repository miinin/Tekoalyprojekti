import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, Car, Eye, Droplets, PaintBucket, Cpu, Navigation, Layers, ShieldCheck, BatteryCharging, Radio, Sparkles, Wrench, Grid, Disc, Aperture, Gamepad2, TrendingDown, ChevronDown } from 'lucide-react';
import { store } from '../services/store';

export default function Garage() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState(0);
  const [purchased, setPurchased] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState(['body']); // Default open: Body

  useEffect(() => {
    const fetchData = async () => {
      setSparks(await store.getSparks());
      setPurchased(await store.getPurchasedItems());
    };
    fetchData();
    
    // Polling to keep sparks and inventory updated if playing co-op
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  const carUpgrades = [
    // MAALIPINNAT
    { id: 'van-body01', category: 'body', categoryName: 'Maalipinnat', name: 'Sininen Salama', desc: 'Sähkönsininen erikoismaali.', price: 1000, icon: <PaintBucket size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'van-body02', category: 'body', categoryName: 'Maalipinnat', name: 'Punainen Liekki', desc: 'Räiskyvän punainen pinta.', price: 1000, icon: <PaintBucket size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'van-body03', category: 'body', categoryName: 'Maalipinnat', name: 'Vihreä Voima', desc: 'Luonnonläheinen vihreä.', price: 1000, icon: <PaintBucket size={28} />, color: '#10b981', bg: '#d1fae5' },
    { id: 'van-body04', category: 'body', categoryName: 'Maalipinnat', name: 'Kultanen Kimalle', desc: 'Ylellinen kultainen viimeistely.', price: 1200, icon: <PaintBucket size={28} />, color: '#eab308', bg: '#fef08a' },
    
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

    // EXTRA
    { id: 'van-extra01', category: 'extra', categoryName: 'Erityisosat', name: 'Turbo-Ahdin', desc: 'Lisää tehoa konepellille!', price: 2000, icon: <Zap size={28} />, color: '#f59e0b', bg: '#fef3c7' }
  ];

  const garageUpgrades = [
    { id: 'g1', name: 'Siisteys', desc: 'Lakaistu lattia, roskat pois.', price: 200, icon: <Sparkles size={28} />, color: '#a855f7', bg: '#f3e8ff' },
    { id: 'g2', name: 'Autotallin työkalut', desc: 'Perus hylsysarja ja tunkki.', price: 500, icon: <Wrench size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'g3', name: 'Työkaluseinä', desc: 'Työkalut nätisti järjestykseen.', price: 1000, icon: <Grid size={28} />, color: '#ec4899', bg: '#fbcfe8' }
  ];

  const allUpgrades = [...carUpgrades, ...garageUpgrades];

  const toggleCategory = (cat) => {
    setExpandedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const renderUpgradeItem = (item) => (
    <div key={item.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '0.8rem', transition: 'all 0.2s', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = item.color; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div style={{ background: item.bg, padding: '0.6rem', borderRadius: '12px', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {React.cloneElement(item.icon, { size: 20 })}
        </div>
        <div style={{ flexGrow: 1, fontFamily: 'var(--font-main)' }}>
          <h3 style={{ margin: 0, fontSize: '0.9rem', fontFamily: 'var(--font-display)', color: 'var(--text-main)', lineHeight: '1.2' }}>{item.name}</h3>
          <p style={{ margin: '0.1rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.desc}</p>
        </div>
      </div>
      <button 
        className="btn-primary" 
        style={{ 
          padding: '0.3rem', 
          fontSize: '0.75rem', 
          width: '100%',
          background: purchased.includes(item.id) ? '#10b981' : (sparks >= item.price ? 'var(--primary-color)' : '#e2e8f0'), 
          color: purchased.includes(item.id) || sparks >= item.price ? 'white' : 'var(--text-muted)', 
          boxShadow: sparks >= item.price && !purchased.includes(item.id) ? '0 4px 6px rgba(0,0,0,0.1)' : 'none', 
          cursor: purchased.includes(item.id) ? 'default' : (sparks >= item.price ? 'pointer' : 'not-allowed')
        }}
        onClick={async (e) => {
          e.stopPropagation();
          if (sparks >= item.price && !purchased.includes(item.id)) {
            const success = await store.purchaseItem(item.id, item.price);
            if (success) {
              setSparks(await store.getSparks());
              setPurchased(await store.getPurchasedItems());
            }
          }
        }}
      >
        {purchased.includes(item.id) ? 'ASENNETTU' : `OSTA ⚡ ${item.price}`}
      </button>
    </div>
  );

  // Group items by category for rendering
  const categorisedUpgrades = carUpgrades.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { name: item.categoryName, items: [] };
    }
    acc[item.category].items.push(item);
    return acc;
  }, {});

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
      `}</style>
      
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
          <button className="btn-secondary" onClick={() => navigate('/roadmap')}>
            <Map size={20} /> Tiekartta
          </button>
        </div>
      </div>

      <div className="garage-grid">
        
        {/* LEFT COLUMN: Garage Items */}
        <div className="garage-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.2rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tallin varusteet</h3>
          {garageUpgrades.map(item => renderUpgradeItem(item))}
        </div>

        {/* CENTER COLUMN: Visual Preview */}
        <div className="garage-center">
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio: '16/10', 
            minHeight: '350px',
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '4px solid rgba(0, 114, 198, 0.4)',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            background: 'radial-gradient(circle at center, #334155 0%, #0f172a 100%)' // Dark "garage" theme
          }}>
            <img src="/autotalli1-base.png" alt="Autotallin tausta" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, pointerEvents: 'none' }} />

            {garageUpgrades.map(item => {
              if (purchased.includes(item.id)) {
                 return <img key={item.id} src={`/layer-${item.id}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, padding: '2rem', pointerEvents: 'none' }} />;
              }
              return null;
            })}

            <img src="/carparts/van1-base.png" alt="Auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, padding: '2rem', pointerEvents: 'none' }} />
            
            {[...carUpgrades]
              .sort((a, b) => {
                const order = { body: 1, wheel: 2, bumper: 3, extra: 4 };
                return (order[a.category] || 99) - (order[b.category] || 99);
              })
              .map(item => {
                if (purchased.includes(item.id)) {
                   return <img key={item.id} src={`/carparts/${item.id}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 3, padding: '2rem', pointerEvents: 'none' }} />;
                }
                return null;
              })
            }

            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 10, display: 'flex', gap: '1rem' }}>
              <span style={{ background: 'rgba(255,255,255,0.9)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--primary-hover)', fontWeight: 'bold', fontFamily: 'var(--font-main)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                Taso 1
              </span>
              <span style={{ background: 'rgba(255,255,255,0.9)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: '#db2777', fontWeight: 'bold', fontFamily: 'var(--font-main)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                Eduks-Spesialisti
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Car Upgrades (Collapsible) */}
        <div className="garage-right">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Auton osat</h3>
          
          {Object.entries(categorisedUpgrades).map(([catId, category]) => (
            <div key={catId} style={{ marginBottom: '0.5rem' }}>
              <div 
                className="category-header" 
                onClick={() => toggleCategory(catId)}
                style={{ 
                  borderColor: expandedCategories.includes(catId) ? 'var(--primary-color)' : 'rgba(0,0,0,0.05)',
                  background: expandedCategories.includes(catId) ? '#f8fafc' : 'rgba(255,255,255,0.7)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                   {catId === 'body' && <PaintBucket size={18} />}
                   {catId === 'bumper' && <ShieldCheck size={18} />}
                   {catId === 'wheel' && <Aperture size={18} />}
                   {catId === 'extra' && <Zap size={18} />}
                   <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{category.name}</span>
                </div>
                <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: expandedCategories.includes(catId) ? 'rotate(180deg)' : 'rotate(0)' }} />
              </div>
              
              {expandedCategories.includes(catId) && (
                <div className="category-content animate-fade-in" style={{ padding: '0 0.5rem' }}>
                  {category.items.map(item => renderUpgradeItem(item))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
