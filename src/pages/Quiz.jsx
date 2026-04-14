import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../services/store';
import { CheckCircle2, XCircle, ArrowRight, ChevronLeft, Lightbulb, Scale, List, Compass, Move, ArrowUpDown, Eye, Terminal, Search, Unlock, Brain, Zap, ArrowUp, ArrowDown } from 'lucide-react';

export default function Quiz() {
  const { mainCategory, subCategory } = useParams();
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [sub, setSub] = useState(null);
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSparks, setCurrentSparks] = useState(0);
  const [bossIntroSeen, setBossIntroSeen] = useState(false);

  useEffect(() => {
    const fetchSparks = async () => {
      setCurrentSparks(await store.getSparks());
    };
    fetchSparks();
    const interval = setInterval(fetchSparks, 3000);
    return () => clearInterval(interval);
  }, []);

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

       // Globaalit puskuribuffit (Törmäyksenesto, poistaa 1 väärän monivalinnassa)
       const bumper = equipped['bumper'] || '';
       let bumperProb = 0;
       if (bumper === 'van-bumper01' || bumper === 'van-bumper05') bumperProb = 0.05;
       else if (bumper === 'van-bumper02' || bumper === 'van-bumper04') bumperProb = 0.10;
       else if (bumper === 'van-bumper03' || bumper === 'van-bumper06') bumperProb = 0.15;
       setBumperBuff(bumperProb);

       // Globaalit tunkkibuffit (Levitaatio, säästää T/F menetykseltä)
       const jack = equipped['g_jack'] || '';
       let jackProb = 0;
       if (jack === 'g-jack1') jackProb = 0.05;
       else if (jack === 'g-jack2') jackProb = 0.10;
       else if (jack === 'g-jack3') jackProb = 0.15;
       setJackBuff(jackProb);

       // Globaalit työkalubuffit (Järjestely, näyttää virheet)
       const tools = equipped['g_tools'] || '';
       let toolsLevel = 0;
       if (tools === 'g-walltools1') toolsLevel = 1;
       else if (tools === 'g-walltools2') toolsLevel = 2;
       else if (tools === 'g-walltools3') toolsLevel = 3;
       else if (tools === 'g-walltools4') toolsLevel = 4;
       else if (tools === 'g-walltools5') toolsLevel = 2;
       else if (tools === 'g-walltools6') toolsLevel = 1;
       setToolsBuff(toolsLevel);

       if (s && s.questions) {
         if (s.isLastNode) {
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
    if (currentQuestion.type === 'multiple_choice') {
        let shouldRemove = false;
        let isBumper = false;
        
        if (activeBuff) {
            shouldRemove = true;
        } else if (bumperBuff > 0 && Math.random() < bumperBuff) {
            shouldRemove = true;
            isBumper = true;
        }

        if (shouldRemove) {
            const wrongOptions = currentQuestion.options.filter(o => o !== currentQuestion.correctAnswer);
            if (wrongOptions.length > 0) {
                const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
                setRemovedOptions([randomWrong]);
                if (isBumper) setBumperSaved(true);
            }
        }
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
    if (activeBuff || toolsBuff >= 4) {
       const firstCorrect = currentQuestion.correctAnswer[0];
       const remaining = currentQuestion.options.filter(o => o !== firstCorrect);
       setOrderedItems([firstCorrect, ...remaining.sort(() => Math.random() - 0.5)]);
    } else {
       setOrderedItems([...currentQuestion.options].sort(() => Math.random() - 0.5));
    }
  }
  
  if (currentQuestion.type === 'drag_drop' && Object.keys(dragTargets).length === 0 && !selectedAnswer) {
      const draggables = currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : []);
      if ((activeBuff || toolsBuff >= 4) && draggables.length > 0) {
         const firstItem = draggables[0];
         const expected = currentQuestion.correctAnswer ? currentQuestion.correctAnswer[firstItem] : (currentQuestion.options.find(o => o.item === firstItem)?.target);
         setDragTargets({ [firstItem]: expected });
      }
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
    
    if ((currentQuestion.type === 'ordering' || currentQuestion.type === 'drag_drop') && toolsBuff > 0 && !usedToolChecks && !correct) {
        let wrongItems = [];
        if (currentQuestion.type === 'ordering') {
             answer.forEach((item, idx) => {
                  if (item !== currentQuestion.correctAnswer[idx]) wrongItems.push(item);
             });
        } else if (currentQuestion.type === 'drag_drop') {
             const draggables = currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : []);
             draggables.forEach(item => {
                  const expected = currentQuestion.correctAnswer ? currentQuestion.correctAnswer[item] : (currentQuestion.options.find(o => o.item === item)?.target);
                  if (dragTargets[item] !== expected) wrongItems.push(item);
             });
        }
        
        if (wrongItems.length > 0) {
             setUsedToolChecks(true);
             setHighlightedWrongItems(wrongItems.slice(0, toolsBuff));
             setSelectedAnswer(null);
             return;
        }
    }
    
    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
    }
    
    setResults(prev => [...prev, { id: currentQuestion.id, earned, max, type: currentQuestion.type, correct }]);
    setIsCorrect(correct);
    setShowExplanation(true);
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(false);
      setOrderedItems([]);
      setDragTargets({});
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of quiz handling: calculate dynamic high score delta per question
      let totalNewSparks = 0;
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

      results.forEach(res => {
         store.saveQuestionCorrectness(sub.id, res.id, res.correct);
         const earned = res.earned * sparkRewardMultiplier;
         const diff = store.saveQuestionRecord(res.id, earned);
         totalNewSparks += diff;
      });

      // Update Node Stats (Aggregated across all possible questions)
      const { correct, total } = store.getAggregatedNodeStats(sub.id, sub.questions.length);
      store.saveNodeStats(sub.id, correct, sub.questions.length);
      
      const newMedalLevel = getMedalLevel(correct, total);
      if (newMedalLevel > oldMedalLevel) {
          const medalNames = { 4: 'platinum', 3: 'gold', 2: 'silver', 1: 'bronze' };
          setWowMedal(medalNames[newMedalLevel] || null);
      }

      const totalToBank = totalNewSparks;

      if (totalToBank > 0) {
         await store.addSparks(totalToBank);
      }
      setEarnedSparks(totalNewSparks);
      store.markCompleted(sub.id);
      setShowSummary(true);
    }
  };

  // Drag and Drop helpers
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

  const handleRemoveFromDropZone = (item) => {
    if (showExplanation) return;
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
      'true_false': { text: 'Oikein vai väärin', icon: <Scale size={18} />, color: '#0072C6', bg: '#e0f2fe' },
      'multiple_choice': { text: 'Monivalinta', icon: <List size={18} />, color: '#0072C6', bg: '#e0f2fe' },
      'scenario': { text: 'Miten toimit?', icon: <Compass size={18} />, color: '#d97706', bg: '#fef3c7' },
      'drag_drop': { text: 'Raahaa ja Pudota', icon: <Move size={18} />, color: '#16a34a', bg: '#dcfce7' },
      'ordering': { text: 'Järjestä oikein', icon: <ArrowUpDown size={18} />, color: '#16a34a', bg: '#dcfce7' },
      'spot_the_ai': { text: 'Tunnista Tekoäly', icon: <Eye size={18} />, color: '#7c3aed', bg: '#ede9fe' },
      'reverse_prompt': { text: 'Käänteinen Kehote', icon: <Terminal size={18} />, color: '#db2777', bg: '#fce7f3' },
      'spot_the_lie': { text: 'Hallusinaation Metsästys', icon: <Search size={18} />, color: '#dc2626', bg: '#fee2e2' },
      'jailbreak': { text: 'Jailbreak -hakkerointi', icon: <Unlock size={18} />, color: '#0d9488', bg: '#ccfbf1' }
    };
    return styles[type] || { text: 'Kysymys', icon: <Brain size={18} />, color: '#0072C6', bg: '#e0f2fe' };
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn-secondary" style={{ padding: '0.5rem' }} onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>
            <ChevronLeft size={24} /> 
          </button>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
            {sub.name}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, justifyContent: 'flex-end' }}>
          <div style={{ fontWeight: 'bold', background: '#fef3c7', padding: '0.4rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', border: '2px solid #fde68a' }}>
            <Zap size={20} fill="#d97706" />
            {currentSparks}
          </div>
          <div style={{ width: '150px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'bold', textAlign: 'right', marginBottom: '0.3rem' }}>
              {currentIndex + 1} / {questions.length}
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${((currentIndex + 1) / questions.length) * 100}%`, background: 'linear-gradient(90deg, #ec4899, #38bdf8)', height: '100%', transition: 'width 0.4s ease' }} />
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
                    <button className="btn-primary" style={{ background: '#f59e0b', color: '#1e293b', padding: '1rem 2rem', fontSize: '1.2rem' }} onClick={() => setBossIntroSeen(true)}>Olen valmis, aloita finaali!</button>
                    <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }} onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)}>Palaa pakoon kartalle</button>
                </div>
            </div>
         </div>
      )}

      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        {(() => {
          const styleInfo = getQuestionStyle(currentQuestion.type);
          return (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: styleInfo.bg, color: styleInfo.color, padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'var(--font-main)' }}>
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
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(76, 133, 17, 0.4)' }}>
                 <Lightbulb size={32} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.8rem 0', color: 'var(--text-main)', fontSize: '1.4rem' }}>Mikä on homman juju?</h3>
                <p style={{ margin: 0, lineHeight: '1.7', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
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
              
              let btnStyle = { padding: '1.2rem 1.8rem', textAlign: 'left', background: 'white', border: `3px solid ${borderColor}40`, color: 'var(--text-main)', borderRadius: '30px', cursor: isRemoved ? 'not-allowed' : 'pointer', transition: 'all 0.2s ease-out', fontSize: '1.1rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', fontWeight: '600', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' };
              
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
              {(currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : [])).map((item, idx) => {
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
                    {(currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : [])).filter(item => dragTargets[item] === target).map((item, idx) => {
                      const expected = currentQuestion.correctAnswer ? currentQuestion.correctAnswer[item] : (currentQuestion.options.find(o => o.item === item)?.target);
                      const isItemCorrect = expected === target;
                      return (
                        <div 
                          key={idx} 
                          draggable={!showExplanation}
                          onDragStart={(e) => handleDragStart(e, item)}
                          onClick={() => handleRemoveFromDropZone(item)}
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
            
            {!showExplanation && (currentQuestion.draggables || (currentQuestion.options ? currentQuestion.options.map(o => o.item) : [])).every(item => dragTargets[item]) && (
               <button className="btn-primary" style={{ marginTop: '2rem', width: '100%', padding: '1rem' }} onClick={() => handleAnswerSubmit(dragTargets)}>
                 Tarkista vastaukset
               </button>
            )}
          </div>
        )}
        </div>
      </div>

    </div>
  );
}
