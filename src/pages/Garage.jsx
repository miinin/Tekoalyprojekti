import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Zap, Car, ShieldAlert, Droplets, PaintBucket } from 'lucide-react';

export default function Garage() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Autotalli</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Tuunaa tekoälypakusi ja hanki apuvälineitä.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="glass-panel" style={{ padding: '0.5rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <Droplets size={22} /> 1250 Bensaa
          </div>
          <button className="btn-secondary" onClick={() => navigate('/roadmap')}>
            <Map size={18} /> Tiekartta
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Your Van Preview */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '350px', background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.15), rgba(30, 41, 59, 0.3))' }}>
          <Car size={140} color="var(--secondary-color)" style={{ filter: 'drop-shadow(0 10px 25px rgba(236,72,153,0.4))' }} />
          <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>AIvan "TurboKissa"</h2>
          <span style={{ background: 'var(--surface-color)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.05)', marginTop: '0.5rem' }}>
            Cyberpunk-teema
          </span>
        </div>

        {/* Upgrades */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'rgba(99,102,241,0.2)', padding: '1rem', borderRadius: '16px', color: 'var(--primary-color)' }}>
              <Zap size={28} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Sumuvalot</h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Poistaa vääriä vastauksia. Taso 2.</p>
            </div>
            <button className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Päivitä (500)</button>
          </div>

          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'rgba(245,158,11,0.2)', padding: '1rem', borderRadius: '16px', color: 'var(--warning)' }}>
              <ShieldAlert size={28} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Vararengas</h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Säästää vauhtiputken katkeamisen.</p>
            </div>
            <button className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Osta (250)</button>
          </div>
          
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ background: 'rgba(236,72,153,0.2)', padding: '1rem', borderRadius: '16px', color: 'var(--secondary-color)' }}>
              <PaintBucket size={28} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Uusi Maalipinta</h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Vain ulkonäkö. Avaa värikartta.</p>
            </div>
            <button className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>Selaa</button>
          </div>

        </div>
      </div>
    </div>
  );
}
