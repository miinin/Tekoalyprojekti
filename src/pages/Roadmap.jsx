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

  const renderVan = () => (
    <div
      className="absolute transition-all duration-300 ease-linear flex items-center justify-center"
      style={{
        top: vanPos.top,
        left: vanPos.left,
        width: '60px',
        height: '40px',
        zIndex: 50,
        pointerEvents: 'none',
        transform: `rotate(${vanPos.rotate}deg)`,
        opacity: vanPos.isTunnel ? 0.3 : 1,
        filter: vanPos.isTunnel ? 'blur(2px)' : 'none'
      }}
    >
      <div className="relative">
          <Car size={40} className="text-yellow-500 fill-yellow-500" />
          <div className="absolute -top-6 -left-2 bg-white/90 px-2 py-0.5 rounded-full text-[10px] font-bold border border-yellow-500 shadow-sm whitespace-nowrap">
              AI VAN
          </div>
      </div>
    </div>
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
      const labelText = subcategory ? subcategory.name.toUpperCase() : node.id.toUpperCase();
      const isLocked = currentMap !== 'main' && !completedLessons.includes(node.id) && 
                      node.id !== `${currentMap}_1` && 
                      !completedLessons.includes(`${currentMap}_${parseInt(node.id.split('_')[1]) - 1}`);
      const isCompleted = completedLessons.includes(node.id);

      return (
        <div 
          key={node.id} 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          style={{ top: node.top, left: node.left, zIndex: 40 }}
        >
          <button
            id={node.id}
            onClick={() => !isLocked && handleNodeClick(node.id, currentMap === 'main')}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border-4 ${
              isLocked ? 'bg-gray-400 border-gray-500 cursor-not-allowed opacity-60' : 
              isCompleted ? 'bg-green-500 border-green-600 hover:scale-110' : 
              'bg-blue-500 border-blue-600 hover:scale-110 hover:bg-yellow-400 hover:border-yellow-500'
            }`}
          >
            {isLocked ? <Lock size={18} className="text-white" /> : 
             isCompleted ? <CheckCircle2 size={28} className="text-white" /> : 
             <span className="text-white font-black text-lg">
                 {node.id.includes('_') ? node.id.split('_')[1] : ''}
                 {!node.id.includes('_') && <PlayCircle size={28} className="animate-pulse" />}
             </span>}
          </button>
          {currentMap !== 'main' && (
              <div className="bg-white px-3 py-1 rounded-lg shadow-lg border border-gray-200">
                  <span className="text-[10px] font-black text-gray-800 tracking-tight whitespace-nowrap">
                      {labelText}
                  </span>
              </div>
          )}
        </div>
      );
    });
  };

  const renderPaths = () => {
    const data = currentMap === 'main' ? AI_ROADMAP_DATA.main : AI_ROADMAP_DATA.sub[currentMap];
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
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('/assets/maps/${currentMap}-map.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

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
              {currentMap === 'main' ? 'AIvan Tie' : categories.find(c => c.id === currentMap)?.name}
            </h1>
            <p className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase opacity-80">
              {currentMap === 'main' ? 'Pääreitti' : 'Alueen tutkimus'} | {dataVersion}
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
      {currentMap !== 'main' && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-transform animate-bounce">
              <button 
                onClick={handleBackToMain}
                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-black shadow-2xl hover:scale-105 transition-transform"
              >
                <MapIcon size={20} />
                PALAA MAAILMALLE
              </button>
          </div>
      )}
    </div>
  );
};

export default Roadmap;
