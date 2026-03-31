import { store } from '../services/store';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Map, Wrench, Flame, Star, ChevronLeft } from 'lucide-react';

export default function Roadmap() {
  const navigate = useNavigate();
  const { mainCategory } = useParams();
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    setCategories(store.getQuestions());
  }, []);
  
  const currentCategory = (mainCategory && categories.length > 0) ? categories.find(c => c.id === mainCategory) : null;
  
  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>
             {currentCategory ? currentCategory.name : 'Valitse Seuraava Kohde'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', fontWeight: '700', marginTop: '0.5rem', fontFamily: 'var(--font-main)' }}>
            <Map size={20} /> {currentCategory ? 'Tarkennetaan alueen taitoja' : 'Löydä reittisi oppimisen maailmassa'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {currentCategory && (
            <button className="btn-secondary" onClick={() => navigate('/roadmap')}>
              <ChevronLeft size={18} /> Pääkartta
            </button>
          )}
          <button className="btn-secondary" onClick={() => navigate('/garage')}>
            <Wrench size={18} /> Autotalli
          </button>
        </div>
      </div>

      {/* Visual Illustrated Map Container */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        backgroundImage: currentCategory ? `url("/map-bg-${mainCategory}.jpg"), url("/map-bg.jpg")` : 'url("/map-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '2rem',
        borderRadius: '24px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        border: '4px solid rgba(0, 114, 198, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Adds a slight dark overlay if needed to make points pop, but keeping it completely transparent for now to let illustration shine */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }}></div>

        {(() => {
          if (currentCategory) {
            return currentCategory.subcategories.map((sub, index) => (
              <div 
                key={sub.id} 
                className="map-node group animate-fade-in"
                onClick={() => navigate(`/quiz/${mainCategory}/${sub.id}`)}
                style={{ position: 'absolute', top: sub.top || '50%', left: sub.left || '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', zIndex: 10 }}
              >
                {/* Floating Marker */}
                <div style={{ width: '50px', height: '50px', background: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 'bold', border: '3px solid white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                 onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15) translateY(-8px)'; e.currentTarget.style.backgroundColor = 'var(--primary-color)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)'; }}>
                  {index + 1}
                </div>
                {/* Title Badge */}
                <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '0.5rem 0.8rem', borderRadius: '12px', fontWeight: 'bold', color: 'var(--text-main)', fontFamily: 'var(--font-display)', fontSize: '0.9rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '160px', pointerEvents: 'none', border: '2px solid rgba(0,0,0,0.05)' }}>
                  {sub.name}
                </div>
              </div>
            ));
          } else {
            return categories.map((cat, index) => {
              // Define precise coordinates based on the user's illustration landmarks
              const positions = [
                { top: '35%', left: '18%' }, // Metsä/joki
                { top: '75%', left: '25%' }, // Viidakon rauniot
                { top: '65%', left: '75%' }, // Satama/Majakka
                { top: '25%', left: '80%' }, // Lumihuippuinen vuori
                { top: '30%', left: '50%' }  // Linna
              ];
              const pos = positions[index] || { top: '50%', left: '50%' };

              return (
                <div 
                  key={cat.id} 
                  className="map-node group animate-fade-in"
                  onClick={() => navigate(`/roadmap/${cat.id}`)}
                  style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', zIndex: 10 }}
                >
                  {/* Floating Marker */}
                  <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold', border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15) translateY(-8px)'; e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.backgroundColor = 'var(--primary-color)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)'; }}>
                    {index + 1}
                  </div>
                  {/* Title Badge */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '0.6rem 1rem', borderRadius: '16px', fontWeight: 'bold', color: 'var(--text-main)', fontFamily: 'var(--font-display)', fontSize: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '180px', pointerEvents: 'none', border: '2px solid rgba(0,0,0,0.05)' }}>
                    {cat.name}
                  </div>
                </div>
              );
            });
          }
        })()}
      </div>
    </div>
  );
}
