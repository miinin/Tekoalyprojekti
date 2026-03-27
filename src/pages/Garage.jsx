import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, Car, Eye, Droplets, PaintBucket, Cpu, Navigation, Layers, ShieldCheck, BatteryCharging, Radio } from 'lucide-react';

export default function Garage() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState(0);

  useEffect(() => {
    setSparks(parseInt(localStorage.getItem('aivan_sparks') || '0', 10));
  }, []);

  const upgrades = [
    { id: 'u1', name: 'Turboahdettu Prosessori', desc: 'Laskentateho maksimiin.', price: 500, icon: <Cpu size={28} />, color: '#3b82f6', bg: '#dbeafe' },
    { id: 'u2', name: 'Kvanttitutka', desc: 'Näkee algoritmiviidakon läpi.', price: 800, icon: <Navigation size={28} />, color: '#8b5cf6', bg: '#ede9fe' },
    { id: 'u3', name: 'Hologrammikojelauta', desc: 'Lisättyä todellisuutta hyttiin.', price: 1200, icon: <Layers size={28} />, color: '#06b6d4', bg: '#cffafe' },
    { id: 'u4', name: 'Titaani-alusta', desc: 'Kestää kovimmatkin koodibugit.', price: 1500, icon: <ShieldCheck size={28} />, color: '#64748b', bg: '#f1f5f9' },
    { id: 'u5', name: 'Itseoppiva Autopilotti', desc: 'Apukuski joka ohjaa puolestasi.', price: 2500, icon: <Radio size={28} />, color: '#ef4444', bg: '#fee2e2' },
    { id: 'u6', name: 'Plasma-akustot', desc: 'Maksimaalinen kipinä-kapasiteetti.', price: 2000, icon: <BatteryCharging size={28} />, color: '#10b981', bg: '#d1fae5' },
    { id: 'u7', name: 'Neon-maalaus', desc: 'Luo pimeässä hohtavan asenteen.', price: 600, icon: <PaintBucket size={28} />, color: '#f59e0b', bg: '#fef3c7' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        
        {/* Your Van Preview */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '450px', background: 'radial-gradient(circle at center, rgba(120, 190, 32, 0.1), transparent)', border: '2px solid rgba(120, 190, 32, 0.3)', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--primary-color)', opacity: '0.1', filter: 'blur(50px)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '300px', height: '300px', background: 'var(--accent-color)', opacity: '0.1', filter: 'blur(60px)', borderRadius: '50%' }}></div>

          <Car size={200} color="var(--primary-color)" style={{ filter: 'drop-shadow(0 20px 25px rgba(0,114,198,0.3))', zIndex: 1 }} />
          
          <h2 style={{ marginTop: '3rem', fontSize: '2.5rem', color: 'var(--text-main)', zIndex: 1 }}>AIvan "TurboKissa"</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', zIndex: 1 }}>
            <span style={{ background: '#e0f2fe', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '1rem', color: 'var(--primary-hover)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>
              Taso 1
            </span>
            <span style={{ background: '#fce7f3', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '1rem', color: '#db2777', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>
              Eduks-Spesialisti
            </span>
          </div>
        </div>

        {/* Upgrades List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Päivitysluettelo</h3>
          
          {upgrades.map((item) => (
            <div key={item.id} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', transition: 'all 0.2s', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = item.color; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; }}>
              <div style={{ background: item.bg, padding: '1.2rem', borderRadius: '16px', color: item.color }}>
                {item.icon}
              </div>
              <div style={{ flexGrow: 1, fontFamily: 'var(--font-main)' }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>{item.name}</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
              <button 
                className="btn-primary" 
                style={{ padding: '0.6rem 1.2rem', fontSize: '1.1rem', background: sparks >= item.price ? 'var(--primary-color)' : '#e2e8f0', color: sparks >= item.price ? 'white' : 'var(--text-muted)', boxShadow: sparks >= item.price ? '' : 'none', cursor: sparks >= item.price ? 'pointer' : 'not-allowed' }}
                onClick={() => {
                  if (sparks >= item.price) {
                    const newTotal = sparks - item.price;
                    setSparks(newTotal);
                    localStorage.setItem('aivan_sparks', newTotal);
                    alert('Asennettu autoon: ' + item.name + '!');
                  }
                }}
              >
                OSTA ({item.price})
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
