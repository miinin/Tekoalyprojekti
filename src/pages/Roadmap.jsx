import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Map as MapIcon, 
  Settings, 
  Trophy, 
  Star, 
  Info,
  Car,
  Home,
  CheckCircle2,
  Lock,
  PlayCircle
} from 'lucide-react';
import { ROADMAP_PATHS } from '../data/roadmapPaths';
import { categories } from '../data/questions';

const Roadmap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMap, setCurrentMap] = useState('main'); // 'main' or category slug (e.g., 'arjessa')
  const [vanPos, setVanPos] = useState({ top: '35.2%', left: '21.5%', rotate: 0 }); // Initial position: Forest
  const [isMoving, setIsMoving] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentLocationId, setCurrentLocationId] = useState('perusteet'); // Track van's location
  const mapRef = useRef(null);

  // Adjacency for main map routing
  const mainAdjacency = {
    perusteet: ['viidakko', 'junc_forest'],
    viidakko: ['perusteet', 'junc_forest'],
    junc_forest: ['perusteet', 'viidakko', 'etiikka', 'arjessa'],
    etiikka: ['junc_forest', 'sea', 'junc_east'],
    arjessa: ['junc_forest', 'konepellin'],
    konepellin: ['arjessa', 'junc_east'],
    junc_east: ['konepellin', 'etiikka', 'kayttotaidot'],
    sea: ['etiikka', 'kayttotaidot'],
    kayttotaidot: ['junc_east', 'sea']
  };

  // BFS to find the shortest path of segments between two nodes
  const findPathBFS = (start, end) => {
    if (start === end) return [];
    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];

      if (node === end) return path;

      const neighbors = mainAdjacency[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
    return null;
  };

  // Determine current map from URL if applicable
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mapParam = params.get('map');
    if (mapParam && ROADMAP_PATHS.sub[mapParam]) {
      setCurrentMap(mapParam);
      // If entering sub-map, start with entry animation if from node 1
      if (!isMoving) {
          handleEntryAnimation(mapParam);
      }
    } else {
      setCurrentMap('main');
      // On main map, ensure van is at the last known location
      const lastNode = ROADMAP_PATHS.main.nodes.find(n => n.id === currentLocationId);
      if (lastNode && !isMoving) {
          setVanPos(prev => ({ 
              ...prev, 
              top: lastNode.top, 
              left: lastNode.left,
              isTunnel: false
          }));
      }
    }
  }, [location.search, currentLocationId, isMoving]);

  const handleEntryAnimation = async (mapSlug) => {
      const entryPath = ROADMAP_PATHS.sub[mapSlug]?.entry;
      if (!entryPath) return;
      
      setIsMoving(true);
      await moveAlongPath(entryPath, 500);
      setIsMoving(false);
  };

  const moveAlongPath = async (waypoints, totalDuration = 2000) => {
    if (!waypoints || waypoints.length < 2) return;
    
    // Smooth out movement: handle segments correctly
    const stepDuration = totalDuration / (waypoints.length - 1);
    
    for (let i = 0; i < waypoints.length; i++) {
      const target = waypoints[i];
      const prev = waypoints[i-1];
      
      let rotation = 0;
      if (prev) {
          const dx = parseFloat(target.left) - parseFloat(prev.left);
          const dy = parseFloat(target.top) - parseFloat(prev.top);
          rotation = Math.atan2(dy, dx) * (180 / Math.PI);
      }
      
      setVanPos(prevPos => ({ 
          top: target.top, 
          left: target.left, 
          rotate: rotation,
          isTunnel: target.tunnel || false
      }));
      
      await new Promise(r => setTimeout(r, stepDuration));
    }
  };

  const handleNodeClick = async (nodeId, isMain = false) => {
    if (isMoving) return;
    
    if (isMain) {
        if (nodeId === currentLocationId) {
            navigate(`?map=${nodeId}`);
            return;
        }

        const pathSequence = findPathBFS(currentLocationId, nodeId);
        if (!pathSequence) return;

        setIsMoving(true);

        // Collect all waypoints into a single sequence for smooth movement
        let allWaypoints = [];
        for (let i = 0; i < pathSequence.length - 1; i++) {
            const start = pathSequence[i];
            const end = pathSequence[i+1];
            
            let segmentWaypoints = ROADMAP_PATHS.main.paths[`${start}-${end}`];
            let reverse = false;
            
            if (!segmentWaypoints) {
                segmentWaypoints = ROADMAP_PATHS.main.paths[`${end}-${start}`];
                reverse = true;
            }

            if (segmentWaypoints) {
                const finalWaypoints = reverse ? [...segmentWaypoints].reverse() : segmentWaypoints;
                // Avoid duplicating the junction point
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
        // Delay slightly before entering
        setTimeout(() => navigate(`?map=${nodeId}`), 300);
    } else {
        // Sub-map node click (e.g. 'perusteet_1')
        const currentSubMap = ROADMAP_PATHS.sub[currentMap];
        if (!currentSubMap) return;
        
        // Simple direct move for sub-map nodes for now
        const node = currentSubMap.nodes.find(n => n.id === nodeId);
        if (node) {
            setIsMoving(true);
            setVanPos(prev => ({ ...prev, top: node.top, left: node.left }));
            await new Promise(r => setTimeout(r, 500));
            setIsMoving(false);
            navigate(`/quiz/${nodeId}`);
        }
    }
  };

  const handleBackToMain = async () => {
      const exitPath = ROADMAP_PATHS.sub[currentMap]?.exit;
      if (exitPath) {
          setIsMoving(true);
          await moveAlongPath(exitPath, 1000);
          setIsMoving(false);
      }
      navigate('/roadmap');
  };

  const renderVan = () => (
    <motion.div
      style={{
        position: 'absolute',
        top: vanPos.top,
        left: vanPos.left,
        width: '60px',
        height: '40px',
        zIndex: 50,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: vanPos.isTunnel ? 0.3 : 1,
        filter: vanPos.isTunnel ? 'blur(2px)' : 'none'
      }}
      animate={{ 
          top: vanPos.top, 
          left: vanPos.left, 
          rotate: vanPos.rotate 
      }}
      transition={{ 
          type: 'tween', 
          ease: 'linear', 
          duration: isMoving ? 0.3 : 0.8 
      }}
    >
      {/* AI Van Asset Placeholder */}
      <div className="relative">
          <Car size={40} className="text-yellow-500 fill-yellow-500" />
          <div className="absolute -top-6 -left-2 bg-white/90 px-2 py-0.5 rounded-full text-[10px] font-bold border border-yellow-500 shadow-sm whitespace-nowrap">
              AI VAN
          </div>
      </div>
    </motion.div>
  );

  const renderMapNodes = () => {
    const data = currentMap === 'main' ? ROADMAP_PATHS.main : ROADMAP_PATHS.sub[currentMap];
    if (!data) return null;

    // Filter out hidden junctions for main map
    const nodesToRender = currentMap === 'main' 
        ? data.nodes.filter(n => !n.isJunction) 
        : data.nodes;

    return nodesToRender.map(node => {
      const isLocked = currentMap !== 'main' && !completedLessons.includes(node.id) && 
                      node.id !== `${currentMap}_1` && 
                      !completedLessons.includes(`${currentMap}_${parseInt(node.id.split('_')[1]) - 1}`);
      
      const isCompleted = completedLessons.includes(node.id);

      return (
        <button
          key={node.id}
          id={node.id}
          onClick={() => !isLocked && handleNodeClick(node.id, currentMap === 'main')}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
            isLocked ? 'bg-gray-400 cursor-not-allowed opacity-60' : 
            isCompleted ? 'bg-green-500 hover:scale-110' : 'bg-red-500 hover:scale-110 hover:bg-yellow-400'
          }`}
          style={{ top: node.top, left: node.left, zIndex: 40 }}
        >
          {isLocked ? <Lock size={16} className="text-white" /> : 
           isCompleted ? <CheckCircle2 size={24} className="text-white" /> : 
           <PlayCircle size={24} className="text-white animate-pulse" />}
           
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
               {node.id}
           </div>
        </button>
      );
    });
  };

  const renderPaths = () => {
    const data = currentMap === 'main' ? ROADMAP_PATHS.main : ROADMAP_PATHS.sub[currentMap];
    if (!data || !data.paths) return null;

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        {Object.entries(data.paths).map(([key, waypoints]) => {
          let pathString = `M ${waypoints[0].left} ${waypoints[0].top}`;
          waypoints.slice(1).forEach(point => {
            pathString += ` L ${point.left} ${point.top}`;
          });

          return (
            <path
              key={key}
              d={pathString}
              fill="none"
              stroke="#ffffff33"
              strokeWidth="6"
              strokeDasharray="10,10"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden font-sans">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('/assets/maps/${currentMap}-map.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-[100] pointer-events-auto">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => currentMap === 'main' ? navigate('/lobby') : handleBackToMain()}
            className="p-3 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all border border-white/20 shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white drop-shadow-lg">
              {currentMap === 'main' ? 'MAAILMANKARTTA' : currentMap.toUpperCase()}
            </h1>
            <p className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase opacity-80">
              {currentMap === 'main' ? 'Valitse seikkailu' : 'Etene reitillä'}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center gap-2 shadow-lg">
            <Trophy size={18} className="text-white" />
            <span className="font-black text-white">{completedLessons.length} / 42</span>
          </div>
          <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all border border-white/20">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div 
        ref={mapRef}
        className="absolute inset-x-0 bottom-0 top-0 mt-20 mx-4 mb-4 rounded-[40px] border-4 border-white/10 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-inner flex items-center justify-center p-12"
      >
        <div className="relative w-full h-full max-w-6xl max-h-[800px] bg-slate-700/30 rounded-[30px] border border-white/5 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            {/* Entry/Exit Visual Indicators if needed */}
            
            {renderPaths()}
            {renderMapNodes()}
            {renderVan()}
        </div>
      </div>

      {/* Bottom Shortcuts */}
      <AnimatePresence>
          {currentMap !== 'main' && (
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100]"
              >
                  <button 
                    onClick={handleBackToMain}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-black shadow-2xl hover:scale-105 transition-transform"
                  >
                    <MapIcon size={20} />
                    PALAA MAAILMALLE
                  </button>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};

export default Roadmap;
