import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store } from '../services/store';
import { CheckCircle2, XCircle, ArrowRight, ChevronLeft, Lightbulb, Scale, List, Compass, Move, ArrowUpDown, Eye, Terminal, Search, Unlock, Brain, Zap } from 'lucide-react';

export default function Quiz() {
  const { mainCategory, subCategory } = useParams();
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [sub, setSub] = useState(null);
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSparks, setCurrentSparks] = useState(0);

  useEffect(() => {
    const fetchSparks = async () => {
      setCurrentSparks(await store.getSparks());
    };
    fetchSparks();
    const interval = setInterval(fetchSparks, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load dynamic questions from local DB instead of hardcoded file
    const loadedCategories = store.getQuestions();
    setCategories(loadedCategories);
    
    const cat = loadedCategories.find(c => c.id === mainCategory);
    setCategory(cat);
    
    const s = cat ? cat.subcategories?.find(sc => sc.id === subCategory) : null;
    setSub(s);
    
    if (s && s.questions) {
      // Satunnaisesti valitse tasan 5 kysymystä
      const shuffled = [...s.questions].sort(() => Math.random() - 0.5);
      setQuestions(shuffled.slice(0, 5));
    }
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
  
  // Custom initialization when moving to new question
  if (currentQuestion.type === 'ordering' && orderedItems.length === 0 && !selectedAnswer) {
    // Shuffle the options once when loading the ordering question
    setOrderedItems([...currentQuestion.options].sort(() => Math.random() - 0.5));
  }

  const handleAnswerSubmit = (answer) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    
    let correct = false;
    let earned = 0;
    let max = 50;
    
    // Define max sparks per type
    if (currentQuestion.type === 'true_false') max = 25;
    else if (currentQuestion.type === 'multiple_choice') max = 50;
    else if (currentQuestion.type === 'scenario' || currentQuestion.type === 'spot_the_ai' || currentQuestion.type === 'reverse_prompt') max = 75;
    else if (currentQuestion.type === 'ordering' || currentQuestion.type === 'drag_drop') max = 100;

    if (currentQuestion.type === 'drag_drop') {
      const correctTargets = currentQuestion.options.filter(opt => dragTargets[opt.item] === opt.target).length;
      const totalTargets = currentQuestion.options.length;
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
    
    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
    }
    
    setResults(prev => [...prev, { earned, max, type: currentQuestion.type }]);
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
      // End of quiz handling: calculate dynamic high score delta + grind reward
      let totalEarned = results.reduce((acc, curr) => acc + curr.earned, 0);
      const sparkRewardMultiplier = store.getTestMode() ? 10 : 1;
      totalEarned = totalEarned * sparkRewardMultiplier;

      const newSparksEarned = await store.saveNodeRecord(sub.id, totalEarned);
      store.saveNodeStats(sub.id, correctAnswersCount, questions.length);
      
      const totalToBank = newSparksEarned; // Removed grindSparksEarned / reiluuslisä

      if (totalToBank > 0) {
         await store.addSparks(totalToBank);
      }
      setEarnedSparks(newSparksEarned);
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

              <button className="btn-primary" onClick={() => navigate(`/roadmap?map=${mainCategory}&completed=${sub.id}`)} style={{ fontSize: '1.2rem', padding: '1rem 2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Palaa kartalle <ArrowRight size={20} />
              </button>
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
      'true_false': { text: 'Oikein vai Väärin', icon: <Scale size={18} />, color: '#0072C6', bg: '#e0f2fe' },
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ fontWeight: 'bold', color: 'var(--text-main)', background: '#fef3c7', padding: '0.4rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d97706', border: '2px solid #fde68a' }}>
            <Zap size={20} fill="#d97706" />
            {currentSparks}
          </div>
          <div style={{ color: 'var(--text-muted)', fontWeight: 'bold' }}>
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

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
        
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.5', color: 'var(--text-main)' }}>
          {currentQuestion.question}
        </h2>

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
              <div style={{ background: 'var(--primary-color)', padding: '1.2rem', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(0, 114, 198, 0.4)' }}>
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
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              let btnStyle = { padding: '1.2rem 1.5rem', textAlign: 'left', background: 'rgba(255, 255, 255, 0.8)', border: '2px solid transparent', color: 'var(--text-main)', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', fontSize: '1.1rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', fontWeight: '600', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' };
              
              if (currentQuestion.type === 'true_false' && currentQuestion.options.length === 2) {
                 if (idx === 0) {
                    btnStyle.color = '#15803d';
                    if (!isSelected) { btnStyle.border = '2px solid rgba(134, 239, 172, 0.4)'; btnStyle.background = 'linear-gradient(135deg, rgba(240, 253, 244, 0.8) 0%, rgba(220, 252, 231, 0.6) 100%)'; }
                 } else {
                    btnStyle.color = '#b91c1c';
                    if (!isSelected) { btnStyle.border = '2px solid rgba(252, 165, 165, 0.4)'; btnStyle.background = 'linear-gradient(135deg, rgba(254, 242, 242, 0.8) 0%, rgba(254, 226, 226, 0.6) 100%)'; }
                 }
              }

              if (showExplanation) {
                if (option === currentQuestion.correctAnswer) {
                  btnStyle.border = '2px solid var(--accent-color)';
                  btnStyle.background = 'rgba(76, 175, 80, 0.15)';
                  btnStyle.boxShadow = '0 0 20px rgba(76, 175, 80, 0.2)';
                } else if (isSelected) {
                  btnStyle.border = '2px solid #ef4444';
                  btnStyle.background = 'rgba(239, 68, 68, 0.15)';
                } else {
                  btnStyle.opacity = 0.5;
                }
              } else if (isSelected) {
                btnStyle.border = '2px solid var(--primary-color)';
                btnStyle.boxShadow = '0 8px 25px rgba(0, 114, 198, 0.15)';
                btnStyle.transform = 'translateY(-2px)';
                btnStyle.background = 'white';
              }

              return (
                <button 
                  key={idx} 
                  style={btnStyle}
                  onClick={() => !showExplanation && setSelectedAnswer(option)}
                  onMouseEnter={(e) => {
                     if (!showExplanation) {
                         e.currentTarget.style.transform = 'translateY(-3px)';
                         e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,114,198,0.12)';
                         if (!isSelected) e.currentTarget.style.borderColor = 'var(--primary-color)';
                     }
                  }}
                  onMouseLeave={(e) => {
                     if (!showExplanation) {
                         e.currentTarget.style.transform = isSelected ? 'translateY(-2px)' : 'translateY(0)';
                         e.currentTarget.style.boxShadow = isSelected ? '0 8px 25px rgba(0, 114, 198, 0.15)' : '0 4px 15px rgba(0,0,0,0.03)';
                         if (!isSelected) {
                             e.currentTarget.style.borderColor = (currentQuestion.type === 'true_false' && currentQuestion.options.length === 2 && idx === 0) ? 'rgba(134, 239, 172, 0.4)' : 
                                                                (currentQuestion.type === 'true_false' && currentQuestion.options.length === 2 && idx === 1) ? 'rgba(252, 165, 165, 0.4)' : 'transparent';
                         }
                     }
                  }}
                >
                  {option}
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
              <div key={idx} style={{ padding: '1rem', background: showExplanation && isCorrect ? 'rgba(76,175,80,0.1)' : 'white', border: showExplanation && isCorrect ? '2px solid var(--accent-color)' : showExplanation ? '2px solid #ef4444' : '2px solid #e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '30px', height: '30px', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{idx + 1}</span>
                  {item}
                </div>
                {!showExplanation && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem', cursor: idx > 0 ? 'pointer' : 'not-allowed', opacity: idx > 0 ? 1 : 0.3 }} onClick={() => moveItem(idx, 'up')}>↑</button>
                    <button style={{ padding: '0.5rem', cursor: idx < orderedItems.length - 1 ? 'pointer' : 'not-allowed', opacity: idx < orderedItems.length - 1 ? 1 : 0.3 }} onClick={() => moveItem(idx, 'down')}>↓</button>
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
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {currentQuestion.options.map((opt, idx) => {
                if (dragTargets[opt.item]) return null;
                return (
                  <div 
                    key={idx} 
                    draggable={!showExplanation}
                    onDragStart={(e) => handleDragStart(e, opt.item)}
                    style={{ padding: '0.8rem 1rem', background: 'var(--primary-color)', color: 'white', borderRadius: '8px', cursor: showExplanation ? 'default' : 'grab', fontSize: '0.9rem' }}
                  >
                    {opt.item}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['AIvanin kyytiin', 'Jätä tien sivuun'].map(target => (
                <div 
                  key={target}
                  onDrop={(e) => !showExplanation && handleDrop(e, target)}
                  onDragOver={handleDragOver}
                  style={{ flex: '1 1 250px', minHeight: '200px', border: '3px dashed #cbd5e1', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.5)' }}
                >
                  <h3 style={{ textAlign: 'center', margin: 0, color: 'var(--text-main)' }}>{target}</h3>
                  {currentQuestion.options.filter(o => dragTargets[o.item] === target).map((opt, idx) => (
                    <div key={idx} style={{ padding: '0.8rem', background: showExplanation ? (opt.target === target ? 'rgba(76,175,80,0.2)' : 'rgba(239,68,68,0.2)') : '#e2e8f0', border: showExplanation ? (opt.target === target ? '2px solid var(--accent-color)' : '2px solid #ef4444') : '2px solid transparent', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                      {opt.item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {!showExplanation && currentQuestion.options.every(o => dragTargets[o.item]) && (
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
