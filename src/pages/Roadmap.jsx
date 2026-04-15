import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  Map as MapIcon, 
  Trophy, 
  Car,
  CheckCircle2,
  Lock,
  Zap,
  Medal,
  Info
} from 'lucide-react';
import { AI_ROADMAP_DATA } from '../data/roadmapPaths';
import confetti from 'canvas-confetti';

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
  const [bubbleText, setBubbleText] = useState(null);

  useEffect(() => {
    let timeout;
    if (vanPos.message) {
      setBubbleText(vanPos.message);
    } else if (bubbleText) {
      timeout = setTimeout(() => {
        setBubbleText(null);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [vanPos.message, bubbleText]);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentLocationId, setCurrentLocationId] = useState('start_point');
  const [showMapTutorial, setShowMapTutorial] = useState(
      store.getTutorialCompleted() && !store.getTutorialSkipped() && !store.getMapTutorialCompleted()
  );
  const [closedTuition, setClosedTuition] = useState(() => {
     const saved = localStorage.getItem('closed_tuition');
     return saved ? JSON.parse(saved) : { 0: false, 1: false, 2: false };
  });

  useEffect(() => {
      localStorage.setItem('closed_tuition', JSON.stringify(closedTuition));
  }, [closedTuition]);
  const [puffs, setPuffs] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const mapRef = useRef(null);
  const consumedReturnRef = useRef(false);

  // Edit Mode States
  const [isEditMode, setIsEditMode] = useState(false);
  const [editWaypoints, setEditWaypoints] = useState([]);
  const [showMedalTutorial, setShowMedalTutorial] = useState(false);
  const [showWowMedal, setShowWowMedal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === 'e') {
        setIsEditMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mapParam = params.get('map');
    if (mapParam && AI_ROADMAP_DATA.sub[mapParam]) {
      setCurrentMap(mapParam);
    } else {
      setCurrentMap('main');
    }
  }, [location]);

  const showToast = (msg) => {
      setToastMessage(msg);
      setTimeout(() => setToastMessage(null), 3500);
  };

  // Kartan vaihdon yhteydessä: Saavutaan alakarttaan sisääntuloreittiä (entry) pitkin!
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const completedNodeId = params.get('completed');
    const mapParam = params.get('map');
    const wowMedalParam = params.get('wow_medal');

    // Mitalin juhliminen
    if (wowMedalParam && !consumedReturnRef.current) {
        setShowWowMedal(wowMedalParam);
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            zIndex: 10000
        });
        window.history.replaceState({}, document.title, window.location.pathname + "?map=" + (mapParam || 'main') + (completedNodeId ? "&completed=" + completedNodeId : ""));
    }

    // Jos URL:n mukainen kartta ei täsmää komponentin tilaan, odotetaan että React päivittää tilan.
    const expectedMap = (mapParam && AI_ROADMAP_DATA.sub[mapParam]) ? mapParam : 'main';
    if (currentMap !== expectedMap) return;

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
                setCurrentLocationId(completedNodeId);

                // Etsi seuraava reitti tästä pisteestä
                const nextPathKey = Object.keys(subData.paths).find(key => key.startsWith(`${completedNodeId}-`));
                // Odotetaan käyttäjän klikkausta jos reitti on, jotta vanhanaikainen automagia ei sotke paluuta
            }
        } else {
            // Normaali saapuminen alakarttaan
            const entryPath = subData.entry;
            setCurrentLocationId('start_point');
            if (entryPath && entryPath.length > 0) {
                let initialDirection = 1;
                if (entryPath.length > 1 && parseFloat(entryPath[1].left) < parseFloat(entryPath[0].left)) {
                    initialDirection = -1;
                }
                const shortenedPath = entryPath.slice(0, 2);
                setVanPos(prev => ({ 
                    ...prev, 
                    top: shortenedPath[0].top, 
                    left: shortenedPath[0].left, 
                    direction: initialDirection,
                    stepTime: 0 
                }));
                
                setTimeout(() => {
                    moveAlongPath(shortenedPath);
                }, 100);
            }
        }
    } else if (currentMap === 'main') {
        const urlReturnedFrom = params.get('returnedFrom');
        const validReturn = urlReturnedFrom && !consumedReturnRef.current;
        const lastNodeId = validReturn ? urlReturnedFrom : currentLocationId;
        
        const lastNode = AI_ROADMAP_DATA.main.nodes.find(n => n.id === lastNodeId);
        if (lastNode) {
            setVanPos(prev => ({ ...prev, top: lastNode.top, left: lastNode.left, stepTime: 0 }));
            if (validReturn) {
                if (urlReturnedFrom !== currentLocationId) {
                    setCurrentLocationId(urlReturnedFrom);
                }
                consumedReturnRef.current = true;
            }
        } else {
            const startNode = AI_ROADMAP_DATA.main.nodes.find(n => n.id === 'start_point');
            if (startNode) {
                setVanPos(prev => ({ ...prev, top: startNode.top, left: startNode.left, stepTime: 0 }));
            } else {
                setVanPos(prev => ({ ...prev, top: '50%', left: '50%', stepTime: 0 })); // Start point fallback
            }
        }
    }
  }, [currentMap, location.search]);

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
                stepTime: stepDuration + 50, // CSS vie hieman pidempään kuin askel -> jatkuva liike!
                message: (target.msg && dy > 0) ? target.msg : null
            };
        });
        
        await new Promise(r => setTimeout(r, stepDuration));
    }
    setIsMoving(false);
  };

  const handleNodeClick = async (nodeId, isMain = false) => {
    if (isMoving) return;
    if (isMain) {
        consumedReturnRef.current = false;
    }
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
                const finalWaypoints = reverse ? [...segmentWaypoints].reverse() : [...segmentWaypoints];
                const startNodeObj = AI_ROADMAP_DATA.main.nodes.find(n => n.id === start);
                const endNodeObj = AI_ROADMAP_DATA.main.nodes.find(n => n.id === end);
                
                if (startNodeObj) {
                    finalWaypoints[0] = { ...finalWaypoints[0], top: startNodeObj.top, left: startNodeObj.left };
                }
                if (endNodeObj) {
                    finalWaypoints[finalWaypoints.length - 1] = { ...finalWaypoints[finalWaypoints.length - 1], top: endNodeObj.top, left: endNodeObj.left };
                }

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
            const userDone = completedLessons.filter(id => mapNodes.includes(id));
            const params = new URLSearchParams(window.location.search);
            const completedNodeId = params.get('completed');

            let startNode = currentLocationId;
            let bridgeFromEntry = false;
            
            if (!startNode || startNode === 'start_point' || !mapNodes.includes(startNode)) {
                if (!completedNodeId || !mapNodes.includes(completedNodeId)) {
                    startNode = mapNodes[0];
                    bridgeFromEntry = true;
                } else {
                    startNode = completedNodeId;
                }
            }
            
            let allWaypoints = [];
            
            if (bridgeFromEntry && currentData.entry && currentData.entry.length > 0) {
                const firstNodePos = currentData.nodes.find(n => n.id === mapNodes[0]);
                const entryWaypoints = currentData.entry.slice(1); // Koska auto pysäköitiin entry[1]:een
                
                if (firstNodePos) {
                    allWaypoints.push(...entryWaypoints);
                    allWaypoints.push({ top: firstNodePos.top, left: firstNodePos.left });
                }
            }
            
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
                             const finalWaypoints = reverse ? [...segmentWaypoints].reverse() : [...segmentWaypoints];
                             const startNodeObj = currentData.nodes.find(n => n.id === s);
                             const endNodeObj = currentData.nodes.find(n => n.id === e);

                             if (startNodeObj) {
                                 finalWaypoints[0] = { ...finalWaypoints[0], top: startNodeObj.top, left: startNodeObj.left };
                             }
                             if (endNodeObj) {
                                 finalWaypoints[finalWaypoints.length - 1] = { ...finalWaypoints[finalWaypoints.length - 1], top: endNodeObj.top, left: endNodeObj.left };
                             }

                             if (allWaypoints.length > 0) {
                                 allWaypoints.push(...finalWaypoints.slice(1));
                             } else {
                                 allWaypoints.push(...finalWaypoints);
                             }
                        }
                    }
                }
            }
            
            if (allWaypoints.length > 0) {
                 await moveAlongPath(allWaypoints);
            }
            
            // Varmistetaan aina, että paku on lopulta TÄSMÄLLEEN solmun päällä ja animoitu perille ennen navigointia
            setIsMoving(true);
            setCurrentLocationId(nodeId);
            setVanPos(prev => ({ ...prev, top: node.top, left: node.left, stepTime: 500 }));
            await new Promise(r => setTimeout(r, 550));
            setIsMoving(false);

            navigate(`/quiz/${currentMap}/${nodeId}`);
        }
    }
  };

  const handleBackToMain = () => {
      setIsMoving(false);
      const mainNode = AI_ROADMAP_DATA.main.nodes.find(n => n.id === currentMap);
      if (mainNode) {
          setVanPos(prev => ({ ...prev, top: mainNode.top, left: mainNode.left, stepTime: 0 }));
      } else {
          setVanPos(prev => ({ ...prev, stepTime: 0 }));
      }
      navigate(`/roadmap?returnedFrom=${currentMap}`);
  };

  const [equippedItems, setEquippedItems] = useState({});
  const [sparks, setSparks] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      setEquippedItems(await store.getEquippedItems());
      const savedCompletions = store.getCompletions();
      setCompletedLessons(savedCompletions);
      setSparks(await store.getSparks());
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
      'aivoterveys': '/map-linna.png',
      'digiturva': '/map-meri.png'
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
        key={`van-${currentMap}`}
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
            {bubbleText && currentMap === 'perusteet' && (
               <div style={{ position: 'absolute', top: '-65px', left: '50%', transform: `translateX(-50%) scaleX(${vanPos.direction || 1})`, background: 'white', padding: '10px 18px', borderRadius: '20px', fontWeight: '900', color: 'var(--primary-color)', border: '4px solid var(--primary-color)', zIndex: 100, fontSize: '1.4rem', whiteSpace: 'nowrap', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', letterSpacing: '1px' }}>
                  {bubbleText}
                  <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid var(--primary-color)' }} />
               </div>
            )}
            {/* Base Van */}
            <img 
              src="/carparts/van1-base.png" 
              alt="Van" 
              className={!isMoving ? "van-idle" : ""}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} 
            />
            
            {/* Custom Parts Layers */}
            {Object.values(equippedItems).map(itemId => {
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

  const getSubmapMedal = (nodeId) => {
    const stats = store.getNodeStats();
    const stat = stats[nodeId];
    const getSubcategoryMedal = (stat) => {
        if (!stat || stat.total === 0) return null;
        if (stat.correct === stat.total && stat.total > 0) return 'platinum';
        if (stat.correct >= Math.floor(stat.total * 0.9)) return 'gold';
        if (stat.correct >= Math.floor(stat.total * 0.7)) return 'silver';
        if (stat.correct >= 2) return 'bronze';
        return null;
    };
    return getSubcategoryMedal(stat);
  };

  const getMainmapMedal = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return null;
    const stats = store.getNodeStats();
    let totalCorrect = 0;
    let absoluteTotalQuestions = 0;
    
    cat.subcategories.forEach(sub => {
       const stat = stats[sub.id];
       if (stat) totalCorrect += stat.correct;
       absoluteTotalQuestions += sub.questions ? sub.questions.length : (stat ? stat.total : 0);
    });

    if (absoluteTotalQuestions === 0) return null;
    if (absoluteTotalQuestions > 0 && totalCorrect === absoluteTotalQuestions) return 'platinum';
    if (totalCorrect >= Math.floor(absoluteTotalQuestions * 0.9)) return 'gold';
    if (totalCorrect >= Math.floor(absoluteTotalQuestions * 0.7)) return 'silver';
    if (totalCorrect >= 12) return 'bronze';
    return null;
  };

  const getMedalStyles = (medal) => {
    switch(medal) {
      case 'platinum': return { border: '#e2e8f0', shadow: 'rgba(226, 232, 240, 1)', bg: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #f1f5f9 50%, #cbd5e1 80%, #f8fafc 100%)' };
      case 'gold': return { border: '#fbbf24', shadow: 'rgba(251, 191, 36, 1)', bg: 'linear-gradient(135deg, #fef08a 0%, #fbbf24 22%, #ffffff 38%, #f59e0b 58%, #b45309 80%, #fef08a 100%)' };
      case 'silver': return { border: '#e2e8f0', shadow: 'rgba(203, 213, 225, 0.8)', bg: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #94a3b8 50%, #475569 80%, #ffffff 100%)' };
      case 'bronze': return { border: '#d97706', shadow: 'rgba(217, 119, 6, 0.8)', bg: 'linear-gradient(135deg, #fcd34d 0%, #b45309 30%, #78350f 50%, #451a03 80%, #fcd34d 100%)' };
      default: return null;
    }
  };

  const renderMapNodes = () => {
    const data = currentMap === 'main' ? AI_ROADMAP_DATA.main : AI_ROADMAP_DATA.sub[currentMap];
    if (!data) return null;
    const nodesToRender = data.nodes.filter(n => !n.isJunction);

    return nodesToRender.map(node => {
      const category = categories.find(c => c.id === currentMap);
      const subcategory = category?.subcategories.find(s => s.id === node.id);
      
      const mainMapLabel = categories.find(c => c.id === node.id)?.name;
      const labelText = currentMap === 'main' 
          ? (mainMapLabel || node.id)
          : (subcategory ? subcategory.name : node.id);

      const nodeIndexParts = node.id.split('_');
      const nodeIndexNum = parseInt(nodeIndexParts[nodeIndexParts.length - 1]);

      let isLastNode = false;
      let isLocked = false;
      if (currentMap !== 'main') {
          const realNodes = data.nodes.filter(n => !n.isJunction);
          isLastNode = node.id === realNodes[realNodes.length - 1].id;
      }

      if (currentMap !== 'main' && !completedLessons.includes(node.id)) {
          if (isLastNode) {
              // Avataan vain jos kaikki muut solmut tässä alakartassa on suoritettu
              const otherNodes = data.nodes.filter(n => n.id !== node.id && !n.isJunction);
              const allOthersDone = otherNodes.every(n => completedLessons.includes(n.id));
              isLocked = !allOthersDone;
          } else {
              isLocked = false; // Muut vapaasti auki
          }
      }
      const isCompleted = completedLessons.includes(node.id);
      const medal = currentMap === 'main' ? getMainmapMedal(node.id) : getSubmapMedal(node.id);
      const mStyles = getMedalStyles(medal);

      const isFirstEverTarget = !store.getTutorialSkipped() && currentMap === 'main' && node.id === 'perusteet' && completedLessons.length === 0;
      const isFirstSubTarget = !store.getTutorialSkipped() && currentMap === 'perusteet' && node.id === 'perusteet_1' && completedLessons.length === 0;
      const isSecondSubTarget = !store.getTutorialSkipped() && currentMap === 'perusteet' && node.id === 'perusteet_2' && completedLessons.length === 1 && closedTuition[1];

      const labelPos = node.labelPos || 'bottom';
      let labelStyle = { top: '100%', left: '50%', transform: 'translate(-50%, 0.66rem)' };
      if (labelPos === 'top') { labelStyle = { bottom: '100%', left: '50%', transform: 'translate(-50%, -0.66rem)' }; }
      else if (labelPos === 'left') { labelStyle = { top: '50%', right: '100%', transform: 'translate(-0.66rem, -50%)' }; }
      else if (labelPos === 'right') { labelStyle = { top: '50%', left: '100%', transform: 'translate(0.66rem, -50%)' }; }

      return (
        <div 
          key={node.id} 
          style={{ 
              position: 'absolute', 
              top: node.top, 
              left: node.left, 
              transform: 'translate(-50%, -50%)',
              zIndex: 40
          }}
        >
          <button
            id={node.id}
            onClick={() => {
                if (isLocked) {
                    if (isLastNode) {
                        showToast("Aja ensin aiemmat etapit läpi, jotta AI-pakusi on viritetty kuntoon tätä erikoiskoetta varten!");
                    } else {
                        showToast("Tämä etappi aukeaa myöhemmin! Suorita ensin aiemmat pysäkit.");
                    }
                } else {
                    handleNodeClick(node.id, currentMap === 'main');
                }
            }}
            className={isSecondSubTarget ? "animate-wiggle-strong-alt" : ((isFirstEverTarget || isFirstSubTarget) ? "animate-wiggle-strong" : "")}
            style={{
                width: currentMap === 'main' ? '4.5rem' : '3.6rem',
                height: currentMap === 'main' ? '4.5rem' : '3.6rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: (isFirstEverTarget || isFirstSubTarget || isSecondSubTarget) ? '3px solid white' : (medal ? '0' : '4px solid white'),
                borderColor: medal ? 'transparent' : ((isFirstEverTarget || isFirstSubTarget || isSecondSubTarget) ? 'white' : (isLastNode ? '#fef08a' : 'white')),
                boxShadow: medal ? 'none' : ((isFirstEverTarget || isFirstSubTarget || isSecondSubTarget) ? '0 0 0 5px rgba(255,255,255,0.7)' : (isLastNode && !isLocked ? '0 0 25px rgba(251, 191, 36, 0.6)' : '0 8px 20px rgba(0,0,0,0.2)')),
                background: medal ? 'transparent' : (isLocked ? '#94a3b8' : (isLastNode ? 'var(--secondary-color)' : (isCompleted ? 'var(--accent-color)' : 'var(--primary-color)'))),
                opacity: isLocked ? 0.8 : 1,
                cursor: isLocked ? 'not-allowed' : 'pointer'
            }}
          >
            {isLocked ? <Lock size={20} color="white" /> : 
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {medal ? (
                   <img 
                     src={`/trophy/medal-${medal === 'platinum' ? 'plat' : medal}.png`}
                     alt={medal}
                     style={{ 
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                       width: currentMap === 'main' ? '85px' : '70px', 
                       height: currentMap === 'main' ? '85px' : '70px', 
                       objectFit: 'contain',
                       filter: 'drop-shadow(0 5px 8px rgba(0,0,0,0.5))' 
                     }} 
                   />
               ) : (() => {
                  const fSize = currentMap === 'main' ? '2.5rem' : '1.8rem';
                  const MatIcon = ({ name }) => (
                      <span className="material-symbols-outlined" style={{ fontSize: fSize, color: 'white', fontVariationSettings: "'wght' 300, 'FILL' 0", userSelect: 'none' }}>
                          {name}
                      </span>
                  );
                  const getIconString = (mapId) => {
                      switch(mapId) {
                          case 'perusteet': return 'abc';
                          case 'konepellin': return 'settings';
                          case 'arjessa': return 'calendar_month';
                          case 'reilu_peli': return 'balance';
                          case 'kayttotaidot': return 'thumb_up';
                          case 'aivoterveys': return 'psychology';
                          case 'digiturva': return 'shield';
                          default: return 'stars';
                      }
                  };
                  if (isLastNode) {
                      return <MatIcon name="emoji_events" />; // Pokaali/kulta -ikoni pomolle
                  }
                  const iconName = getIconString(currentMap === 'main' ? node.id : currentMap);
                  return <MatIcon name={iconName} />;
               })()}
             </div>}
          </button>
          
          <div 
            className="glass-panel" 
            style={{ 
                position: 'absolute',
                ...labelStyle,
                padding: '0.4rem 1rem', 
                borderRadius: '10px', 
                backgroundColor: 'white', 
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                pointerEvents: 'none'
            }}
          >
              <div style={{ fontSize: currentMap === 'main' ? '0.9rem' : '0.8rem', fontWeight: 900, color: 'var(--text-main)', whiteSpace: 'nowrap', fontFamily: 'var(--font-main)', textAlign: 'center', lineHeight: '1.2' }}>
                  {labelText.includes('(') ? (
                      <>
                          <div>{labelText.substring(0, labelText.indexOf('(')).trim()}</div>
                          <div style={{ fontSize: '0.9em', color: '#64748b', fontWeight: 400, marginTop: '3px', fontFamily: "'Roboto', sans-serif" }}>
                              {labelText.substring(labelText.indexOf('('))}
                          </div>
                      </>
                  ) : (
                      labelText
                  )}
              </div>
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '30px',
    border: '8px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const mapInnerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: 'calc((100vh - 140px) * 16 / 9)',
    aspectRatio: '16/9',
    backgroundImage: `url('${getMapAsset(currentMap)}')`,
    backgroundSize: '100% 100%', // Fixed scaling for full visibility natively without stretching
    backgroundPosition: 'center',
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(0,0,0,0.1)'
  };

  const handleMapClick = (e) => {
    if (!isEditMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const leftPerc = ((x / rect.width) * 100).toFixed(1);
    const topPerc = ((y / rect.height) * 100).toFixed(1);
    
    setEditWaypoints(prev => [...prev, { top: `${topPerc}%`, left: `${leftPerc}%` }]);
  };

  return (
    <div className="roadmap-container" style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      <style>{`
        @keyframes vanIdle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-0.5deg); }
        }
        .van-idle {
          animation: vanIdle 1.5s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg) scale(1.05); }
          50% { transform: rotate(3deg) scale(1.05); }
        }
        @keyframes wiggle-strong {
          0%, 100% { transform: rotate(-8deg) scale(1.15); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); border-color: rgba(16, 185, 129, 0.5); }
          50% { transform: rotate(8deg) scale(1.15); box-shadow: 0 0 60px rgba(16, 185, 129, 1); border-color: rgba(16, 185, 129, 1); }
        }
        @keyframes wiggle-glow-soft {
          0%, 100% { transform: rotate(-3deg) scale(1.05); box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); }
          50% { transform: rotate(3deg) scale(1.05); box-shadow: 0 0 30px rgba(16, 185, 129, 1); }
        }
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out infinite;
        }
        .animate-wiggle-strong {
          animation: wiggle-strong 0.8s ease-in-out infinite;
        }
        .animate-wiggle-strong-alt {
          animation: wiggle-strong 0.8s ease-in-out infinite 0.4s;
        }
        .animate-wiggle-glow-soft-alt {
          animation: wiggle-glow-soft 0.8s ease-in-out infinite 0.4s;
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
            onClick={() => navigate('/lobby')}
          >
            <ChevronLeft size={28} color="var(--primary-color)" />
            <span style={{ fontWeight: 900, color: 'var(--primary-color)', fontSize: '0.9rem' }}>PÄÄVALIKKO</span>
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {currentMap === 'main' ? (
                  <img src="/logo.png" alt="AIvan Logo" style={{ height: '40px', objectFit: 'contain' }} />
              ) : (
                  <h1 style={{ margin: 0, fontSize: '2rem', lineHeight: '1.2', textTransform: 'uppercase', color: 'var(--primary-color)' }}>
                      {categories.find(c => c.id === currentMap)?.name}
                  </h1>
              )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', pointerEvents: 'auto' }}>
          <button 
            onClick={() => navigate('/garage')}
            className={!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.length === 1 && closedTuition[1] ? "animate-wiggle-glow-soft-alt" : ""}
            style={{ 
                backgroundColor: 'white', 
                border: 'none', 
                padding: '0.8rem 1.2rem', 
                borderRadius: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                boxShadow: !store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.length === 1 && closedTuition[1] ? undefined : '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: !store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.length === 1 && closedTuition[1] ? 'none' : 'transform 0.2s'
            }}
            onMouseOver={(e) => {
                if (!(!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.length === 1 && closedTuition[1])) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                }
            }}
            onMouseOut={(e) => {
                if (!(!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.length === 1 && closedTuition[1])) {
                    e.currentTarget.style.transform = 'scale(1)';
                }
            }}
          >
            <Car size={24} color="var(--primary-color)" />
            <span style={{ fontWeight: 900, fontSize: '0.9rem', color: 'var(--primary-color)', fontFamily: 'var(--font-main)' }}>AUTOTALLI</span>
          </button>

          <div style={{ backgroundColor: '#fef3c7', padding: '0.8rem 1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.8rem', borderTop: '5px solid #fde68a', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Zap size={24} fill="#d97706" color="#d97706" />
            <span style={{ fontWeight: 900, fontSize: '1.3rem', color: '#d97706', fontFamily: 'var(--font-display)' }}>{sparks}</span>
          </div>

          {(() => {
            let counts = { platinum: 0, gold: 0, silver: 0, bronze: 0 };
            Object.keys(AI_ROADMAP_DATA.sub).forEach(mapId => {
              const subData = AI_ROADMAP_DATA.sub[mapId];
              if (subData && subData.nodes) {
                 subData.nodes.forEach(node => {
                    const m = getSubmapMedal(node.id);
                    if (m) counts[m]++;
                 });
              }
            });
            return (
              <div style={{ backgroundColor: 'white', padding: '0.6rem 1.2rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '1.2rem', borderTop: '5px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <img src="/trophy/medal-bronze.png" alt="bronze" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#78350f', fontFamily: 'var(--font-display)' }}>{counts.bronze}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <img src="/trophy/medal-silver.png" alt="silver" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#475569', fontFamily: 'var(--font-display)' }}>{counts.silver}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <img src="/trophy/medal-gold.png" alt="gold" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#d97706', fontFamily: 'var(--font-display)' }}>{counts.gold}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <img src="/trophy/medal-plat.png" alt="platinum" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1e293b', fontFamily: 'var(--font-display)' }}>{counts.platinum}</span>
                </div>
                <button onClick={() => setShowMedalTutorial(true)} style={{ background: 'transparent', color: 'var(--primary-color)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, opacity: 0.8, transition: 'all 0.2s', transform: 'scale(1.1)' }}>
                  <Info size={24} />
                </button>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Map Content */}
      <div style={mapContainerStyle}>
            {/* Metallic Gradients for Trophies */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="35%" stopColor="#eab308" />
                        <stop offset="70%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="40%" stopColor="#cbd5e1" />
                        <stop offset="70%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                    <linearGradient id="bronze-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fde68a" />
                        <stop offset="40%" stopColor="#d97706" />
                        <stop offset="70%" stopColor="#b45309" />
                        <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                </defs>
            </svg>

            {showMapTutorial && (
              <div className="glass-panel" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '24px', border: '5px solid #10b981', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.4)', width: '90%', maxWidth: '550px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#10b981', fontWeight: 'bold', fontSize: '1.8rem' }}>
                    Seikkailu alkaa!
                </div>
                <div style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                    Kartalla liikutaan painamalla vihreitä pallukoita. Seikkailusi ensimmäinen etappi on tekoälyn perusteet!
                </div>
                <button 
                   className="btn-primary" 
                   style={{ width: '100%', background: '#10b981', fontSize: '1.3rem', padding: '1.2rem', marginTop: '0.5rem' }} 
                   onClick={async () => {
                       store.completeMapTutorial();
                       setShowMapTutorial(false);
                       await store.addSparks(10);
                       setSparks(await store.getSparks());
                   }}
                >
                   Selvä homma! (+10⚡)
                </button>
              </div>
            )}
            
            {/* Submap Tutoriaalit */}
            {!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.filter(id => id.startsWith('perusteet')).length === 0 && !closedTuition[0] && (
              <div className="glass-panel" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '24px', border: '5px solid #3b82f6', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.4)', width: '90%', maxWidth: '500px' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                    Valitse ensimmäinen kategoria napsauttamalla vihreää pallukkaa.
                </div>
                <button className="btn-primary" style={{ width: '100%', background: '#3b82f6', fontSize: '1.3rem', padding: '1.2rem', marginTop: '0.5rem' }} onClick={async () => {
                    setClosedTuition(prev => ({...prev, 0: true}));
                    await store.addSparks(10);
                    setSparks(await store.getSparks());
                }}>
                   Ymmärretty! (+10⚡)
                </button>
              </div>
            )}
            
            {!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.filter(id => id.startsWith('perusteet')).length === 1 && !closedTuition[1] && (
              <div className="glass-panel" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '24px', border: '5px solid #10b981', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.4)', width: '90%', maxWidth: '500px' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                    Hienoa! Kun olet ansainnut kipinöitä, pääset takaisin <span style={{ color: 'var(--primary-color)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>autotalliin</span> oikean ylänurkan painikkeesta. Tai voit jatkaa kipinöiden keräämistä seuraavasta kategoriasta!
                </div>
                <button className="btn-primary" style={{ width: '100%', background: '#10b981', fontSize: '1.3rem', padding: '1.2rem', marginTop: '0.5rem' }} onClick={async () => {
                    setClosedTuition(prev => ({...prev, 1: true}));
                    await store.addSparks(10);
                    setSparks(await store.getSparks());
                }}>
                   Selvä homma! (+10⚡)
                </button>
              </div>
            )}
            
            {!store.getTutorialSkipped() && currentMap === 'perusteet' && completedLessons.filter(id => id.startsWith('perusteet')).length === 2 && !closedTuition[2] && (
              <div className="glass-panel" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '24px', border: '5px solid #f59e0b', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.4)', width: '90%', maxWidth: '600px' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                    Kuuden osion suorittamisen jälkeen aukeaa vielä viimeinen, keltareunainen finaaliosio! Sen kysymykset pohjautuvat aiemmin vastaamiesi kysymysten opettavaisiin selityksiin. Lue siis perustelut aina huolella jokaisen kysymyksen jälkeen, sillä viimeisestä kategoriasta voit tienata valtavan määrän kipinöitä!
                </div>
                <button className="btn-primary" style={{ width: '100%', background: '#f59e0b', fontSize: '1.3rem', padding: '1.2rem', marginTop: '0.5rem' }} onClick={async () => {
                    setClosedTuition(prev => ({...prev, 2: true}));
                    await store.addSparks(10);
                    setSparks(await store.getSparks());
                }}>
                   Olen valmis jatkamaan seikkailua itse! (+10⚡)
                </button>
              </div>
            )}

            {showMedalTutorial && (
              <div className="glass-panel animate-bounce" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '24px', border: '5px solid var(--primary-color)', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.4)', width: '90%', maxWidth: '500px' }}>
                <div style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                    <b>Kerää osaamismitaleja!</b><br/><br/>
                    Kun vastaat tason kysymyksiin, sinulle on tarjolla mitaleja sen mukaan, kuinka moneen saat oikean vastauksen. Mitä paremmin osaat, sitä kirkkaamman mitalin ansaitset!<br/><br/>
                    <span style={{ fontSize: '1rem', color: '#0369a1', background: '#e0f2fe', padding: '0.4rem 0.8rem', borderRadius: '8px', display: 'inline-block', marginBottom: '1rem' }}>
                        💡 <b>Vinkki:</b> Kirkkaimpiin mitaleihin sama taso pitää pelata useamman kerran, jotta saat kerättyä aina uusia vaihtuvia kysymyksiä!
                    </span><br/>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                       <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <span style={{ width: '28px', textAlign: 'center', fontWeight: '900', color: '#ef4444' }}>❌</span> 
                         Ei mitalia... yritä uudelleen!
                       </li>
                       <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <img src="/trophy/medal-bronze.png" alt="pronssi" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> 
                         Pronssi: Tiedät alkeet!
                       </li>
                       <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <img src="/trophy/medal-silver.png" alt="hopea" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> 
                         Hopea: Hyvä suoritus!
                       </li>
                       <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <img src="/trophy/medal-gold.png" alt="kulta" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> 
                         Kulta: Huipputietäjä!
                       </li>
                       <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                         <img src="/trophy/medal-plat.png" alt="platina" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> 
                         Platina: Kaikki oikein! Täydellistä!
                       </li>
                    </ul>
                </div>
                <button className="btn-primary" style={{ width: '100%', background: 'var(--primary-color)', fontSize: '1.3rem', padding: '1.2rem', marginTop: '0.5rem' }} onClick={() => setShowMedalTutorial(false)}>Selvä juttu!</button>
              </div>
            )}

            {showWowMedal && (
              <div className="glass-panel animate-bounce" style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.98)', padding: '3rem', borderRadius: '32px', border: '8px solid #fbbf24', zIndex: 10001, display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', boxShadow: '0 30px 100px rgba(0,0,0,0.6)', width: '90%', maxWidth: '600px' }}>
                <h1 style={{ margin: 0, fontSize: '3rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#d97706', textAlign: 'center', textShadow: '0 4px 10px rgba(217, 119, 6, 0.3)' }}>UUSI MITALI!</h1>
                <img src={`/trophy/medal-${showWowMedal === 'platinum' ? 'plat' : showWowMedal}.png`} alt={showWowMedal} style={{ width: '150px', height: '150px', objectFit: 'contain', animation: 'fadeIn 0.5s ease-out' }} />
                
                <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', textAlign: 'center', fontWeight: 'bold', lineHeight: '1.5', background: '#fef3c7', padding: '1rem', borderRadius: '12px' }}>
                  {showWowMedal === 'bronze' && "Tiesitkö, että pelaamalla tason myöhemmin uudelleen voit saavuttaa uusia kysymyksiä ja nousta hopealle, kullalle tai jopa platinalle!"}
                  {showWowMedal === 'silver' && "Hienoa työtä! Pelaamalla uudestaan voit saada uusia kysymyksiä, ja nousta vielä kultaan tai platinaan!"}
                  {showWowMedal === 'gold' && "Upea suoritus! Enää hieman harjoitusta, niin saat kaikkiin vaihtuviinkin kysymyksiin oikean vastauksen ja ansaitset legendaarisen platinamitalin!"}
                  {showWowMedal === 'platinum' && "Täydellistä! Olet nyt vastannut tämän tason KAIKKIIN vaihtuviin kysymyksiin onnistuneesti oikein!"}
                </p>

                <button className="btn-primary" style={{ width: '100%', background: '#f59e0b', fontSize: '1.5rem', padding: '1.5rem' }} onClick={() => setShowWowMedal(null)}>Upeaa, jatka matkaa!</button>
              </div>
            )}
        <div style={mapInnerStyle} onClick={handleMapClick}>
            {/* Grid Overlay */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            
            {renderPaths()}
            {renderMapNodes()}
            {renderVan()}

            {/* Edit Mode Overlay */}
            {isEditMode && (
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 90 }}>
                {editWaypoints.length > 0 && (
                  <path
                    d={`M ${editWaypoints[0].left} ${editWaypoints[0].top} ${editWaypoints.slice(1).map(p => `L ${p.left} ${p.top}`).join(' ')}`}
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                )}
                {editWaypoints.map((p, i) => (
                  <circle key={i} cx={p.left} cy={p.top} r="6" fill="#ef4444" stroke="white" strokeWidth="2" />
                ))}
              </svg>
            )}
        </div>
      </div>

      {/* Edit Mode Panel */}
      {isEditMode && (
          <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.85)', color: 'white', padding: '1.2rem', borderRadius: '12px', zIndex: 1000, width: '400px', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', fontFamily: 'var(--font-main)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h3 style={{ margin: 0, color: '#ef4444', fontWeight: 900 }}>[EDIT MODE]</h3>
               <button style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }} onClick={() => setIsEditMode(false)}>×</button>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>Klikkaa karttaa pientareen mukaan luodaksesi reittipisteitä. Kopioi koodit ja sijoita <code>roadmapPaths.js</code> -tiedostoon alkuperäisen reitin tilalle.</p>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', fontFamily: 'monospace', overflowY: 'auto', maxHeight: '150px', whiteSpace: 'pre-wrap', border: '1px solid #334155' }}>
              {editWaypoints.length > 0 ? JSON.stringify(editWaypoints).replace(/"([^"]+)":/g, '$1:') : 'Klikkaa karttaa ensimmäisen pisteen asettamiseksi...'}
            </div>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigator.clipboard.writeText(JSON.stringify(editWaypoints).replace(/"([^"]+)":/g, '$1:'))}>Kopioi Reittikoodi</button>
              <button style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setEditWaypoints([])}>Tyhjennä</button>
              <button style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', background: '#475569', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => {
                 setEditWaypoints(prev => prev.slice(0, -1)); // Undo painike
              }}>Kumoa</button>
            </div>
          </div>
      )}

      {/* Back to Main Navigation Shortcut */}
      {currentMap !== 'main' && (
          <div style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', zIndex: 110 }}>
              <button 
                className="btn-primary" 
                style={{ borderRadius: '50px', padding: '1.2rem 3rem', boxShadow: '0 15px 30px rgba(76, 133, 17, 0.4)', fontSize: '1.2rem' }}
                onClick={handleBackToMain}
              >
                <MapIcon size={24} />
                PALAA MAAILMALLE
              </button>
          </div>
      )}
      
      {toastMessage && (
        <div style={{
            position: 'fixed',
            top: '12%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.95)',
            border: '4px solid #f59e0b',
            color: 'var(--text-main)',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            padding: '1rem 2rem',
            borderRadius: '20px',
            zIndex: 1100,
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            textAlign: 'center',
            maxWidth: '90%',
            animation: 'fade-in 0.3s ease-out'
        }}>
           <span className="material-symbols-outlined" style={{ color: '#f59e0b', verticalAlign: 'middle', marginRight: '10px' }}>info</span>
           {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
