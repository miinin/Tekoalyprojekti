import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Wrench, Flame } from 'lucide-react';

export default function Roadmap() {
  const navigate = useNavigate();
  
  const stages = [
    { id: 1, title: 'Tekoälyn perusteet', completed: true },
    { id: 2, title: 'Konepellin alla', active: true },
    { id: 3, title: 'Tekoäly arjessamme', locked: true },
    { id: 4, title: 'Etiikka ja turvallisuus', locked: true }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Tiekartta</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--warning)', fontWeight: 'bold', marginTop: '0.5rem' }}>
            <Flame size={20} /> Vauhtiputki: 3x kerroin
          </div>
        </div>
        <button className="btn-secondary" onClick={() => navigate('/garage')}>
          <Wrench size={18} /> Autotalli
        </button>
      </div>

      {/* Map Nodes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', marginTop: '2rem' }}>
        {/* Line behind nodes */}
        <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '4px', background: 'rgba(255,255,255,0.05)', zIndex: 0, borderRadius: '4px' }}></div>
        
        {stages.map((stage) => (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ 
              width: '52px', 
              height: '52px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '1.2rem',
              background: stage.completed ? 'var(--success)' : stage.active ? 'linear-gradient(135deg, var(--primary-color), var(--accent-color))' : 'var(--surface-color)',
              color: stage.locked ? 'var(--text-muted)' : 'white',
              border: stage.active ? '4px solid rgba(99, 102, 241, 0.3)' : '4px solid var(--bg-color)',
              boxShadow: stage.active ? '0 0 20px rgba(99, 102, 241, 0.5)' : 'none'
            }}>
              {stage.id}
            </div>
            <div className="glass-panel" style={{ flexGrow: 1, opacity: stage.locked ? 0.5 : 1, padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, color: stage.locked ? 'var(--text-muted)' : 'white', fontSize: '1.25rem' }}>{stage.title}</h3>
                {stage.active && <p style={{ color: 'var(--accent-color)', margin: '0.25rem 0 0 0', fontWeight: '600', fontSize: '0.9rem' }}>Seuraava etappi!</p>}
                {stage.completed && <p style={{ color: 'var(--success)', margin: '0.25rem 0 0 0', fontWeight: '600', fontSize: '0.9rem' }}>Suoritettu</p>}
              </div>
              {stage.active && (
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Pelaa</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
