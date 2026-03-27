import { categories } from '../data/questions';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Wrench, Flame, Star } from 'lucide-react';

export default function Roadmap() {
  const navigate = useNavigate();
  
  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>Valitse Seuraava Kohde</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', fontWeight: '700', marginTop: '0.5rem', fontFamily: 'var(--font-main)' }}>
            <Map size={20} /> Löydä reittisi oppimisen maailmassa
          </div>
        </div>
        <button className="btn-secondary" onClick={() => navigate('/garage')}>
          <Wrench size={18} /> Autotalli
        </button>
      </div>

      {/* Modern non-linear Map layout using CSS Flex Wrap to simulate floating nodes */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '2.5rem', 
        marginTop: '3rem',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '24px',
        border: '2px dashed rgba(0, 114, 198, 0.2)'
      }}>
        {categories.map((cat, index) => {
          // Creating an uneven grid look by bumping every alternate item down
          const marginTop = index % 2 === 1 ? '40px' : '0px';
          // Rotate slightly for a fun "map" sticky-note feel
          const rotation = index % 2 === 0 ? '-1.5deg' : '2deg';

          return (
            <div 
              key={cat.id} 
              className="glass-panel"
              onClick={() => navigate(`/quiz/${cat.id}`)}
              style={{ 
                width: '100%',
                maxWidth: '300px',
                marginTop,
                transform: `rotate(${rotation})`,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderTop: '6px solid var(--primary-color)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `scale(1.05) translateY(-10px) rotate(0deg)`;
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.currentTarget.style.borderTop = '6px solid var(--accent-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${rotation})`;
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.07)';
                e.currentTarget.style.borderTop = '6px solid var(--primary-color)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'var(--primary-color)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.4rem'
                }}>
                  {index + 1}
                </div>
                <div style={{ background: '#fef3c7', padding: '0.4rem 0.8rem', borderRadius: '20px', color: '#d97706', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  <Star size={14} /> Kysymyksiä
                </div>
              </div>
              
              <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)', fontSize: '1.4rem', lineHeight: '1.3' }}>
                {cat.name}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 1.5rem 0', lineHeight: '1.5' }}>
                Ratkaise tekoälyn tehtäviä ja kerrytä pisteitä autotalliisi tässä kategoriassa.
              </p>

              <button className="btn-primary" style={{ width: '100%' }}>
                Mene Sisään
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
