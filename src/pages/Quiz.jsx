import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../services/store';
import { CheckCircle2, XCircle, ArrowRight, ChevronLeft, Lightbulb, Scale, List, Compass, Move, ArrowUpDown, Eye, Terminal, Search, Unlock, Brain, Zap, ArrowUp, ArrowDown, AlertTriangle, ShieldCheck, Disc, Wrench } from 'lucide-react';

export default function Quiz() {
  const { mainCategory, subCategory } = useParams();
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [sub, setSub] = useState(null);
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSparks, setCurrentSparks] = useState(0);
  
  const [teacherBoosts, setTeacherBoosts] = useState({ red: 0, yellow: 0, green: 0 });
  const [quizCharges, setQuizCharges] = useState({ red: 0, yellow: 0, green: 0 });
  const [usedCharges, setUsedCharges] = useState({ red: 0, yellow: 0, green: 0 });

  const [explanationStartTime, setExplanationStartTime] = useState(null);
  const [bossIntroSeen, setBossIntroSeen] = useState(false);
  
  const [bugReportMode, setBugReportMode] = useState(false);
  const [bugText, setBugText] = useState('');
  const [bugSubmitted, setBugSubmitted] = useState(false);

  useEffect(() => {
    store.setLastLocation('Tehtävä', subCategory);

    const fetchSparks = async () => {
      setCurrentSparks(await store.getSparks());
      setTeacherBoosts(store.getTeacherBoosts());
    };
    fetchSparks();
    const interval = setInterval(fetchSparks, 3000);
    return () => clearInterval(interval);
  }, []);

  const [equippedItems, setEquippedItems] = useState({});
  const [activeBuff, setActiveBuff] = useState(null);
  const [bumperBuff, setBumperBuff] = useState(0);
  const [jackBuff, setJackBuff] = useState(0);
  const [toolsBuff, setToolsBuff] = useState(0);
  const [activePaint, setActivePaint] = useState('');
  const [wowMedal, setWowMedal] = useState(null);
  const [jackSaved, setJackSaved] = useState(false);
  const [bumperSaved, setBumperSaved] = useState(false);

  useEffect(() => {
    const fetchQuestionsAndBuffs = async () => {
       const loadedCategories = store.getQuestions();
       setCategories(loadedCategories);
       
       const cat = loadedCategories.find(c => c.id === mainCategory);
       setCategory(cat);
       
       const s = cat ? cat.subcategories?.find(sc => sc.id === subCategory) : null;
       setSub(s);
       
       // Lataa varusteet Buffeja varten
       const equipped = await store.getEquippedItems();
       setEquippedItems(equipped);
       const extras = equipped['extra'] || '';
       const wheels = equipped['wheel'] || '';
       let buff = null;
       
       if (mainCategory === 'digiturva' && extras === 'van-extra06') buff = 'snorkkeli';
       if (mainCategory === 'aivoterveys' && extras === 'van-extra04') buff = 'vinssi';
       if (mainCategory === 'konepellin' && extras === 'van-extra07') buff = 'eramaa-antenni';
       // Voit mapata lumiketjut myöhemmin mihin tahansa kenttään. Tässä esimerkki:
       if (mainCategory === 'reilu_peli' && wheels === 'van-wheel06') buff = 'talvirenkaat';
       setActiveBuff(buff);
       setActivePaint(equipped['body'] || '');

       // UUDET: Kertakäyttöiset lataukset
       let redCharge = 0;
       if (bumper === 'van-bumper05') redCharge = 2;
       else if (bumper === 'van-bumper02') redCharge = 3;
       else if (bumper === 'van-bumper04') redCharge = 4;
       else if (bumper === 'van-bumper06') redCharge = 5;
       else if (bumper === 'van-bumper03') redCharge = 6;

       let jackChargeProb = 0;
       const jack = equipped['g_jack'] || '';
       if (jack === 'g-jack1') jackChargeProb = 0.05;
       else if (jack === 'g-jack2') jackChargeProb = 0.10;
       else if (jack === 'g-jack3') jackChargeProb = 0.15;
       setJackBuff(jackChargeProb);

       let greenCharge = 0;
       const tools = equipped['g_tools'] || '';
       if (tools === 'g-walltools6') greenCharge = 2;
       else if (tools === 'g-walltools1') greenCharge = 3;
       else if (tools === 'g-walltools5') greenCharge = 4;
       else if (tools === 'g-walltools2') greenCharge = 5;
       else if (tools === 'g-walltools3') greenCharge = 6;
       else if (tools === 'g-walltools4') greenCharge = 7;

       let yellowCharge = 0;
       if (wheels === 'van-wheel04') yellowCharge = 2;
       else if (wheels === 'van-wheel02') yellowCharge = 3;
       else if (wheels === 'van-wheel03') yellowCharge = 4;
       else if (wheels === 'van-wheel05') yellowCharge = 5;

       // Lisäosat (Map-specific)
       if (mainCategory === 'digiturva' && extras === 'van-extra06') redCharge += 3;
       if (mainCategory === 'aivoterveys' && extras === 'van-extra04') greenCharge += 3;
       if (mainCategory === 'konepellin' && extras === 'van-extra07') yellowCharge += 3;
       
       if (mainCategory === 'reilu_peli' && wheels === 'van-wheel06') yellowCharge += 5;
       else if (wheels === 'van-wheel06') yellowCharge += 2;

       setQuizCharges({ red: redCharge, yellow: yellowCharge, green: greenCharge });
       
       const usedMapBoosts = store.getUsedMapBoosts();
       setUsedCharges({ 
           red: usedMapBoosts[`${mainCategory}_red`] || 0, 
           yellow: usedMapBoosts[`${mainCategory}_yellow`] || 0, 
           green: usedMapBoosts[`${mainCategory}_green`] || 0 
       });
       setRemovedOptions([]);

       if (s && s.questions) {
         if (subCategory && subCategory.endsWith('_7')) {
            // Keltainen finaali: kaikki 10 (tai maksimi) kerralla
            const shuffled = [...s.questions].sort(() => Math.random() - 0.5);
            setQuestions(shuffled.slice(0, 10));
         } else {
            const correctness = store.getQuestionCorrectness()[s.id] || {};
            const unasked = [];
            const wrong = [];
            const correct = [];
            
            [...s.questions].forEach(q => {
               if (!correctness.hasOwnProperty(q.id)) unasked.push(q);
               else if (correctness[q.id] === false) wrong.push(q);
               else correct.push(q);
            });
            
            unasked.sort(() => Math.random() - 0.5);
            wrong.sort(() => Math.random() - 0.5);
            correct.sort(() => Math.random() - 0.5);
            
            // Priorisoi: Kysymättömät -> Väärin vastatut -> Oikein vastatut
            const selected = [...unasked, ...wrong, ...correct].slice(0, 5);
            selected.sort(() => Math.random() - 0.5); // Sekoitetaan ettei aina tule helppoja peräkkäin
            setQuestions(selected);
         }
       }
    };
    fetchQuestionsAndBuffs();
  }, [mainCategory, subCategory]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Pedagogical variables
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [earnedSparks, setEarnedSparks] = useState(0);
  const [results, setResults] = useState([]);

  // States for special types
  const [orderedItems, setOrderedItems] = useState([]);
  const [dragTargets, setDragTargets] = useState({}); // { itemName: targetName }
  const [selectedDragItem, setSelectedDragItem] = useState(null);
  
  // Buff states
  const [removedOptions, setRemovedOptions] = useState([]);
  const [usedSecondChance, setUsedSecondChance] = useState(false);
  const [usedToolChecks, setUsedToolChecks] = useState(false);
  const [highlightedWrongItems, setHighlightedWrongItems] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledDraggables, setShuffledDraggables] = useState([]);
  const [hoveredOptionIdx, setHoveredOptionIdx] = useState(null);

  useEffect(() => {
    setRemovedOptions([]);
    setUsedSecondChance(false);
    setBumperSaved(false);
    setJackSaved(false);
    setUsedToolChecks(false);
    setHighlightedWrongItems([]);
    setSelectedDragItem(null);
    setHoveredOptionIdx(null);
    
    if (!questions.length) return;
    
    const currentQuestion = questions[currentIndex];
    
    if (['multiple_choice', 'scenario', 'spot_the_ai', 'reverse_prompt'].includes(currentQuestion.type)) {
        setShuffledOptions([...currentQuestion.options].sort(() => Math.random() - 0.5));
    } else {
        setShuffledOptions(currentQuestion.options ? [...currentQuestion.options] : []);
    }
    
    if (currentQuestion.type === 'drag_drop') {
        const dItems = currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : []);
        setShuffledDraggables([...dItems].sort(() => Math.random() - 0.5));
    } else {
        setShuffledDraggables([]);
    }
  }, [currentIndex, questions, activeBuff, bumperBuff]);

  if (!category || !sub) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Tasoa ei löydy!</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Pahoittelut, tätä tasoa ei voitu ladata.</p>
        <button className="btn-secondary" onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>Palaa kartalle</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1.5rem' }} className="animate-pulse">
            Valmistellaan tietovisaa...
        </div>
        {/* Safety timeout button appears after 3 seconds if still loading */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '400px', marginBottom: '2rem' }}>
            Jos lataus kestää kauan, tasolla ei välttämättä ole vielä kysymyksiä.
        </p>
        <button className="btn-secondary" onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>
            <ChevronLeft size={20} /> Keskeytä ja palaa kartalle
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  
  if (currentQuestion.type === 'ordering' && orderedItems.length === 0 && !selectedAnswer) {
       setOrderedItems([...currentQuestion.options].sort(() => Math.random() - 0.5));
  }
  
  if (currentQuestion.type === 'drag_drop' && Object.keys(dragTargets).length === 0 && !selectedAnswer) {
      // Ei automaattista täyttöä enää
  }

  const handleAnswerSubmit = (answer) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    
    let correct = false;
    let earned = 0;
    let max = 50;
    
    // Uudet peliteorian mukaiset max-arvot
    if (currentQuestion.type === 'true_false') max = 20;
    else if (currentQuestion.type === 'multiple_choice') max = 50;
    else if (currentQuestion.type === 'scenario' || currentQuestion.type === 'spot_the_ai' || currentQuestion.type === 'reverse_prompt') max = 80;
    else if (currentQuestion.type === 'ordering' || currentQuestion.type === 'drag_drop') max = 150;
    
    // Keltainen finaalikategoria (10 kysymystä) antaa tuplat
    if (sub.isLastNode) max = max * 2;

    if (currentQuestion.type === 'drag_drop') {
      const draggables = currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : []);
      const correctTargets = draggables.filter(item => {
          const expected = currentQuestion.correctAnswer ? currentQuestion.correctAnswer[item] : (currentQuestion.options.find(o => o.item === item)?.target);
          return dragTargets[item] === expected;
      }).length;
      const totalTargets = draggables.length;
      earned = Math.floor((correctTargets / totalTargets) * max);
      correct = correctTargets === totalTargets && totalTargets > 0;
    } else if (currentQuestion.type === 'ordering') {
      let correctPositions = 0;
      answer.forEach((item, idx) => {
          if (item === currentQuestion.correctAnswer[idx]) correctPositions++;
      });
      earned = Math.floor((correctPositions / answer.length) * max);
      correct = correctPositions === answer.length && answer.length > 0;
    } else {
      correct = answer === currentQuestion.correctAnswer;
      earned = correct ? max : 0;
    }
    
    if (currentQuestion.type === 'true_false' && !correct && !usedSecondChance) {
        let saved = false;
        let isJack = false;
        if (activeBuff) {
            saved = true;
        } else if (jackBuff > 0 && Math.random() < jackBuff) {
            saved = true;
            isJack = true;
        }

        if (saved) {
            setUsedSecondChance(true);
            setSelectedAnswer(null); // Reset their click
            if (isJack) setJackSaved(true);
            return; 
        }
    }
    
    // Osa vanhasta koodista siivottu pois
    
    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
      // LATAA PUNAISTA MITTARIA
      if (bumperBuff > 0) {
          store.chargeMeter('red', bumperBuff);
          setMeters(store.getMeters());
      }
    }
    
    const sparkRewardMultiplier = store.getTestMode() ? 10 : 1;
    const diff = store.saveQuestionRecord(currentQuestion.id, earned * sparkRewardMultiplier);
    if (diff > 0) {
        store.addSparks(diff).then(() => {});
        setEarnedSparks(prev => prev + diff);
    }
    store.saveQuestionCorrectness(sub.id, currentQuestion.id, correct);
    
    setResults(prev => [...prev, { id: currentQuestion.id, earned, max, type: currentQuestion.type, correct }]);
    setIsCorrect(correct);
    setExplanationStartTime(Date.now());
    setShowExplanation(true);
  };

  const handleNext = async () => {
    
    // VIHREÄN MITTARIN LATAUS: Oliko ruudulla ainakin 3 sekuntia?
    if (explanationStartTime && toolsBuff > 0) {
        const timeSpent = Date.now() - explanationStartTime;
        if (timeSpent >= 3000) {
            store.chargeMeter('green', toolsBuff);
            setMeters(store.getMeters());
        }
    }
    setExplanationStartTime(null);

    if (currentIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(false);
      setOrderedItems([]);
      setDragTargets({});
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of quiz handling: calculate dynamic high score delta per question
      const sparkRewardMultiplier = store.getTestMode() ? 10 : 1;
      
      const oldStat = store.getNodeStats()[sub.id] || { correct: 0, total: sub.questions.length };
      const getMedalLevel = (c, t) => {
         if (t === 0) return 0;
         if (c === t) return 4;
         if (c >= Math.floor(t * 0.9)) return 3;
         if (c >= Math.floor(t * 0.7)) return 2;
         if (c >= 2) return 1;
         return 0;
      };
      const oldMedalLevel = getMedalLevel(oldStat.correct, oldStat.total);

      // Update Node Stats (Aggregated across all possible questions)
      const { correct, total } = store.getAggregatedNodeStats(sub.id, sub.questions.length);
      store.saveNodeStats(sub.id, correct, sub.questions.length);
      
      const newMedalLevel = getMedalLevel(correct, total);
      if (newMedalLevel > oldMedalLevel) {
          const medalNames = { 4: 'platinum', 3: 'gold', 2: 'silver', 1: 'bronze' };
          setWowMedal(medalNames[newMedalLevel] || null);
      }

      // Kipinät on jo tallennettu jokaisen kysymyksen jälkeen (use-tapaus 3)
      store.markCompleted(sub.id);
      setShowSummary(true);
    }
  };

  // Drag and Drop helpers

  const getYellowPower = () => {
       const eq = equippedItems['wheel'] || '';
       if (['van-wheel04', 'van-wheel05', 'van-wheel06'].includes(eq)) return 2;
       return 1;
  };

  const useCharge = (color) => {
      if (usedCharges[color] < quizCharges[color]) {
          store.useMapBoost(mainCategory, color);
          setUsedCharges(prev => ({ ...prev, [color]: prev[color] + 1 }));
          return true;
      }
      if (teacherBoosts[color] > 0) {
          if (store.useTeacherBoost(color)) {
              setTeacherBoosts(store.getTeacherBoosts());
              return true;
          }
      }
      return false;
  };

  const useRedMeter = () => {
      if (useCharge('red')) {
          setSelectedAnswer(null);
          setShowExplanation(false);
          setIsCorrect(false);
          setExplanationStartTime(null);
          setResults(prev => prev.slice(0, -1)); // Remove the fail output
      }
  };

  const useYellowMeter = () => {
      if (currentQuestion.type !== 'multiple_choice') return;
      if (useCharge('yellow')) {
          const wrongOptions = currentQuestion.options.filter(o => o !== currentQuestion.correctAnswer && !removedOptions.includes(o));
          let amount = getYellowPower();
          if (amount > wrongOptions.length) amount = wrongOptions.length;
          
          const shuffledWrongs = [...wrongOptions].sort(() => Math.random() - 0.5);
          setRemovedOptions([...removedOptions, ...shuffledWrongs.slice(0, amount)]);
      }
  };

  const useGreenMeter = () => {
      if (useCharge('green')) {
          // Ohitetaan kysymys ottamalla uusi paketista (sijasta 0 => sija currentIndex)
          const correctness = store.getQuestionCorrectness()[sub.id] || {};
          let unasked = [];
          [...sub.questions].forEach(q => {
               if (!correctness.hasOwnProperty(q.id) && q.id !== currentQuestion.id && !questions.includes(q)) unasked.push(q);
          });
          
          if (unasked.length === 0) {
             alert('Aivan on harventanut kaikki kysymykset! Paina Seuraava ohittaaksesi ilman rangaistusta.');
             setIsCorrect(true);
             setShowExplanation(true);
             return;
          }
          
          // Swap question
          unasked.sort(() => Math.random() - 0.5);
          const newQ = unasked[0];
          setQuestions(prev => {
              let copy = [...prev];
              copy[currentIndex] = newQ;
              return copy;
          });
          
          setSelectedAnswer(null);
          setShowExplanation(false);
          setIsCorrect(false);
          setOrderedItems([]);
          setDragTargets({});
      }
  };

  const renderMeters = () => {
    const ChargeTab = ({ color, icon: Icon, label, disabled, onClick }) => {
        const remaining = quizCharges[color] - usedCharges[color];
        const totalAvailable = (remaining > 0 ? remaining : 0) + (teacherBoosts[color] || 0);
        const isActive = totalAvailable > 0 && !disabled;
        
        const colorMaps = {
            red: { bg: '#ef4444', hover: '#dc2626', text: 'white', shadow: 'rgba(239,68,68,0.4)', disabledBg: '#fee2e2' },
            yellow: { bg: '#eab308', hover: '#ca8a04', text: 'white', shadow: 'rgba(234,179,8,0.4)', disabledBg: '#fef08a' },
            green: { bg: '#22c55e', hover: '#16a34a', text: 'white', shadow: 'rgba(34,197,94,0.4)', disabledBg: '#dcfce7' }
        };
        const c = colorMaps[color];
        
        if (quizCharges[color] === 0 && (teacherBoosts[color] || 0) === 0) return null;

        return (
            <button 
                disabled={!isActive}
                onClick={onClick}
                style={{ 
                    flex: '1 1 0', 
                    minWidth: '0', 
                    height: '54px', 
                    position: 'relative', 
                    border: 'none', 
                    background: isActive ? c.bg : c.disabledBg,
                    cursor: isActive ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.3s',
                    padding: '0 1rem',
                    boxShadow: isActive ? `0 4px 15px ${c.shadow}` : 'none',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    borderTop: 'none',
                    opacity: isActive ? 1 : 0.6
                }}
                onMouseOver={e => { if (isActive) e.currentTarget.style.background = c.hover; }}
                onMouseOut={e => { if (isActive) e.currentTarget.style.background = c.bg; }}
            >
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {isActive && <div className="animate-ping" style={{ position: 'absolute', width: '20px', height: '20px', background: 'white', borderRadius: '50%', opacity: 0.5 }} />}
                    <Icon size={20} color={isActive ? c.text : '#94a3b8'} />
                    <span style={{ fontWeight: 'bold', fontSize: '1rem', color: isActive ? c.text : '#64748b', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
                        {label} {totalAvailable > 0 && `(x${totalAvailable})`}
                    </span>
                </div>
            </button>
        );
    };

    return (
        <div style={{ display: 'flex', width: '100%', gap: '8px', flexWrap: 'nowrap', marginTop: '-2rem', padding: '0 2.5rem', position: 'relative', zIndex: 1 }}>
            <ChargeTab 
               color="red" 
               icon={ShieldCheck} 
               label="UUSINTA"
               disabled={!(showExplanation && !isCorrect)}
               onClick={useRedMeter}
            />
            
            <ChargeTab 
               color="yellow" 
               icon={Disc} 
               label="POISTO"
               disabled={showExplanation || currentQuestion.type !== 'multiple_choice'}
               onClick={useYellowMeter}
            />

            <ChargeTab 
               color="green" 
               icon={Wrench} 
               label="VAIHTO"
               disabled={showExplanation}
               onClick={useGreenMeter}
            />
        </div>
    );
  };

  const handleDragStart = (e, item) => e.dataTransfer.setData('text/plain', item);
  const handleDrop = (e, target) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');
    setDragTargets(prev => ({ ...prev, [item]: target }));
  };
  const handleDragOver = (e) => e.preventDefault();
  
  const handleClickDragItem = (item) => {
    if (showExplanation) return;
    setSelectedDragItem(prev => prev === item ? null : item);
  };
  
  const handleClickDropZone = (target) => {
    if (showExplanation || !selectedDragItem) return;
    setDragTargets(prev => ({ ...prev, [selectedDragItem]: target }));
    setSelectedDragItem(null);
  };

  const handleRemoveFromDropZone = (e, item) => {
    if (showExplanation) return;
    if (selectedDragItem) {
        // Jos käyttäjällä on palikka "kädessä" (valittuna) ja hän klikkaa vahingossa 
        // toista palikkaa laatikossa, hän todennäköisesti yrittää PUDOTTAA palikan laatikkoon.
        // Tällöin emme poista olemassa olevaa palikkaa, vaan annamme klikkauksen valua alaspäin 
        // laatikon DropZonelle, joka hoitaa uuden palikan sijoittamisen kiltisti uutena jäsenenä lootaan!
        return;
    }
    e.stopPropagation();
    setDragTargets(prev => {
      const next = { ...prev };
      delete next[item];
      return next;
    });
  };

  const paintGradients = {
    'van-body01': 'linear-gradient(90deg, #1e3a8a, #3b82f6)',
    'van-body02': 'linear-gradient(90deg, #7f1d1d, #ef4444)',
    'van-body03': 'linear-gradient(90deg, #94a3b8, #e2e8f0)',
    'van-body04': 'linear-gradient(90deg, #f472b6, #34d399, #fcd34d)',
    'van-body05': 'linear-gradient(90deg, #14532d, #4ade80)',
    'van-body06': 'linear-gradient(90deg, #94a3b8, #f59e0b, #d97706)',
    'van-body07': 'linear-gradient(90deg, #b91c1c, #f87171)',
    'van-body08': 'linear-gradient(90deg, #d946ef, #06b6d4, #f43f5e)',
    'van-body09': 'linear-gradient(90deg, #ef4444, #eab308, #22c55e, #3b82f6)',
    'van-body10': 'linear-gradient(90deg, #fce7f3, #f472b6, #ec4899)',
    'van-body11': 'linear-gradient(90deg, #020617, #1e293b, #475569)',
    'van-body12': 'linear-gradient(90deg, #000000, #ef4444)'
  };

  const renderTextWithAivanGradient = (text) => {
    if (!text) return null;
    let isScenario = false;
    let processingText = text;
    if (processingText.startsWith('SKENAARIO: ')) {
        isScenario = true;
        processingText = processingText.replace('SKENAARIO: ', '');
    }
    const parts = processingText.split(/(AI van)/i);
    const usedGradient = paintGradients[activePaint] || 'linear-gradient(90deg, #166534, #4ade80, #38bdf8, #4ade80)';

    const content = parts.map((part, i) => {
      if (part.toLowerCase() === 'ai van') {
        return <span key={i} style={{ background: usedGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', display: 'inline-block', transform: 'scale(1.05)' }}>AI van</span>;
      }
      return part;
    });

    if (isScenario) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: 'var(--primary-color)', color: 'white', padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '900', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    Kuvittele tilanne
                </div>
                <div>{content}</div>
            </div>
        );
    }
    return content;
  };

  if (showSummary) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-main)', marginBottom: '1rem' }}>Taso Suoritettu!</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Oikein meni <b>{correctAnswersCount} / {questions.length}</b></div>
              
              {earnedSparks > 0 && (
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Zap fill="#10b981" /> Uusi kipinäennätys!</div>
                    <div style={{ fontSize: '2rem' }}>+{earnedSparks} kipinää</div>
                </div>
              )}
              
              {earnedSparks === 0 && (
                <div style={{ fontSize: '1.2rem', color: '#f59e0b', marginBottom: '1rem', padding: '1rem', background: '#fef3c7', borderRadius: '12px' }}>
                    {correctAnswersCount === questions.length ? 
                      'Huippusuoritus! Olet kerännyt jo kaikki ennätyskipinät tältä tasolta.' : 
                      'Et rikkonut ennätystäsi tällä kertaa... Vastauksiasi kannattaa pohtia uudelleen!'}
                </div>
              )}
              <div style={{ marginTop: '2rem' }}>
              <button className="btn-primary" onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}${wowMedal ? `&wow_medal=${wowMedal}` : ''}`)} style={{ fontSize: '1.2rem', padding: '1rem 2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Palaa kartalle <ArrowRight size={20} />
              </button>
              </div>
          </div>
        </div>
      );
  }

  // Ordering helpers
  const moveItem = (index, direction) => {
    const newItems = [...orderedItems];
    if (direction === 'up' && index > 0) {
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    } else if (direction === 'down' && index < newItems.length - 1) {
      [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index + 1]];
    }
    setOrderedItems(newItems);
  };

  const getQuestionStyle = (type) => {
    const styles = {
      'true_false': { text: 'Oikein vai väärin', icon: <Scale size={22} />, color: '#0072C6', bg: '#e0f2fe', border: '#bae6fd' },
      'multiple_choice': { text: 'Monivalinta', icon: <List size={22} />, color: '#0072C6', bg: '#e0f2fe', border: '#bae6fd' },
      'scenario': { text: 'Miten toimit?', icon: <Compass size={22} />, color: '#d97706', bg: '#fef3c7', border: '#fde68a' },
      'drag_drop': { text: 'Raahaa ja Pudota', icon: <Move size={22} />, color: '#16a34a', bg: '#dcfce7', border: '#bbf7d0' },
      'ordering': { text: 'Järjestä oikein', icon: <ArrowUpDown size={22} />, color: '#16a34a', bg: '#dcfce7', border: '#bbf7d0' },
      'spot_the_ai': { text: 'Tunnista Tekoäly', icon: <Eye size={22} />, color: '#6d28d9', bg: '#ede9fe', border: '#ddd6fe' },
      'reverse_prompt': { text: 'Käänteinen Kehote', icon: <Terminal size={22} />, color: '#be185d', bg: '#fce7f3', border: '#fbcfe8' },
      'spot_the_lie': { text: 'Hallusinaation Metsästys', icon: <Search size={22} />, color: '#b91c1c', bg: '#fee2e2', border: '#fecaca' },
      'jailbreak': { text: 'Jailbreak -hakkerointi', icon: <Unlock size={22} />, color: '#0f766e', bg: '#ccfbf1', border: '#99f6e4' }
    };
    return styles[type] || { text: 'Kysymys', icon: <Brain size={22} />, color: '#0072C6', bg: '#e0f2fe', border: '#bae6fd' };
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '950px', margin: '0 auto', width: '100%' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-secondary" style={{ padding: '0.5rem' }} onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>
            <ChevronLeft size={24} /> 
          </button>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
            {sub.name.replace(/^[A-ZÖÄÅ]\.\s*/, '')}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'flex-end' }}>
          <div style={{ fontWeight: 'bold', background: '#fef3c7', padding: '0.4rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', border: '2px solid #fde68a' }}>
            <Zap size={20} fill="#d97706" />
            {currentSparks}
          </div>
          <div style={{ flex: 1, maxWidth: '280px', position: 'relative', marginTop: '10px' }}>
            <div style={{ position: 'relative', width: '100%', height: '35px' }}>
               <div style={{ position: 'absolute', top: '22px', left: '10px', right: '10px', height: '6px', background: '#e2e8f0', borderRadius: '3px', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
                  {(() => {
                     const bodyId = equippedItems?.body || 'default';
                     const colors = {
                        'van-body01': '#3b82f6',
                        'van-body02': '#ef4444',
                        'van-body03': '#64748b',
                        'van-body04': '#ec4899',
                        'van-body05': '#4d7c0f',
                        'van-body06': '#d97706',
                        'van-body07': '#dc2626',
                        'van-body08': '#c026d3',
                        'van-body09': '#fbbf24',
                        'van-body10': '#f472b6',
                        'van-body11': '#1e293b',
                        'van-body12': '#ef4444',
                        'default': '#b45309'
                     };
                     const barColor = colors[bodyId] || '#b45309';
                     return (
                       <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: barColor, width: `${(currentIndex / Math.max(1, questions.length - 1)) * 100}%`, transition: 'width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', borderRadius: '3px' }} />
                     );
                  })()}
               </div>
               
               {Array.from({length: questions.length}).map((_, i) => {
                  const bodyId = equippedItems?.body || 'default';
                  const colors = {
                        'van-body01': '#3b82f6', 'van-body02': '#ef4444', 'van-body03': '#64748b',
                        'van-body04': '#ec4899', 'van-body05': '#4d7c0f', 'van-body06': '#d97706',
                        'van-body07': '#dc2626', 'van-body08': '#c026d3', 'van-body09': '#fbbf24',
                        'van-body10': '#f472b6', 'van-body11': '#1e293b', 'van-body12': '#ef4444',
                        'default': '#b45309'
                  };
                  const barColor = colors[bodyId] || '#b45309';
                  return (
                  <div key={i} style={{ 
                     position: 'absolute', 
                     top: '25px', 
                     left: `calc(10px + ${i / Math.max(1, questions.length - 1)} * calc(100% - 20px))`, 
                     width: '14px', height: '14px', borderRadius: '50%', 
                     background: i <= currentIndex ? barColor : '#cbd5e1', 
                     transform: 'translate(-50%, -50%)', border: '3px solid white', 
                     transition: 'background 0.5s ease', zIndex: 5, boxShadow: '0 2px 4px rgba(0,0,0,0.15)' 
                  }} />
               )})}
               
               <div style={{ 
                  position: 'absolute', 
                  top: '-2px', 
                  left: `calc(10px + ${currentIndex / Math.max(1, questions.length - 1)} * calc(100% - 20px))`, 
                  transform: 'translateX(-50%)', 
                  width: '55px', height: '40px', 
                  transition: 'left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)', zIndex: 10 
               }}>
                  <img src="/carparts/van1-base.png" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} alt="van" />
                  {Object.values(equippedItems || {}).map(itemId => {
                     if (itemId && itemId.startsWith('van-')) {
                         return <img key={itemId} src={`/carparts/${itemId}.png`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} alt="part" />;
                     }
                     return null;
                  })}
               </div>
            </div>
          </div>
        </div>
      </div>

      {!bossIntroSeen && sub && sub.id.endsWith('_7') && (
         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-panel animate-bounce" style={{ background: 'rgba(255,255,255,0.98)', border: '5px solid #f59e0b', padding: '3rem', borderRadius: '24px', maxWidth: '600px', width: '90%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', position: 'relative' }}>
                <h1 style={{ color: '#d97706', fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>Suuri Mestarikoitos</h1>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: 'bold' }}>
                    Olet saapunut kategorian finaaliin! Vastaa 10 tiukkaan mestarikysymykseen. Kerää vähintään <span style={{ color: '#10b981', fontSize: '1.4rem' }}>7 oikein</span> voittaaksesi tämän alueen kiiltävän mestaruuspokaalin suoraan autotalliisi!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button className="btn-primary" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff', padding: '1rem 2rem', fontSize: '1.2rem', border: 'none', boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)' }} onClick={() => setBossIntroSeen(true)}>Olen valmis, aloita finaali!</button>
                    <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }} onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>Palaa kartalle harjoittelemaan</button>
                </div>
            </div>
         </div>
      )}

      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', zIndex: 10 }}>
           <button onClick={() => setBugReportMode(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#334155'} onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>
              <AlertTriangle size={16} /> Ilmoita virheestä
           </button>
           <div style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#64748b', background: 'rgba(241, 245, 249, 0.9)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '2px solid #cbd5e1', fontWeight: '900', letterSpacing: '1px' }}>
              {currentQuestion.id}
           </div>
        </div>
        
        {bugReportMode && (
           <div className="animate-fade-in" style={{ marginTop: '2.5rem', marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
             {bugSubmitted ? (
                <p style={{ color: '#166534', fontWeight: 'bold', margin: '1rem 0', textAlign: 'center', fontSize: '1.2rem' }}>Kiitos ilmoituksesta! Olemme vastaanottaneet sen.</p>
             ) : (
                <div>
                  <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.5 }}>
                    Tekoäly kehittyy nopeasti ja tieto voi vanhentua. Olemme myös poikkeuksellisesti vain ihmisiä (ja tekoälyjä!), jotka tekevät virheitä. Jos huomasit epäkohdan tällä tasolla, kerro siitä meille, jotta voimme korjata sen!
                  </p>
                  <textarea 
                    value={bugText}
                    onChange={e => setBugText(e.target.value)}
                    maxLength={500}
                    placeholder="Mikä tässä kysymyksessä on mielestäsi pielessä tai vanhentunut?"
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical', minHeight: '100px', marginBottom: '1rem', fontFamily: 'inherit', fontSize: '1rem', backgroundColor: '#ffffff', color: '#1e293b' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button className="btn-secondary" onClick={() => setBugReportMode(false)} style={{ padding: '0.5rem 1rem' }}>Peruuta</button>
                    <button className="btn-primary" 
                         disabled={!bugText.trim()}
                         style={{ padding: '0.5rem 1.5rem', background: bugText.trim() ? 'var(--primary-color)' : '#cbd5e1', borderColor: bugText.trim() ? 'var(--primary-color)' : '#cbd5e1', color: bugText.trim() ? '#ffffff' : '#f8fafc' }}
                         onClick={() => {
                            store.saveBugReport(currentQuestion.id, bugText);
                            setBugSubmitted(true);
                            setTimeout(() => { setBugReportMode(false); setBugSubmitted(false); setBugText(''); }, 3000);
                         }}>
                       Lähetä ilmoitus
                    </button>
                  </div>
                </div>
             )}
           </div>
        )}
        {(() => {
          const styleInfo = getQuestionStyle(currentQuestion.type);
          return (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', backgroundColor: styleInfo.bg, color: styleInfo.color, padding: '0.6rem 1.4rem', borderRadius: '30px', fontSize: '1.2rem', fontWeight: '800', marginBottom: '2rem', fontFamily: 'var(--font-display)', border: `2px solid ${styleInfo.border}`, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {styleInfo.icon}
              {styleInfo.text}
            </div>
          );
        })()}
        
        <h2 style={{ fontSize: '1.7rem', marginBottom: '2.5rem', lineHeight: '1.6', color: 'var(--text-main)', fontFamily: 'var(--font-main)', fontWeight: '800' }}>
          {renderTextWithAivanGradient(currentQuestion.question)}
        </h2>
        
        {usedToolChecks && highlightedWrongItems.length > 0 && (
           <div style={{ color: '#b91c1c', background: '#fef2f2', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '2px solid #fca5a5' }}>
              <Wrench size={20} fill="#ef4444" color="#b91c1c" /> Autotallin työkalut paljastavat, että {highlightedWrongItems.length} punaisella merkittyä palikkaa on väärässä paikassa!
           </div>
        )}

        {usedSecondChance && (
           <div style={{ color: '#d97706', background: '#fef3c7', padding: '1rem', borderRadius: '12px', marginBottom: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '2px solid #fde68a' }}>
              <Zap size={20} fill="#d97706" /> {jackSaved ? "Tunkki nosti sinut takaisin ylös! Yritä uudelleen." : "AI vanin varuste pelasti sinut väärältä vastaukselta! Yritä uudelleen."}
           </div>
        )}

        {showExplanation && (
          <div className="animate-fade-in" style={{ padding: '2.5rem', background: isCorrect ? '#f0fdf4' : '#fef2f2', border: isCorrect ? '3px solid #22c55e' : '3px solid #ef4444', borderRadius: '24px', marginBottom: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {isCorrect ? <CheckCircle2 size={42} color="#16a34a" /> : <XCircle size={42} color="#dc2626" />}
                <h2 style={{ margin: 0, fontSize: '1.8rem', color: isCorrect ? '#15803d' : '#b91c1c' }}>
                  {isCorrect ? 'Mahtavaa, aivan oikein!' : 'Ei aivan...'}
                </h2>
              </div>
              {isCorrect && (
                <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#fef3c7', color: '#d97706', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <Zap size={24} fill="#d97706" /> +{store.getTestMode() ? 500 : 50} Kipinää
                </div>
              )}
            </div>
            
            <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', padding: '1.5rem 2.5rem', borderRadius: '20px', display: 'flex', gap: '1.8rem', alignItems: 'flex-start', border: '2px solid rgba(0,0,0,0.05)', boxShadow: '0 8px 15px rgba(0,0,0,0.03)' }}>
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(76, 133, 17, 0.4)' }}>
                 <Lightbulb size={36} />
              </div>
              <div>
                <p style={{ margin: 0, lineHeight: '1.8', color: '#1e293b', fontSize: '1.3rem', fontWeight: '600', fontFamily: 'var(--font-main)' }}>
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: '2rem', width: '100%', padding: '1.2rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', borderRadius: '16px' }} onClick={handleNext}>
              {currentIndex < questions.length - 1 ? 'Seuraava Kysymys' : 'Suoritettu! Jatka tästä'}
              <ArrowRight size={24} />
            </button>
          </div>
        )}

        <div style={{ opacity: showExplanation ? 0.3 : 1, filter: showExplanation ? 'grayscale(0.7) blur(1px)' : 'none', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: showExplanation ? 'none' : 'auto' }}>
        {/* Regular Multiple Choice / True-False / Scenario / etc */}
        {!['drag_drop', 'ordering'].includes(currentQuestion.type) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {shuffledOptions.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isRemoved = removedOptions.includes(option);
              const isHovered = hoveredOptionIdx === idx;
              
              let borderColor = '#22c55e'; // default fallback for 'Oikein'
              if (currentQuestion.type === 'true_false' && currentQuestion.options.length === 2) {
                 borderColor = idx === 0 ? '#22c55e' : '#ef4444';
              } else {
                 const colorPalette = [
                   '#3b82f6', // Pure Blue
                   '#ec4899', // Pink (replaced red)
                   '#f59e0b', // Pure Orange/Yellow
                   '#06b6d4', // Cyan (replaced green)
                   '#8b5cf6'  // Pure Purple
                 ];
                 borderColor = colorPalette[idx % colorPalette.length];
              }
              
              let btnStyle = { padding: '1.2rem 1.8rem', textAlign: 'center', background: 'white', border: `3px solid ${borderColor}40`, color: 'var(--text-main)', borderRadius: '30px', cursor: isRemoved ? 'not-allowed' : 'pointer', transition: 'all 0.2s ease-out', fontSize: '1.1rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', fontWeight: '600', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' };
              
              if (isRemoved) {
                 btnStyle.opacity = 0.5;
                 btnStyle.display = 'flex';
                 btnStyle.justifyContent = 'space-between';
                 btnStyle.alignItems = 'center';
              }

              if (showExplanation) {
                if (option === currentQuestion.correctAnswer) {
                  btnStyle.border = '3px solid #22c55e';
                  btnStyle.background = '#22c55e1A';
                  btnStyle.boxShadow = '0 0 20px #22c55e30';
                } else if (isSelected) {
                  btnStyle.border = '3px solid #ef4444';
                  btnStyle.background = '#ef44441A';
                } else {
                  btnStyle.border = `3px solid ${borderColor}20`;
                  btnStyle.opacity = 0.5;
                }
              } else {
                if (isSelected) {
                  btnStyle.background = `${borderColor}1A`;
                  btnStyle.border = `3px solid ${borderColor}`;
                  btnStyle.color = 'var(--text-main)';
                  btnStyle.boxShadow = `0 6px 20px ${borderColor}30`;
                  btnStyle.transform = 'translateY(-2px)';
                } else if (isHovered && !isRemoved) {
                  btnStyle.border = `3px solid ${borderColor}`;
                  btnStyle.transform = 'translateY(-3px)';
                  btnStyle.boxShadow = `0 8px 25px ${borderColor}30`;
                }
              }

              return (
                <button 
                  key={idx} 
                  style={btnStyle}
                  onClick={() => !showExplanation && !isRemoved && setSelectedAnswer(option)}
                  onMouseEnter={() => setHoveredOptionIdx(idx)}
                  onMouseLeave={() => setHoveredOptionIdx(null)}
                >
                  <span style={{ textDecoration: isRemoved ? 'line-through' : 'none' }}>{option}</span>
                  {isRemoved && bumperSaved && <span style={{fontSize:'0.75rem', background:'rgba(255,255,255,0.5)', color:'#0f172a', padding:'0.3rem 0.6rem', borderRadius:'8px', marginLeft:'1rem', fontWeight:'bold', whiteSpace:'nowrap', flexShrink:0}}>Törmäyksenesto suojasi</span>}
                  {isRemoved && !bumperSaved && <span style={{fontSize:'0.75rem', background:'rgba(255,255,255,0.5)', color:'#0f172a', padding:'0.3rem 0.6rem', borderRadius:'8px', marginLeft:'1rem', fontWeight:'bold', whiteSpace:'nowrap', flexShrink:0}}>Varuste poisti</span>}
                </button>
              );
            })}
            
            {!showExplanation && selectedAnswer && (
              <button className="btn-primary" style={{ marginTop: '1rem', padding: '1rem' }} onClick={() => handleAnswerSubmit(selectedAnswer)}>
                <CheckCircle2 size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                Lukitse vastaus
              </button>
            )}
          </div>
        )}

        {/* Ordering Logic */}
        {currentQuestion.type === 'ordering' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {orderedItems.map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem 1.8rem', background: showExplanation && isCorrect ? 'linear-gradient(135deg, rgba(220, 252, 231, 0.6) 0%, rgba(240, 253, 244, 0.9) 100%)' : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', border: showExplanation && isCorrect ? '3px solid rgba(134, 239, 172, 0.4)' : showExplanation ? '3px solid rgba(252, 165, 165, 0.4)' : highlightedWrongItems.includes(item) ? '3px solid rgba(252, 165, 165, 0.8)' : '1px solid rgba(0,0,0,0.05)', borderRadius: '35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', fontSize: '1.2rem', fontFamily: 'var(--font-main)', fontWeight: '700' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '30px', height: '30px', flexShrink: 0, background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{idx + 1}</span>
                  {item}
                </div>
                {!showExplanation && (
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <button style={{ width: '45px', height: '45px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: idx > 0 ? 'pointer' : 'not-allowed', opacity: idx > 0 ? 1 : 0.3, background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '50%', boxShadow: '0 4px 10px rgba(76, 133, 17, 0.3)', transition: 'transform 0.2s' }} onClick={() => moveItem(idx, 'up')}><ArrowUp size={24} /></button>
                    <button style={{ width: '45px', height: '45px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: idx < orderedItems.length - 1 ? 'pointer' : 'not-allowed', opacity: idx < orderedItems.length - 1 ? 1 : 0.3, background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '50%', boxShadow: '0 4px 10px rgba(76, 133, 17, 0.3)', transition: 'transform 0.2s' }} onClick={() => moveItem(idx, 'down')}><ArrowDown size={24} /></button>
                  </div>
                )}
              </div>
            ))}
            {!showExplanation && (
              <button className="btn-primary" style={{ marginTop: '1rem', padding: '1rem' }} onClick={() => handleAnswerSubmit(orderedItems)}>
                Tarkista järjestys
              </button>
            )}
            {showExplanation && !isCorrect && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#ffebee', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#c62828' }}>Oikea järjestys:</h4>
                <ol style={{ margin: 0, paddingLeft: '1.5rem', color: '#c62828' }}>
                  {currentQuestion.correctAnswer.map((ans, i) => <li key={i}>{ans}</li>)}
                </ol>
              </div>
            )}
          </div>
        )}

        {/* Drag and Drop Logic */}
        {currentQuestion.type === 'drag_drop' && (
          <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {shuffledDraggables.map((item, idx) => {
                if (dragTargets[item]) return null;
                const isSelected = selectedDragItem === item;
                return (
                  <div 
                    key={idx} 
                    draggable={!showExplanation}
                    onDragStart={(e) => handleDragStart(e, item)}
                    onClick={() => handleClickDragItem(item)}
                    style={{ padding: '1rem 1.5rem', background: isSelected ? 'var(--secondary-color)' : 'var(--primary-color)', color: 'white', borderRadius: '30px', cursor: showExplanation ? 'default' : 'pointer', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'var(--font-main)', boxShadow: '0 6px 15px rgba(0,0,0,0.15)', transform: isSelected ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.2s', border: isSelected ? '2px solid white' : '2px solid transparent' }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {(currentQuestion.dropZones || ['AIvanin kyytiin', 'Jätä tien sivuun']).map(target => (
                <div 
                  key={target}
                  onDrop={(e) => !showExplanation && handleDrop(e, target)}
                  onDragOver={handleDragOver}
                  onClick={() => handleClickDropZone(target)}
                  style={{ flex: '1 1 250px', minHeight: '220px', border: selectedDragItem ? '3px dashed var(--secondary-color)' : '3px dashed #cbd5e1', borderRadius: '24px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: selectedDragItem ? 'rgba(242, 169, 0, 0.05)' : 'rgba(255,255,255,0.6)', cursor: selectedDragItem && !showExplanation ? 'pointer' : 'default', transition: 'all 0.3s' }}
                >
                  <h3 style={{ textAlign: 'center', margin: 0, color: 'var(--text-main)', fontSize: '1.4rem', fontFamily: 'var(--font-display)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{target}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flexGrow: 1 }}>
                    {shuffledDraggables.filter(item => dragTargets[item] === target).map((item, idx) => {
                      const expected = currentQuestion.correctAnswer ? currentQuestion.correctAnswer[item] : (currentQuestion.options.find(o => o.item === item)?.target);
                      const isItemCorrect = expected === target;
                      return (
                        <div 
                          key={idx} 
                          draggable={!showExplanation}
                          onDragStart={(e) => handleDragStart(e, item)}
                          onClick={(e) => handleRemoveFromDropZone(e, item)}
                          style={{ padding: '1rem', background: showExplanation ? (isItemCorrect ? 'linear-gradient(135deg, rgba(220,252,231,0.8), rgba(240,253,244,0.9))' : 'linear-gradient(135deg, rgba(254,226,226,0.8), rgba(254,242,242,0.9))') : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', border: showExplanation ? (isItemCorrect ? '2px solid rgba(134,239,172,0.6)' : '2px solid rgba(252,165,165,0.6)') : highlightedWrongItems.includes(item) ? '2px solid #ef4444' : '1px solid rgba(0,0,0,0.08)', borderRadius: '25px', fontSize: '1.1rem', textAlign: 'center', fontWeight: 'bold', fontFamily: 'var(--font-main)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', cursor: showExplanation ? 'default' : 'move' }}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {!showExplanation && shuffledDraggables.length > 0 && shuffledDraggables.every(item => dragTargets[item]) && (
               <button className="btn-primary" style={{ marginTop: '2rem', width: '100%', padding: '1rem' }} onClick={() => handleAnswerSubmit(dragTargets)}>
                 Tarkista vastaukset
               </button>
            )}
          </div>
        )}
        </div>
      </div>

      {renderMeters()}
    </div>
  );
}
