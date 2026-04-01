import { store } from '../services/store';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Map, Wrench, Flame, Star, ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function Roadmap() {
  const navigate = useNavigate();
  const { mainCategory } = useParams();
  
  const [categories, setCategories] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [completions, setCompletions] = useState([]);
  const [vanPos, setVanPos] = useState({ top: '100%', left: '0%' });
  const [vanFacingRight, setVanFacingRight] = useState(true);
  const [isDriving, setIsDriving] = useState(false);

  const mainPositions = [
    { top: '35%', left: '18%' },
    { top: '75%', left: '25%' },
    { top: '65%', left: '75%' },
    { top: '25%', left: '80%' },
    { top: '30%', left: '50%' }
  ];

  useEffect(() => {
    const cats = store.getQuestions();
    setCategories(cats);
    store.getPurchasedItems().then(p => setPurchased(p));
    setCompletions(store.getCompletions());
    
    const lastLoc = store.getLastLocation();
    let startPos = { top: '90%', left: '5%' }; // Default position
    
    if (mainCategory) {
       if (lastLoc.sub) {
          const cat = cats.find(c => c.id === mainCategory);
          const sub = cat ? cat.subcategories.find(s => s.id === lastLoc.sub) : null;
          if (sub) startPos = { top: sub.top || '50%', left: sub.left || '50%' };
       }
    } else {
       if (lastLoc.main) {
          const cIdx = cats.findIndex(c => c.id === lastLoc.main);
          if (cIdx >= 0 && mainPositions[cIdx]) {
             startPos = mainPositions[cIdx];
          }
       }
    }
    setVanPos(startPos);
  }, [mainCategory]);
  
  const isCatCompleted = (cat) => {
    if (!cat.subcategories || cat.subcategories.length === 0) return completions.includes(cat.id);
    return cat.subcategories.every(sub => completions.includes(sub.id));
  };

  const getMapBackground = (categoryId) => {
    const backgrounds = {
      'perusteet': 'map-metsa.png',
      'konepellin': 'map-satama.png',
      'arjessa': 'map-aavikko.png',
      'etiikka': 'map-linna.png',
      'kayttotaidot': 'map-jaa.png',
      'viidakko': 'map-viidakko.png',
      'default': 'map-bg.jpg'
    };
    return backgrounds[categoryId] || backgrounds['default'];
  };

  const handleNodeClick = (targetId, isSub, targetTop, targetLeft) => {
    if (isDriving) return;
    setIsDriving(true);
    
    const tTop = parseFloat(targetTop);
    const tLeft = parseFloat(targetLeft);
    const currentLeft = parseFloat(vanPos.left);
    
    if (tLeft !== currentLeft) {
      setVanFacingRight(tLeft > currentLeft);
    }
    setVanPos({ top: targetTop, left: targetLeft });
    
    store.setLastLocation(mainCategory || targetId, isSub ? targetId : null);
    
    setTimeout(() => {
      setIsDriving(false);
      if (isSub) {
        navigate(`/quiz/${mainCategory}/${targetId}`);
      } else {
        navigate(`/roadmap/${targetId}`);
      }
    }, 1500); // Wait for the van CSS transitio to finish
  };

  const renderVan = () => {
    const carLayers = purchased.filter(id => id.startsWith('u'));
    return (
      <div style={{
        position: 'absolute',
        top: vanPos.top,
        left: vanPos.left,
        width: '120px', 
        height: '100px',
        transform: `translate(-50%, -85%) scaleX(${vanFacingRight ? 1 : -1})`, 
        transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 20,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }}>
        {isDriving && (
           <div style={{ position: 'absolute', bottom: '15px', left: vanFacingRight ? '-5px' : 'auto', right: vanFacingRight ? 'auto' : '-5px', width: '20px', height: '10px', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', filter: 'blur(3px)', animation: 'smoke 0.4s infinite' }}></div>
        )}
        <div style={{ position: 'relative', width: '100%', height: '100%', animation: isDriving ? 'driveBounce 0.2s infinite alternate' : 'none' }}>
           <img src="/van1-base.png" alt="Van" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }} />
           {carLayers.map(layer => (
              <img key={layer} src={`/layer-${layer}.png`} alt={layer} style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 }} />
           ))}
        </div>
        <style>{`
          @keyframes driveBounce { from { transform: translateY(0); } to { transform: translateY(-4px); } }
          @keyframes smoke { 0% { opacity: 0; transform: scale(0.5) translate(0, 0); } 50% { opacity: 1; transform: scale(1.5) translate(${vanFacingRight ? '-10px' : '10px'}, -5px); } 100% { opacity: 0; transform: scale(2) translate(${vanFacingRight ? '-20px' : '20px'}, -10px); } }
          @keyframes pulseGlow { 0% { box-shadow: 0 0 10px rgba(16,185,129,0.5); transform: scale(1); } 50% { box-shadow: 0 0 25px rgba(16,185,129,1); transform: scale(1.1); } 100% { box-shadow: 0 0 10px rgba(16,185,129,0.5); transform: scale(1); } }
        `}</style>
      </div>
    );
  };
  
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
        backgroundImage: currentCategory ? `url("/${getMapBackground(mainCategory)}")` : 'url("/map-bg.jpg")',
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

        {renderVan()}

        {(() => {
          if (currentCategory) {
            return currentCategory.subcategories.map((sub, index) => (
              <div 
                key={sub.id} 
                className={`map-node group animate-fade-in ${isDriving ? 'pointer-events-none' : ''}`}
                onClick={() => handleNodeClick(sub.id, true, sub.top || '50%', sub.left || '50%')}
                style={{ position: 'absolute', top: sub.top || '50%', left: sub.left || '50%', transform: 'translate(-50%, -50%)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', zIndex: 10 }}
              >
                {completions.includes(sub.id) && (
                   <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#10b981', color: 'white', borderRadius: '50%', padding: '4px', zIndex: 30, border: '2px solid white', animation: 'pulseGlow 2s infinite' }}>
                     <CheckCircle2 size={24} />
                   </div>
                )}
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
              const pos = mainPositions[index] || { top: '50%', left: '50%' };

              return (
                <div 
                  key={cat.id} 
                  className={`map-node group animate-fade-in ${isDriving ? 'pointer-events-none' : ''}`}
                  onClick={() => handleNodeClick(cat.id, false, pos.top, pos.left)}
                  style={{ position: 'absolute', top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', zIndex: 10 }}
                >
                  {isCatCompleted(cat) && (
                     <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#10b981', color: 'white', borderRadius: '50%', padding: '6px', zIndex: 30, border: '3px solid white', animation: 'pulseGlow 2s infinite' }}>
                       <CheckCircle2 size={28} />
                     </div>
                  )}
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
