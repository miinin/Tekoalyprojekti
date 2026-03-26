import { categories } from '../data/questions';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Wrench, Flame } from 'lucide-react';

export default function Roadmap() {
  const navigate = useNavigate();
  
  // Oletetaan, että ensimmäinen on "suoritettu", toinen on "aktiivinen", loput "lukossa" demon vuoksi
  const stages = categories.map((cat, index) => ({
    id: index + 1,
    title: cat.name,
    completed: index < 1,
    active: index === 1,
    locked: index > 1
  }));

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ margin: 0 }}>Tiekartta</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', fontWeight: '700', marginTop: '0.5rem', fontFamily: 'var(--font-main)' }}>
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
        <div style={{ position: 'absolute', left: '32px', top: '24px', bottom: '24px', width: '4px', background: '#e2e8f0', zIndex: 0, borderRadius: '4px' }}></div>
        
        {stages.map((stage) => (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              background: stage.completed ? 'var(--accent-color)' : stage.active ? 'var(--primary-color)' : '#e2e8f0',
              color: stage.locked ? 'var(--text-muted)' : 'white',
              border: '4px solid white',
              boxShadow: stage.active ? '0 0 0 4px rgba(0, 114, 198, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              {stage.id}
            </div>
            <div className="glass-panel" style={{ flexGrow: 1, opacity: stage.locked ? 0.6 : 1, padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: stage.active ? '4px solid var(--primary-color)' : '1px solid rgba(0,0,0,0.05)' }}>
              <div>
                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.6rem' }}>{stage.title}</h3>
                {stage.active && <p style={{ color: 'var(--primary-color)', margin: '0.25rem 0 0 0', fontWeight: '500', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Seuraava etappi!</p>}
                {stage.completed && <p style={{ color: 'var(--accent-color)', margin: '0.25rem 0 0 0', fontWeight: '500', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Suoritettu</p>}
                {stage.locked && <p style={{ color: 'var(--text-muted)', margin: '0.25rem 0 0 0', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Lukittu</p>}
              </div>
              {stage.active && (
                <button className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Pelaa</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
