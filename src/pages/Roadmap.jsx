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
  PlayCircle,
  Type,
  CalendarDays,
  Scale,
  ThumbsUp,
  Brain,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { AI_ROADMAP_DATA } from '../data/roadmapPaths';

import { categories } from '../data/questions';
import { store } from '../services/store';

const Roadmap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMap, setCurrentMap] = useState('main');
  const [dataVersion] = useState(`Versio 1.07`);
  const [versionColor] = useState('var(--danger)'); // Punainen
  const [vanPos, setVanPos] = useState({ top: '50%', left: '50%', direction: 1, isTunnel: false, stepTime: 0 });
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

  // Kartan vaihdon yhteydessä: Saavutaan alakarttaan sisääntuloreittiä (entry) pitkin!
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const completedNodeId = params.get('completed');

    if (currentMap !== 'main' && AI_ROADMAP_DATA.sub[currentMap]) {
        const subData = AI_ROADMAP_DATA.sub[currentMap];
        
        if (completedNodeId) {
            // Tultiin juuri tasolta: aseta paku viimeksi suoritetulle pisteelle
            const completedNode = subData.nodes.find(n => n.id === completedNodeId);
            if (completedNode) {
                setVanPos(prev => ({ 
                    ...prev, 
                    top: completedNode.top, 
                    left: completedNode.left, 
                    stepTime: 0 
                }));

                // Etsi seuraava reitti tästä pisteestä
                const nextPathKey = Object.keys(subData.paths).find(key => key.startsWith(`${completedNodeId}-`));
                if (nextPathKey) {
                    // Siivoa URL, ettei toistu refreshillä
                    window.history.replaceState({}, '', `/roadmap?map=${currentMap}`);
                }
            }
        } else {
            // Normaali saapuminen alakarttaan
            const entryPath = subData.entry;
            if (entryPath && entryPath.length > 0) {
                let initialDirection = 1;
                if (entryPath.length > 1 && parseFloat(entryPath[1].left) < parseFloat(entryPath[0].left)) {
                    initialDirection = -1;
                }
                setVanPos(prev => ({ 
                    ...prev, 
                    top: entryPath[0].top, 
                    left: entryPath[0].left, 
                    direction: initialDirection,
                    stepTime: 0 
                }));
                
                setTimeout(() => {
                    moveAlongPath(entryPath);
                }, 100);
            }
        }
    } else if (currentMap === 'main') {
        const returnedFrom = params.get('returnedFrom');
        const lastNodeId = returnedFrom || currentLocationId;
        const lastNode = AI_ROADMAP_DATA.main.nodes.find(n => n.id === lastNodeId);
        if (lastNode) {
            setVanPos(prev => ({ ...prev, top: lastNode.top, left: lastNode.left, stepTime: 0 }));
            if (returnedFrom) {
                window.history.replaceState({}, '', `/roadmap`);
            }
            if (returnedFrom !== currentLocationId && returnedFrom) {
                setCurrentLocationId(returnedFrom);
            }
        } else {
            setVanPos(prev => ({ ...prev, top: '50%', left: '50%', stepTime: 0 })); // Start point
        }
    }
  }, [currentMap, currentLocationId, location.search]);

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

  const moveAlongPath = async (waypoints) => {
    if (!waypoints || waypoints.length < 2) return;
    setIsMoving(true);
    
    for (let i = 1; i < waypoints.length; i++) {
        const target = waypoints[i];
        const prev = waypoints[i-1];
        
        const dx = parseFloat(target.left) - parseFloat(prev.left);
        const dy = parseFloat(target.top) - parseFloat(prev.top);
        
        let targetDirection = 1;
        if (dx < -0.5) targetDirection = -1;
        else if (dx > 0.5) targetDirection = 1;

        // VAKIONOPEUS: Lasketaan todellinen etäisyys, jolloin vauhti pysyy tasaisena
        const distance = Math.sqrt(dx * dx + dy * dy);
        const stepDuration = Math.max(distance * 35, 150); // 35ms per 1% etäisyys

        // Spawn smoke puff at previous position so it trails the van
        if (!target.tunnel) {
            const newPuff = {
                id: Date.now() + Math.random(),
                top: prev.top,
                left: prev.left,
                size: 20 + Math.random() * 30 // Isompi savu isommalle autolle
            };
            setPuffs(p => [...p.slice(-15), newPuff]);
            setTimeout(() => setPuffs(p => p.filter(x => x.id !== newPuff.id)), 700);
        }

        setVanPos(currentPos => {
            let dir = targetDirection || currentPos?.direction || 1;
            if (Math.abs(dx) < 0.5 && currentPos) dir = currentPos.direction;

            return { 
                top: target.top, 
                left: target.left, 
                direction: dir,
                isTunnel: target.tunnel || false,
                stepTime: stepDuration + 50 // CSS vie hieman pidempään kuin askel -> jatkuva liike!
            };
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
            await moveAlongPath(allWaypoints);
        }
        setCurrentLocationId(nodeId);
        setIsMoving(false);
        setTimeout(() => navigate(`?map=${nodeId}`), 300);
    } else {
        const node = currentData.nodes.find(n => n.id === nodeId);
        if (node) {
            // Etsitään edellinen completed-rasti, jotta tiedetään voidaanko ajaa pitkin viivaa
            const mapNodes = currentData.nodes.map(n => n.id);
            const userDone = mapNodes.filter(id => completedLessons.includes(id));
            const startNode = userDone.length > 0 ? userDone[userDone.length - 1] : mapNodes[0];
            
            if (startNode && startNode !== nodeId) {
                // BFS-polunhaku alakartan risteäviin lompakkoihin (esim. etiikka/satama)
                const subAdjacency = {};
                mapNodes.forEach(id => subAdjacency[id] = []);
                Object.keys(currentData.paths).forEach(pathKey => {
                    const [s, e] = pathKey.split('-');
                    if (subAdjacency[s] && subAdjacency[e]) {
                        subAdjacency[s].push(e);
                        subAdjacency[e].push(s);
                    }
                });

                const queue = [[startNode]];
                const visited = new Set([startNode]);
                let pathSequence = null;

                while (queue.length > 0) {
                    const path = queue.shift();
                    const lastN = path[path.length - 1];
                    if (lastN === nodeId) {
                        pathSequence = path;
                        break;
                    }
                    for (const neighbor of (subAdjacency[lastN] || [])) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push([...path, neighbor]);
                        }
                    }
                }

                if (pathSequence && pathSequence.length > 1) {
                    setIsMoving(true);
                    let allWaypoints = [];
                    for (let i = 0; i < pathSequence.length - 1; i++) {
                        const s = pathSequence[i];
                        const e = pathSequence[i+1];
                        let segmentWaypoints = currentData.paths[`${s}-${e}`];
                        let reverse = false;
                        if (!segmentWaypoints) {
                             segmentWaypoints = currentData.paths[`${e}-${s}`];
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
                         await moveAlongPath(allWaypoints);
                    }
                    setIsMoving(false);
                }
            }
            navigate(`/quiz/${currentMap}/${nodeId}`);
        }
    }
  };

  const handleBackToMain = async () => {
      const exitPath = AI_ROADMAP_DATA.sub[currentMap]?.exit;
      if (exitPath) {
          setIsMoving(true);
          await moveAlongPath(exitPath);
          setIsMoving(false);
      }
      navigate(`/roadmap?returnedFrom=${currentMap}`);
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
      'reilu_peli': '/map-satama.png',
      'konepellin': '/map-viidakko.png',
      'aivoterveys': '/map-viidakko.png',
      'digiturva': '/map-linna.png'
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
          width: '148px',
          height: '104px',
          zIndex: 50,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: isMoving ? `all ${vanPos.stepTime || 400}ms linear` : (vanPos.stepTime === 0 ? 'none' : 'all 0.6s ease-out'),
          transform: `translate(-50%, -50%) scaleX(${vanPos.direction || 1})`,
          opacity: vanPos.isTunnel ? 0.3 : 1,
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Base Van */}
            <img 
              src="/carparts/van1-base.png" 
              alt="Van" 
              className={!isMoving ? "van-idle" : ""}
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
                      className={!isMoving ? "van-idle" : ""}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
                   />
                 );
              }
              return null;
            })}

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

      const nodeIndexParts = node.id.split('_');
      const nodeIndexNum = parseInt(nodeIndexParts[nodeIndexParts.length - 1]);
      const prevNodeId = nodeIndexParts.slice(0, -1).join('_') + '_' + (nodeIndexNum - 1);

      const isLocked = currentMap !== 'main' && !completedLessons.includes(node.id) && 
                      nodeIndexNum !== 1 && 
                      !completedLessons.includes(prevNodeId);
      const isCompleted = completedLessons.includes(node.id);

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
             (() => {
                const iconProps = { color: 'white', strokeWidth: 1.5, style: { width: '65%', height: '65%' } };
                if (currentMap === 'main') {
                    switch(node.id) {
                        case 'perusteet': return <Type {...iconProps} />;
                        case 'konepellin': return <Settings {...iconProps} />;
                        case 'arjessa': return <CalendarDays {...iconProps} />;
                        case 'reilu_peli': return <Scale {...iconProps} />;
                        case 'kayttotaidot': return <ThumbsUp {...iconProps} />;
                        case 'aivoterveys': return <Brain {...iconProps} />;
                        case 'digiturva': return <ShieldCheck {...iconProps} />;
                        default: return <Sparkles {...iconProps} />;
                    }
                } else {
                    return <Sparkles {...iconProps} />;
                }
             })()}
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
    <div className="roadmap-container" style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
      <style>{`
        @keyframes vanIdle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-0.5deg); }
        }
        .van-idle {
          animation: vanIdle 1.5s ease-in-out infinite;
        }
      `}</style>
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
            <h1 style={{ margin: 0, fontSize: '2.5rem', lineHeight: 1, textShadow: '0 2px 4px rgba(255,255,255,0.8)', fontFamily: 'var(--font-main)', fontWeight: 900 }}>
              {currentMap === 'main' ? (
                  <><span style={{ color: 'var(--accent-color)' }}>AI</span> <span style={{ color: 'var(--primary-color)' }}>Van!</span></>
              ) : <span style={{ color: 'var(--primary-color)' }}>{categories.find(c => c.id === currentMap)?.name}</span>}
            </h1>
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '1px' }}>
              {currentMap === 'main' ? 'PÄÄREITTI' : 'ALUEEN TUTKIMUS'} | <span style={{ color: versionColor, fontWeight: '900', background: 'rgba(239, 68, 68, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>{dataVersion}</span>
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
