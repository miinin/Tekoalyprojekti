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

  // Master roadmap configuration with nodes and waypoints
  const ROADMAP_DATA = {
    nodes: [
      { id: 'perusteet', name: 'Tekoälyn perusteet', top: '37.2%', left: '22.8%' },
      { id: 'konepellin', name: 'Konepellin alla', top: '76.5%', left: '23.5%' },
      { id: 'arjessa', name: 'Tekoäly arjessamme', top: '83.2%', left: '52.4%' },
      { id: 'etiikka', name: 'Etiikka ja turvallisuus', top: '64.8%', left: '74.2%' },
      { id: 'kayttotaidot', name: 'Tekoälyn käyttötaidot', top: '24.6%', left: '74.2%' },
      { id: 'volcano', name: 'Tekoälyn Huippu', top: '35.4%', left: '50.4%' },
      { id: 'sea', name: 'Salainen Meri', top: '20.6%', left: '42.1%', isSecret: true }
    ],
    // Paths between main nodes (start -> end ID)
    paths: {
      'perusteet-konepellin': [
        { top: '37.2%', left: '22.8%' },
        { top: '45%', left: '26%' },
        { top: '53%', left: '29%' },
        { top: '65%', left: '27%', tunnel: true },
        { top: '76.5%', left: '23.5%' }
      ],
      'konepellin-arjessa': [
        { top: '76.5%', left: '23.5%' },
        { top: '78%', left: '38%' },
        { top: '83.2%', left: '52.4%' }
      ],
      'arjessa-etiikka': [
        { top: '83.2%', left: '52.4%' },
        { top: '80%', left: '65%', tunnel: true },
        { top: '70%', left: '72%' },
        { top: '64.8%', left: '74.2%' }
      ],
      'etiikka-kayttotaidot': [
        { top: '64.8%', left: '74.2%' },
        { top: '52%', left: '80%', tunnel: true },
        { top: '38%', left: '81%' },
        { top: '24.6%', left: '74.2%' }
      ],
      'kayttotaidot-volcano': [
        { top: '24.6%', left: '74.2%' },
        { top: '27%', left: '62%', tunnel: true },
        { top: '35.4%', left: '50.4%' }
      ],
      'volcano-perusteet': [
        { top: '35.4%', left: '50.4%' },
        { top: '32%', left: '36%', tunnel: true },
        { top: '37.2%', left: '22.8%' }
      ],
      'volcano-sea': [
        { top: '35.4%', left: '50.4%' },
        { top: '28%', left: '42%' },
        { top: '20.6%', left: '42.1%' }
      ]
    }
  };

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
        const node = ROADMAP_DATA.nodes.find(n => n.id === lastLoc.main);
        if (node) startPos = { top: node.top, left: node.left };
      }
    }
    setVanPos(startPos);
  }, [mainCategory]);

  const currentCategory = (mainCategory && categories.length > 0) ? categories.find(c => c.id === mainCategory) : null;

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

  const handleNodeClick = async (targetId, isSub, targetTop, targetLeft) => {
    if (isDriving) return;

    // Check if secret route is locked
    const node = ROADMAP_DATA.nodes.find(n => n.id === targetId);
    if (node?.isSecret) {
      const hasGear = purchased.includes('van-extra01'); // Placeholder for "rubber boat" or similar
      if (!hasGear) {
        alert('Tarvitset erikoisvarusteita (kuten kumiveneen) päästäksesi saarelle!');
        return;
      }
    }

    setIsDriving(true);

    // If it's a sub-node, the van just jumps to it (simpler logic for subcategories)
    if (isSub) {
      const tLeft = parseFloat(targetLeft);
      const currentLeft = parseFloat(vanPos.left);
      if (tLeft !== currentLeft) setVanFacingRight(tLeft > currentLeft);
      setVanPos({ top: targetTop, left: targetLeft });
      setTimeout(() => {
        setIsDriving(false);
        navigate(`/quiz/${mainCategory}/${targetId}`);
      }, 1000);
      return;
    }

    // MAIN ROADMAP JOURNEY
    const lastLoc = store.getLastLocation().main || 'perusteet';
    const pathKey = `${lastLoc}-${targetId}`;
    const reversePathKey = `${targetId}-${lastLoc}`;
    
    let travelWaypoints = [];
    if (ROADMAP_DATA.paths[pathKey]) {
      travelWaypoints = ROADMAP_DATA.paths[pathKey];
    } else if (ROADMAP_DATA.paths[reversePathKey]) {
      travelWaypoints = [...ROADMAP_DATA.paths[reversePathKey]].reverse();
    } else {
      // If no direct path, just jump (fallback)
      travelWaypoints = [{ top: targetTop, left: targetLeft }];
    }

    // Execute waypoint movement
    for (let i = 0; i < travelWaypoints.length; i++) {
      const wp = travelWaypoints[i];
      const nextWp = travelWaypoints[i + 1];
      
      const tTop = parseFloat(wp.top);
      const tLeft = parseFloat(wp.left);
      const prevLeft = i > 0 ? parseFloat(travelWaypoints[i-1].left) : parseFloat(vanPos.left);

      if (tLeft !== prevLeft) setVanFacingRight(tLeft > prevLeft);
      
      // Calculate speed: longer distance = more time, but faster speed on straights
      // We simulate this by adjusting the timeout
      let driveTime = 600; // Base time for a segment
      if (nextWp) {
        const dx = parseFloat(nextWp.left) - tLeft;
        const dy = parseFloat(nextWp.top) - tTop;
        const dist = Math.sqrt(dx*dx + dy*dy);
        // If distance is large (straight), move faster relatively
        driveTime = dist > 15 ? 400 : 800; // Fast for straights, slow for curves/short hops
      }

      setVanPos({ top: wp.top, left: wp.left, tunnel: wp.tunnel });
      await new Promise(r => setTimeout(r, driveTime));
    }

    store.setLastLocation(targetId, null);
    setIsDriving(false);
    navigate(`/roadmap/${targetId}`);
  };

  const renderVan = () => {
    const carLayers = purchased
      .filter(id => id.startsWith('van-') || id.startsWith('u'))
      .sort((a, b) => {
        const order = { body: 1, wheel: 2, bumper: 3, extra: 4 };
        const getCat = id => {
          if (id.startsWith('u')) return 'body';
          return id.split('-')[1].replace(/[0-9]/g, '');
        };
        return (order[getCat(a)] || 99) - (order[getCat(b)] || 99);
      });

    return (
      <div style={{
        position: 'absolute',
        top: vanPos.top,
        left: vanPos.left,
        width: '120px',
        height: '100px',
        transform: `translate(-50%, -85%) scaleX(${vanFacingRight ? 1 : -1})`,
        transition: 'all 0.6s linear', // Linear for smooth waypoint transitions
        zIndex: 20,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        opacity: vanPos.tunnel ? 0.3 : 1 // Green tunnel effect
      }}>
        {isDriving && !vanPos.tunnel && (
          <div style={{ position: 'absolute', bottom: '15px', left: vanFacingRight ? '-5px' : 'auto', right: vanFacingRight ? 'auto' : '-5px', width: '20px', height: '10px', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', filter: 'blur(3px)', animation: 'smoke 0.4s infinite' }}></div>
        )}
        <div style={{ position: 'relative', width: '100%', height: '100%', animation: isDriving ? 'driveBounce 0.2s infinite alternate' : 'none' }}>
          <img src="/carparts/van1-base.png" alt="Van" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }} />
          {carLayers.map(layer => {
            const path = layer.startsWith('u') ? `/layer-${layer}.png` : `/carparts/${layer}.png`;
            return <img key={layer} src={path} alt={layer} style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 }} />;
          })}
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
    <div className="animate-fade-in" style={{ padding: '1rem', maxWidth: '1800px', margin: '0 auto', width: '100%' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
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
            return ROADMAP_DATA.nodes.map((node, index) => {
              const isLockedSecret = node.isSecret && !purchased.includes('van-extra01');

              return (
                <div
                  key={node.id}
                  className={`map-node group animate-fade-in ${isDriving ? 'pointer-events-none' : ''}`}
                  onClick={() => handleNodeClick(node.id, false, node.top, node.left)}
                  style={{
                    position: 'absolute',
                    top: node.top,
                    left: node.left,
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem',
                    zIndex: 10,
                    opacity: isLockedSecret ? 0.6 : 1
                  }}
                >
                  {/* Completions badge */}
                  {completions.includes(node.id) && (
                    <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#10b981', color: 'white', borderRadius: '50%', padding: '6px', zIndex: 30, border: '3px solid white', animation: 'pulseGlow 2s infinite' }}>
                      <CheckCircle2 size={28} />
                    </div>
                  )}
                  {/* Floating Marker */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: node.isSecret ? '#f59e0b' : 'var(--primary-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    border: '4px solid white',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15) translateY(-8px)'; e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.backgroundColor = node.isSecret ? '#f59e0b' : 'var(--primary-color)'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)'; }}>
                    {node.isSecret ? '?' : index + 1}
                  </div>
                  {/* Title Badge slice */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.95)', padding: '0.6rem 1rem', borderRadius: '16px', fontWeight: 'bold', color: 'var(--text-main)', fontFamily: 'var(--font-display)', fontSize: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '180px', pointerEvents: 'none', border: '2px solid rgba(0,0,0,0.05)' }}>
                    {node.name}
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
