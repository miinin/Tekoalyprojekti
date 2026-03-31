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

  // States for special types
  const [orderedItems, setOrderedItems] = useState([]);
  const [dragTargets, setDragTargets] = useState({}); // { itemName: targetName }

  if (!category || !sub) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tasoa ei löydy!</h2>
        <button className="btn-secondary" onClick={() => navigate('/roadmap')}>Palaa kartalle</button>
      </div>
    );
  }

  if (questions.length === 0) return <div style={{ padding: '2rem', textAlign: 'center', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Valmistellaan tietovisaa...</div>;

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
    if (currentQuestion.type === 'drag_drop') {
      // Check if all items are in their specified targets
      const allCorrect = currentQuestion.options.every(opt => dragTargets[opt.item] === opt.target);
      const allPlaced = currentQuestion.options.every(opt => dragTargets[opt.item] !== undefined);
      correct = allCorrect && allPlaced;
    } else if (currentQuestion.type === 'ordering') {
      correct = JSON.stringify(answer) === JSON.stringify(currentQuestion.correctAnswer);
    } else {
      correct = answer === currentQuestion.correctAnswer;
    }
    
    if (correct) {
      store.addSparks(50);
    }
    
    setIsCorrect(correct);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(false);
    setOrderedItems([]);
    setDragTargets({});
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(`/roadmap/${mainCategory}`);
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
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <button className="btn-secondary" style={{ padding: '0.5rem' }} onClick={() => navigate(`/roadmap/${mainCategory}`)}>
          <ChevronLeft size={24} /> 
        </button>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
          {sub.name}
        </span>
        <div style={{ color: 'var(--text-muted)' }}>
          {currentIndex + 1} / {questions.length}
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

        {/* Regular Multiple Choice / True-False / Scenario / etc */}
        {!['drag_drop', 'ordering'].includes(currentQuestion.type) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              let btnStyle = { padding: '1rem', textAlign: 'left', background: 'white', border: '2px solid #e2e8f0', color: 'var(--text-main)', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s', fontSize: '1.05rem', lineHeight: '1.4', fontFamily: 'var(--font-main)', fontWeight: '500' };
              
              if (showExplanation) {
                if (option === currentQuestion.correctAnswer) {
                  btnStyle.border = '2px solid var(--accent-color)';
                  btnStyle.background = 'rgba(76, 175, 80, 0.1)';
                } else if (isSelected) {
                  btnStyle.border = '2px solid #ef4444';
                  btnStyle.background = 'rgba(239, 68, 68, 0.1)';
                } else {
                  btnStyle.opacity = 0.6;
                }
              } else if (isSelected) {
                btnStyle.border = '2px solid var(--primary-color)';
              }

              return (
                <button 
                  key={idx} 
                  style={btnStyle}
                  onClick={() => !showExplanation && setSelectedAnswer(option)}
                  onMouseEnter={(e) => !showExplanation && (e.currentTarget.style.borderColor = 'var(--primary-color)')}
                  onMouseLeave={(e) => !showExplanation && !isSelected && (e.currentTarget.style.borderColor = '#e2e8f0')}
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

      {showExplanation && (
        <div className="animate-fade-in" style={{ padding: '2rem', background: isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: isCorrect ? '2px solid var(--accent-color)' : '2px solid #ef4444', borderRadius: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {isCorrect ? <CheckCircle2 size={32} color="var(--accent-color)" /> : <XCircle size={32} color="#ef4444" />}
              <h2 style={{ margin: 0, color: isCorrect ? 'var(--accent-color)' : '#ef4444' }}>
                {isCorrect ? 'Mahtavaa, aivan oikein!' : 'Ei aivan...'}
              </h2>
            </div>
            {isCorrect && (
              <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fef3c7', color: '#d97706', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>
                <Zap size={20} fill="#d97706" /> +50 Kipinää
              </div>
            )}
          </div>
          
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <Lightbulb size={24} color="var(--primary-color)" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)' }}>Mikä on homman juju?</h3>
              <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--text-main)' }}>
                {currentQuestion.explanation}
              </p>
            </div>
          </div>

          <button className="btn-primary" style={{ marginTop: '2rem', width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }} onClick={handleNext}>
            {currentIndex < questions.length - 1 ? 'Seuraava Kysymys' : 'Suoritettu! Palaa Kartalle'}
            <ArrowRight size={20} />
          </button>
        </div>
      )}

    </div>
  );
}
