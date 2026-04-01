import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  Map as MapIcon, 
  Settings, 
  Trophy, 
  Car,
  CheckCircle2,
  Lock,
  PlayCircle
} from 'lucide-react';
import { AI_ROADMAP_DATA } from '../data/roadmapPaths';
import { categories } from '../data/questions';
import { store } from '../services/store';

const Roadmap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMap, setCurrentMap] = useState('main');
  const [dataVersion] = useState("7-LEVEL-FIX-v1");
  const [vanPos, setVanPos] = useState({ top: '98%', left: '47.5%', rotate: 0, isTunnel: false });
  const [isMoving, setIsMoving] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentLocationId, setCurrentLocationId] = useState('start_point');
  const [puffs, setPuffs] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mapParam = params.get('map');
    if (mapParam && AI_ROADMAP_DATA.sub[mapParam]) {
      setCurrentMap(mapParam);
    } else {
      setCurrentMap('main');
    }
  }, [location]);

  const mainAdjacency = {};
  AI_ROADMAP_DATA.main.nodes.forEach(node => {
    mainAdjacency[node.id] = [];
  });
  Object.keys(AI_ROADMAP_DATA.main.paths).forEach(pathKey => {
    const [start, end] = pathKey.split('-');
    if (mainAdjacency[start] && mainAdjacency[end]) {
      mainAdjacency[start].push(end);
      mainAdjacency[end].push(start);
    }
  });

  const findPathBFS = (startNode, endNode) => {
    if (startNode === endNode) return [startNode];
    const queue = [[startNode]];
    const visited = new Set([startNode]);

    while (queue.length > 0) {
      const path = queue.shift();
      const lastNode = path[path.length - 1];

      for (const neighbor of (mainAdjacency[lastNode] || [])) {
        if (!visited.has(neighbor)) {
          if (neighbor === endNode) return [...path, neighbor];
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
    return null;
  };

  const moveAlongPath = async (waypoints, totalDuration = 2000) => {
    if (!waypoints || waypoints.length < 2) return;
    const stepDuration = totalDuration / (waypoints.length - 1);
    setIsMoving(true);
    for (let i = 0; i < waypoints.length; i++) {
        const target = waypoints[i];
        const prev = waypoints[i-1];
        let rotation = 0;
        if (prev) {
            const dx = parseFloat(target.left) - parseFloat(prev.left);
            const dy = parseFloat(target.top) - parseFloat(prev.top);
            rotation = Math.atan2(dy, dx) * (180 / Math.PI);
        }
        
        // Spawn smoke puff logic remains but we use it sparingly to avoid lag
        if (prev && !target.tunnel && i % 2 === 0) {
            const newPuff = {
                id: Date.now() + Math.random(),
                top: target.top,
                left: target.left,
                size: 8 + Math.random() * 12
            };
            setPuffs(p => [...p.slice(-10), newPuff]);
            setTimeout(() => setPuffs(p => p.filter(x => x.id !== newPuff.id)), 800);
        }

        setVanPos({ 
            top: target.top, 
            left: target.left, 
            rotate: rotation,
            isTunnel: target.tunnel || false,
            stepTime: stepDuration
        });
        await new Promise(r => setTimeout(r, stepDuration));
    }
    setIsMoving(false);
  };

  const handleNodeClick = async (nodeId, isMain = false) => {
    if (isMoving) return;
    const currentData = currentMap === 'main' ? AI_ROADMAP_DATA.main : AI_ROADMAP_DATA.sub[currentMap];
    
    if (isMain) {
        const pathSequence = findPathBFS(currentLocationId, nodeId);
        if (!pathSequence) return;
        setIsMoving(true);
        let allWaypoints = [];
        for (let i = 0; i < pathSequence.length - 1; i++) {
            const start = pathSequence[i];
            const end = pathSequence[i+1];
            let segmentWaypoints = AI_ROADMAP_DATA.main.paths[`${start}-${end}`];
            let reverse = false;
            if (!segmentWaypoints) {
                segmentWaypoints = AI_ROADMAP_DATA.main.paths[`${end}-${start}`];
                reverse = true;
            }
            if (segmentWaypoints) {
                const finalWaypoints = reverse ? [...segmentWaypoints].reverse() : segmentWaypoints;
                if (allWaypoints.length > 0) {
                    allWaypoints.push(...finalWaypoints.slice(1));
                } else {
                    allWaypoints.push(...finalWaypoints);
                }
            }
        }
        if (allWaypoints.length > 0) {
            await moveAlongPath(allWaypoints, 800 * (pathSequence.length - 1));
        }
        setCurrentLocationId(nodeId);
        setIsMoving(false);
        setTimeout(() => navigate(`?map=${nodeId}`), 300);
    } else {
        const node = currentData.nodes.find(n => n.id === nodeId);
        if (node) {
            setIsMoving(true);
            setVanPos(prev => ({ ...prev, top: node.top, left: node.left }));
            await new Promise(r => setTimeout(r, 500));
            setIsMoving(false);
            navigate(`/quiz/${currentMap}/${nodeId}`);
        }
    }
  };

  const handleBackToMain = async () => {
      const exitPath = AI_ROADMAP_DATA.sub[currentMap]?.exit;
      if (exitPath) {
          setIsMoving(true);
          await moveAlongPath(exitPath, 1000);
          setIsMoving(false);
      }
      navigate('/roadmap');
  };

  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      setPurchasedItems(await store.getPurchasedItems());
      const savedCompletions = store.getCompletions();
      setCompletedLessons(savedCompletions);
    };
    fetchProgress();
    
    // Polling or re-fetch when returning from quiz
    const interval = setInterval(fetchProgress, 2000);
    return () => clearInterval(interval);
  }, []);

  const mainMapOrder = [
    'perusteet',
    'konepellin',
    'arjessa',
    'etiikka',
    'kayttotaidot',
    'huippu'
  ];

  const getMapAsset = (mapId) => {
    const assets = {
      'main': '/map-bg.jpg',
      'perusteet': '/map-metsa.png',
      'arjessa': '/map-aavikko.png',
      'kayttotaidot': '/map-jaa.png',
      'etiikka': '/map-satama.png',
      'konepellin': '/map-viidakko.png',
      'huippu': '/map-viidakko.png',
      'sea': '/map-linna.png'
    };
    return assets[mapId] || '/map-bg.jpg';
  };

  const renderVan = () => (
    <>
      {/* Smoke Puffs */}
      {puffs.map(puff => (
          <div 
              key={puff.id}
              className="animate-pulse"
              style={{
                  position: 'absolute',
                  top: puff.top,
                  left: puff.left,
                  width: puff.size,
                  height: puff.size,
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(8px)',
                  zIndex: 45,
                  pointerEvents: 'none'
              }}
          />
      ))}

      <div
        style={{
          position: 'absolute',
          top: vanPos.top,
          left: vanPos.left,
          width: '74px',
          height: '52px',
          zIndex: 50,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: isMoving ? `all ${vanPos.stepTime || 400}ms linear` : 'all 0.5s ease-out',
          transform: `translate(-50%, -50%) rotate(${vanPos.rotate}deg)`,
          opacity: vanPos.isTunnel ? 0.3 : 1,
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Base Van */}
            <img 
              src="/carparts/van1-base.png" 
              alt="Van" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
            />
            
            {/* Custom Parts Layers */}
            {purchasedItems.map(itemId => {
              if (itemId.startsWith('van-')) {
                 return (
                   <img 
                      key={itemId} 
                      src={`/carparts/${itemId}.png`} 
                      alt="Part" 
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
                   />
                 );
              }
              return null;
            })}

            <div style={{ position: 'absolute', top: '-1.8rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 900, border: '2px solid var(--secondary-color)', whiteSpace: 'nowrap', color: 'var(--text-main)', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', zIndex: 60 }}>
                AI VAN
            </div>
        </div>
      </div>
    </>
  );

  const renderMapNodes = () => {
    const data = currentMap === 'main' ? AI_ROADMAP_DATA.main : AI_ROADMAP_DATA.sub[currentMap];
    if (!data) return null;
    const nodesToRender = currentMap === 'main' 
        ? data.nodes.filter(n => !n.isJunction) 
        : data.nodes;

    return nodesToRender.map(node => {
      const category = categories.find(c => c.id === currentMap);
      const subcategory = category?.subcategories.find(s => s.id === node.id);
      
      const mainMapLabel = categories.find(c => c.id === node.id)?.name;
      const labelText = currentMap === 'main' 
          ? (mainMapLabel || node.id).toUpperCase()
          : (subcategory ? subcategory.name : node.id).toUpperCase();

      const isLocked = currentMap !== 'main' && !completedLessons.includes(node.id) && 
                      node.id !== `${currentMap}_1` && 
                      !completedLessons.includes(`${currentMap}_${parseInt(node.id.split('_')[1]) - 1}`);
      const isCompleted = completedLessons.includes(node.id);

      // Numeric logic for main map
      const mainNumber = mainMapOrder.indexOf(node.id) + 1;

      return (
        <div 
          key={node.id} 
          style={{ 
              position: 'absolute', 
              top: node.top, 
              left: node.left, 
              transform: 'translate(-50%, -50%)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.66rem'
          }}
        >
          <button
            id={node.id}
            onClick={() => !isLocked && handleNodeClick(node.id, currentMap === 'main')}
            style={{
                width: currentMap === 'main' ? '4.5rem' : '3.6rem',
                height: currentMap === 'main' ? '4.5rem' : '3.6rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid white',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                backgroundColor: isLocked ? '#94a3b8' : isCompleted ? 'var(--accent-color)' : 'var(--primary-color)',
                opacity: isLocked ? 0.8 : 1,
                cursor: isLocked ? 'not-allowed' : 'pointer'
            }}
          >
            {isLocked ? <Lock size={20} color="white" /> : 
             isCompleted && currentMap !== 'main' ? <CheckCircle2 size={32} color="white" /> : 
             <span style={{ color: 'white', fontWeight: 900, fontSize: currentMap === 'main' ? '1.8rem' : '1.5rem', fontFamily: 'var(--font-display)' }}>
                 {currentMap === 'main' ? mainNumber : (node.id.includes('_') ? node.id.split('_')[1] : mainNumber)}
             </span>}
          </button>
          
          <div 
            className="glass-panel" 
            style={{ 
                padding: '0.4rem 1rem', 
                borderRadius: '10px', 
                backgroundColor: 'white', 
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
              <span style={{ fontSize: currentMap === 'main' ? '0.9rem' : '0.8rem', fontWeight: 900, color: 'var(--text-main)', whiteSpace: 'nowrap', fontFamily: 'var(--font-main)' }}>
                  {labelText}
              </span>
          </div>
        </div>
      );
    });
  };

  const renderPaths = () => {
    const data = currentMap === 'main' ? AI_ROADMAP_DATA.main : AI_ROADMAP_DATA.sub[currentMap];
    if (!data || !data.paths) return null;
    return (
      <svg 
        style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none', 
            zIndex: 10 
        }}
      >
        {Object.entries(data.paths).map(([key, waypoints]) => {
          if (!waypoints || waypoints.length < 1) return null;
          let pathString = `M ${waypoints[0].left} ${waypoints[0].top}`;
          waypoints.slice(1).forEach(point => {
            pathString += ` L ${point.left} ${point.top}`;
          });
          return (
            <path
              key={key}
              d={pathString}
              fill="none"
              stroke="#FFF"
              strokeWidth="6"
              strokeDasharray="12,12"
              opacity="0.4"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  };

  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    pointerEvents: 'none'
  };

  const mapContainerStyle = {
    position: 'absolute',
    inset: '100px 30px 40px 30px',
    backgroundColor: '#cbd5e1',
    borderRadius: '30px',
    border: '8px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const mapInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: `url('${getMapAsset(currentMap)}')`,
    backgroundSize: '100% 100%', // Fixed scaling for full visibility
    backgroundPosition: 'center',
    overflow: 'hidden'
  };

  return (
    <div className="animate-fade-in" style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
      {/* Header Controls */}
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', pointerEvents: 'auto' }}>
          <button 
            className="btn-secondary" 
            style={{ 
                padding: '0.8rem 1.5rem', 
                borderRadius: '15px', 
                background: 'white', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}
            onClick={() => currentMap === 'main' ? navigate('/lobby') : handleBackToMain()}
          >
            <ChevronLeft size={28} color="var(--primary-color)" />
            {currentMap !== 'main' && <span style={{ fontWeight: 900, color: 'var(--primary-color)', fontSize: '0.9rem' }}>MAAILMANKARTTA</span>}
            {currentMap === 'main' && <span style={{ fontWeight: 900, color: 'var(--primary-color)', fontSize: '0.9rem' }}>LOBBY</span>}
          </button>
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', lineHeight: 1, color: 'var(--primary-color)', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
              {currentMap === 'main' ? 'AIVAN TIE' : categories.find(c => c.id === currentMap)?.name}
            </h1>
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 900, color: '#334155', letterSpacing: '1px' }}>
              {currentMap === 'main' ? 'PÄÄREITTI' : 'ALUEEN TUTKIMUS'} | {dataVersion}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
          <button 
            onClick={() => navigate('/garage')}
            style={{ 
                backgroundColor: 'white', 
                border: 'none', 
                padding: '0.8rem 1.2rem', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Car size={24} color="var(--primary-color)" />
            <span style={{ fontWeight: 900, fontSize: '0.9rem', color: 'var(--primary-color)', fontFamily: 'var(--font-main)' }}>AUTOTALLI</span>
          </button>

          <div style={{ backgroundColor: 'white', padding: '0.8rem 1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderTop: '5px solid var(--secondary-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Trophy size={24} color="var(--secondary-color)" fill="var(--secondary-color)" />
            <span style={{ fontWeight: 900, fontSize: '1.3rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>{completedLessons.length} / 42</span>
          </div>
          <button style={{ backgroundColor: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Settings size={28} color="var(--text-muted)" />
          </button>
        </div>
      </div>

      {/* Main Map Box */}
      <div style={mapContainerStyle}>
        <div style={mapInnerStyle}>
            {/* Grid Overlay */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            
            {renderPaths()}
            {renderMapNodes()}
            {renderVan()}
        </div>
      </div>

      {/* Back to Main Navigation Shortcut */}
      {currentMap !== 'main' && (
          <div style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 110 }}>
              <button 
                className="btn-primary" 
                style={{ borderRadius: '50px', padding: '1.2rem 3rem', boxShadow: '0 15px 30px rgba(0, 114, 198, 0.4)', fontSize: '1.2rem' }}
                onClick={handleBackToMain}
              >
                <MapIcon size={24} />
                PALAA MAAILMALLE
              </button>
          </div>
      )}
    </div>
  );
};
;

export default Roadmap;
