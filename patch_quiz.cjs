const fs = require('fs');
const file = 'src/pages/Quiz.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add meters state and timer state for Green meter
content = content.replace(
  `  const [sparks, setSparks] = useState(0);`,
  `  const [sparks, setSparks] = useState(0);`
); // Dummy

content = content.replace(/  const \[currentSparks, setCurrentSparks\] = useState\(0\);/g, `  const [currentSparks, setCurrentSparks] = useState(0);
  const [meters, setMeters] = useState({ red: 0, yellow: 0, green: 0 });
  const [explanationStartTime, setExplanationStartTime] = useState(null);`);

// 2. Fetch meters interval
content = content.replace(
  `      setCurrentSparks(await store.getSparks());`,
  `      setCurrentSparks(await store.getSparks());
      setMeters(store.getMeters());`
);

// 3. Remove old buffs and calculate active charge yields
content = content.replace(/       \/\/ Globaalit puskuribuffit[\s\S]*?setToolsBuff\(toolsLevel\);/m, `       // UUDET: Latausnopeudet
       const bumper = equipped['bumper'] || '';
       let redCharge = 0;
       if (bumper === 'van-bumper01' || bumper === 'van-bumper05') redCharge = 10;
       else if (bumper === 'van-bumper02' || bumper === 'van-bumper04') redCharge = 15;
       else if (bumper === 'van-bumper06') redCharge = 20;
       else if (bumper === 'van-bumper03') redCharge = 25;
       setBumperBuff(redCharge);

       const jack = equipped['g_jack'] || '';
       let jackProb = 0;
       if (jack === 'g-jack1') jackProb = 0.05;
       else if (jack === 'g-jack2') jackProb = 0.10;
       else if (jack === 'g-jack3') jackProb = 0.15;
       setJackBuff(jackProb);

       const tools = equipped['g_tools'] || '';
       let greenCharge = 0;
       if (tools === 'g-walltools1' || tools === 'g-walltools6') greenCharge = 15;
       else if (tools === 'g-walltools2' || tools === 'g-walltools5') greenCharge = 25;
       else if (tools === 'g-walltools3') greenCharge = 40;
       else if (tools === 'g-walltools4') greenCharge = 60;
       setToolsBuff(greenCharge);

       const wheels = equipped['wheel'] || '';
       let yellowCharge = 0;
       let yellowPower = 1;
       if (wheels === 'van-wheel01') yellowCharge = 20;
       else if (wheels === 'van-wheel02') yellowCharge = 35;
       else if (wheels === 'van-wheel03') yellowCharge = 50;
       else if (wheels === 'van-wheel04') { yellowCharge = 20; yellowPower = 2; }
       else if (wheels === 'van-wheel05') { yellowCharge = 50; yellowPower = 2; }
       else if (wheels === 'van-wheel06') { yellowCharge = 75; yellowPower = 2; }
       // Tallenna purun voima stateen
       setRemovedOptions([]);`);

// 4. Update the effect to not randomly remove options anymore
content = content.replace(/    if \(currentQuestion\.type === 'multiple_choice'\) {[\s\S]*?    }/m, `    // Enää ei poisteta valintoja automaattisesti! (Keltainen mittari hoitaa sen manuaalisesti)`);

// 5. Update correct answers charging RED meter
// In handleAnswerSubmit
content = content.replace(
  `    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
    }`,
  `    if (correct) {
      setCorrectAnswersCount(prev => prev + 1);
      // LATAA PUNAISTA MITTARIA
      if (bumperBuff > 0) {
          store.chargeMeter('red', bumperBuff);
          setMeters(store.getMeters());
      }
    }`
);

// Green meter charging mechanism on Next button
content = content.replace(
  `    if (currentIndex < questions.length - 1) {`,
  `    
    // VIHREÄN MITTARIN LATAUS: Oliko ruudulla ainakin 3 sekuntia?
    if (explanationStartTime && toolsBuff > 0) {
        const timeSpent = Date.now() - explanationStartTime;
        if (timeSpent >= 3000) {
            store.chargeMeter('green', toolsBuff);
            setMeters(store.getMeters());
        }
    }
    setExplanationStartTime(null);

    if (currentIndex < questions.length - 1) {`
);

// Record explanation start time
content = content.replace(
  `    setShowExplanation(true);
  };`,
  `    setShowExplanation(true);
    setExplanationStartTime(Date.now());
  };`
);

// Yellow meter charging on medal earned 
// In Next -> End of quiz
content = content.replace(
  `      if (newMedalLevel > oldMedalLevel) {
          const medalNames = { 4: 'platinum', 3: 'gold', 2: 'silver', 1: 'bronze' };
          setWowMedal(medalNames[newMedalLevel] || null);
      }`,
  `      if (newMedalLevel > oldMedalLevel) {
          const medalNames = { 4: 'platinum', 3: 'gold', 2: 'silver', 1: 'bronze' };
          setWowMedal(medalNames[newMedalLevel] || null);
          
          // LATAA KELTAISTA MITTARIA!
          // We need wheels charge speed. For simplicity calculate it here or rely on state.
          // Since it's a component state, we can use it. But wait, it's not defined in the scope if we don't have it saved!
          // We can read store directly:
          const eq = store.getEquippedItems ? await store.getEquippedItems() : {};
          const w = eq['wheel'] || '';
          let yC = 0;
          if (w === 'van-wheel01') yC = 20;
          else if (w === 'van-wheel02') yC = 35;
          else if (w === 'van-wheel03') yC = 50;
          else if (w === 'van-wheel04') yC = 20;
          else if (w === 'van-wheel05') yC = 50;
          else if (w === 'van-wheel06') yC = 75;
          if (yC > 0) store.chargeMeter('yellow', yC);
      }`
);

// Old tool logic removal for drag_drop
content = content.replace(/    if \(\(currentQuestion\.type === 'ordering' \|\| currentQuestion\.type === 'drag_drop'\) && toolsBuff > 0[\s\S]*?    }/m, `    // Vanha järjestelybuffi on poistettu`);

// Replace Ordering & Drag targets automatic filling
content = content.replace(/  if \(currentQuestion\.type === 'ordering' && orderedItems\.length === 0 && !selectedAnswer\) {[\s\S]*?  }/m, `  if (currentQuestion.type === 'ordering' && orderedItems.length === 0 && !selectedAnswer) {
       setOrderedItems([...currentQuestion.options].sort(() => Math.random() - 0.5));
  }`);

content = content.replace(/  if \(currentQuestion\.type === 'drag_drop' && Object\.keys\(dragTargets\)\.length === 0 && !selectedAnswer\) {[\s\S]*?  }/m, `  if (currentQuestion.type === 'drag_drop' && Object.keys(dragTargets).length === 0 && !selectedAnswer) {
      // Ei automaattista täyttöä enää
  }`);


// Add logic functions for activating meters
content = content.replace(
  `  const handleDragStart = (e, item) => e.dataTransfer.setData('text/plain', item);`,
  `
  const getYellowPower = () => {
       const eq = equippedItems['wheel'] || '';
       if (['van-wheel04', 'van-wheel05', 'van-wheel06'].includes(eq)) return 2;
       return 1;
  };

  const useRedMeter = () => {
      if (store.useMeter('red')) {
          setMeters(store.getMeters());
          setSelectedAnswer(null);
          setShowExplanation(false);
          setIsCorrect(false);
          setExplanationStartTime(null);
          setResults(prev => prev.slice(0, -1)); // Remove the fail output
      }
  };

  const useYellowMeter = () => {
      if (currentQuestion.type !== 'multiple_choice') return;
      if (store.useMeter('yellow')) {
          setMeters(store.getMeters());
          const wrongOptions = currentQuestion.options.filter(o => o !== currentQuestion.correctAnswer && !removedOptions.includes(o));
          let amount = getYellowPower();
          if (amount > wrongOptions.length) amount = wrongOptions.length;
          
          const shuffledWrongs = [...wrongOptions].sort(() => Math.random() - 0.5);
          setRemovedOptions([...removedOptions, ...shuffledWrongs.slice(0, amount)]);
      }
  };

  const useGreenMeter = () => {
      if (store.useMeter('green')) {
          setMeters(store.getMeters());
          
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
    // Only show if the user has corresponding item equipped
    const b = bumperBuff > 0;
    const w = equippedItems['wheel'] && equippedItems['wheel'] !== 'van-wheel01'; // Wheel01 charges but it's base
    // Actually base wheel DOES charge? Yes it does. We just show yellow if any wheels exist
    const hasWheels = !!equippedItems['wheel'];
    const hasTools = toolsBuff > 0;

    return (
        <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 100 }}>
            {b && (
                <div style={{ position: 'relative', width: '60px', height: '60px', opacity: meters.red >= 100 && showExplanation && !isCorrect ? 1 : 0.6, transition: 'all 0.3s' }}>
                   {meters.red >= 100 && showExplanation && !isCorrect && <div className="animate-ping" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#ef4444', borderRadius: '50%' }} />}
                   <button 
                     disabled={!(meters.red >= 100 && showExplanation && !isCorrect)}
                     onClick={useRedMeter}
                     style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, #f87171, #dc2626)', border: '2px solid #7f1d1d', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', cursor: (meters.red >= 100 && showExplanation && !isCorrect) ? 'pointer' : 'default' }}>
                      <ShieldCheck size={28} color="white" />
                   </button>
                   <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1rem', width: '90px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem', gap: '0.2rem' }}>
                      <div style={{ width: '40px', height: '6px', background: 'rgba(0,0,0,0.5)', borderRadius: '3px', overflow: 'hidden' }}>
                         <div style={{ width: \`\${meters.red}%\`, height: '100%', background: '#ef4444' }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px black' }}>UUSINTA</span>
                   </div>
                </div>
            )}
            
            {hasWheels && (
                <div style={{ position: 'relative', width: '60px', height: '60px', opacity: meters.yellow >= 100 && !showExplanation && currentQuestion.type === 'multiple_choice' ? 1 : 0.6, transition: 'all 0.3s' }}>
                   {meters.yellow >= 100 && !showExplanation && currentQuestion.type === 'multiple_choice' && <div className="animate-ping" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#eab308', borderRadius: '50%' }} />}
                   <button 
                     disabled={!(meters.yellow >= 100 && !showExplanation && currentQuestion.type === 'multiple_choice')}
                     onClick={useYellowMeter}
                     style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, #fde047, #ca8a04)', border: '2px solid #713f12', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', cursor: (meters.yellow >= 100 && !showExplanation && currentQuestion.type === 'multiple_choice') ? 'pointer' : 'default' }}>
                      <Disc size={28} color="white" />
                   </button>
                   <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1rem', width: '90px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                      <div style={{ width: '40px', height: '6px', background: 'rgba(0,0,0,0.5)', borderRadius: '3px', overflow: 'hidden' }}>
                         <div style={{ width: \`\${meters.yellow}%\`, height: '100%', background: '#eab308' }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px black' }}>POISTO</span>
                   </div>
                </div>
            )}

            {hasTools && (
                <div style={{ position: 'relative', width: '60px', height: '60px', opacity: meters.green >= 100 && !showExplanation ? 1 : 0.6, transition: 'all 0.3s' }}>
                   {meters.green >= 100 && !showExplanation && <div className="animate-ping" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#22c55e', borderRadius: '50%' }} />}
                   <button 
                     disabled={!(meters.green >= 100 && !showExplanation)}
                     onClick={useGreenMeter}
                     style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, #86efac, #16a34a)', border: '2px solid #14532d', borderRadius: '50%', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', cursor: (meters.green >= 100 && !showExplanation) ? 'pointer' : 'default' }}>
                      <Wrench size={28} color="white" />
                   </button>
                   <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1rem', width: '90px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                      <div style={{ width: '40px', height: '6px', background: 'rgba(0,0,0,0.5)', borderRadius: '3px', overflow: 'hidden' }}>
                         <div style={{ width: \`\${meters.green}%\`, height: '100%', background: '#22c55e' }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px black' }}>VAIHTO</span>
                   </div>
                </div>
            )}
        </div>
    );
  };

  const handleDragStart = (e, item) => e.dataTransfer.setData('text/plain', item);`
);

// Call renderMeters in return block
content = content.replace(
  `          </button>
        )}
      </div>

    </div>
  );
}`,
  `          </button>
        )}
      </div>
      {renderMeters()}
    </div>
  );
}`
);


fs.writeFileSync(file, content, 'utf8');
console.log('Quiz properties successfully overwritten!');
