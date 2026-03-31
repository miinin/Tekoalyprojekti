import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, Car, Eye, Droplets, PaintBucket, Cpu, Navigation, Layers, ShieldCheck, BatteryCharging, Radio } from 'lucide-react';
import { store } from '../services/store';

export default function Garage() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState(0);

  const [purchased, setPurchased] = useState([]);

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
    { id: 'u1', name: 'Turboahdettu Prosessori', desc: 'Laskentateho maksimiin.', price: 500, icon: <Cpu size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'u2', name: 'Kvanttitutka', desc: 'Näkee viidakon läpi.', price: 800, icon: <Navigation size={28} />, color: '#8b5cf6', bg: '#ede9fe' },
    { id: 'u3', name: 'Hologrammikojelauta', desc: 'Lisättyä todellisuutta.', price: 1200, icon: <Layers size={28} />, color: '#06b6d4', bg: '#cffafe' },
    { id: 'u4', name: 'Titaani-alusta', desc: 'Kestää kovimmat bugit.', price: 1500, icon: <ShieldCheck size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'u5', name: 'Itseoppiva Autopilotti', desc: 'Apukuski joka ohjaa.', price: 2500, icon: <Radio size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'u6', name: 'Plasma-akustot', desc: 'Max kipinä-kapasiteetti.', price: 2000, icon: <BatteryCharging size={28} />, color: '#10b981', bg: '#d1fae5' },
    { id: 'u7', name: 'Neon-maalaus', desc: 'Oma asenne.', price: 600, icon: <PaintBucket size={28} />, color: '#f59e0b', bg: '#fef3c7' }
  ];

  const garageUpgrades = [
    { id: 'g1', name: 'Mekaanikko-botti', desc: 'Apulainen talliin.', price: 1000, icon: <Cpu size={28} />, color: '#a855f7', bg: '#f3e8ff' },
    { id: 'g2', name: 'Kvanttisorvi', desc: 'Tulevaisuuden asennus.', price: 2000, icon: <Zap size={28} />, color: '#eab308', bg: '#fef08a' },
    { id: 'g3', name: 'Neon-kyltti', desc: 'Tunnelmavalaistusta seinälle.', price: 800, icon: <PaintBucket size={28} />, color: '#ec4899', bg: '#fbcfe8' }
  ];

  const allUpgrades = [...carUpgrades, ...garageUpgrades];

  const renderUpgradeItem = (item) => (
    <div key={item.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '0.8rem', transition: 'all 0.2s', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = item.color; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div style={{ background: item.bg, padding: '0.6rem', borderRadius: '12px', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {React.cloneElement(item.icon, { size: 20 })}
        </div>
        <div style={{ flexGrow: 1, fontFamily: 'var(--font-main)' }}>
          <h3 style={{ margin: 0, fontSize: '0.95rem', fontFamily: 'var(--font-display)', color: 'var(--text-main)', lineHeight: '1.2' }}>{item.name}</h3>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
        </div>
      </div>
      <button 
        className="btn-primary" 
        style={{ 
          padding: '0.4rem', 
          fontSize: '0.85rem', 
          width: '100%',
          background: purchased.includes(item.id) ? '#10b981' : (sparks >= item.price ? 'var(--primary-color)' : '#e2e8f0'), 
          color: purchased.includes(item.id) || sparks >= item.price ? 'white' : 'var(--text-muted)', 
          boxShadow: sparks >= item.price && !purchased.includes(item.id) ? '0 4px 6px rgba(0,0,0,0.1)' : 'none', 
          cursor: purchased.includes(item.id) ? 'default' : (sparks >= item.price ? 'pointer' : 'not-allowed')
        }}
        onClick={async () => {
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
            /* Keskusta vie ~70-80% tilasta, sivut minimoitu */
            grid-template-columns: minmax(180px, 1.5fr) 7fr minmax(180px, 1.5fr);
          }
        }
        @media (max-width: 1099px) {
          .garage-left { order: 2; }
          .garage-center { order: 1; }
          .garage-right { order: 3; }
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
            {/* GARAGE BACKGROUND LAYER */}
            <img src="/autotalli1-base.png" alt="Autotallin tausta" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />

            {/* BASE LAYER (Base Van) */}
            <img src="/van1-base.png" alt="Auto" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1, padding: '2rem' }} />
            
            {/* DYNAMIC LAYERS */}
            {allUpgrades.map(item => {
              if (purchased.includes(item.id)) {
                 return <img key={item.id} src={`/layer-${item.id}.png`} alt={item.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, padding: '2rem' }} />;
              }
              return null;
            })}

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

        {/* RIGHT COLUMN: Car Upgrades */}
        <div className="garage-right" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center', marginBottom: '0.2rem', fontFamily: 'var(--font-display)', letterSpacing: '1px', textTransform: 'uppercase' }}>Auton osat</h3>
          {carUpgrades.map(item => renderUpgradeItem(item))}
        </div>

      </div>
    </div>
  );
}
