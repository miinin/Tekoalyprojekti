import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Roadmap from './pages/Roadmap';
import Garage from './pages/Garage';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';
import TeacherDashboard from './pages/TeacherDashboard';
import { store } from './services/store';
import confetti from 'canvas-confetti';
import { Zap, Gift } from 'lucide-react';

function GlobalClassroomOverlay() {
  const location = useLocation();
  const navigate = useNavigate();
  // Opettajan hallintapaneelia ei koskaan pysäytetä, vaikka samassa selaimessa olisi luokkatunnus toisessa välilehdessä
  const isTeacherView = location.pathname.startsWith('/teacher') || location.pathname.startsWith('/admin');
  const [isPaused, setIsPaused] = useState(false);
  const [giftPopup, setGiftPopup] = useState(null);
  
  useEffect(() => {
     let unsubSparks = null;
     let unsubStatus = null;
     // Kuuntelijat avataan vain, kun luokkakoodi tai nimimerkki vaihtuu. Aiemmin uudet
     // kuuntelijat avattiin 5 sekunnin välein vanhoja sulkematta, jolloin niitä kertyi
     // satoja ja pitkään auki ollut sivu hidastui tai jumittui.
     let activeKey = null;

     const checkRoom = () => {
         const code = store.getClassroomCode();
         const nick = store.getClassroomNickname();
         const key = code && nick ? `${code}|${nick}` : null;
         if (key === activeKey) return;
         activeKey = key;
         if (unsubStatus) { unsubStatus(); unsubStatus = null; }
         if (unsubSparks) { unsubSparks(); unsubSparks = null; }
         if (!key) { setIsPaused(false); return; }
         {
            unsubStatus = store.listenToClassroomStatus(code, (status) => {
               setIsPaused(status === 'paused');
            });
            unsubSparks = store.listenToTeacherGifts(code, nick, (payload) => {
               if (payload && payload.sparks && payload.sparks > 0) {
                   setGiftPopup({ type: 'sparks', amount: payload.sparks });
                   confetti({ particleCount: 150, spread: 80, origin: { y: 0.8, x: 0.9 }, colors: ['#f59e0b', '#fbbf24', '#fcd34d'] });
                   setTimeout(() => setGiftPopup(null), 5000);
               } else if (payload && payload.boosts) {
                   const color = Object.keys(payload.boosts)[0];
                   const amount = payload.boosts[color];
                   setGiftPopup({ type: 'boost', amount, color });
                   confetti({ particleCount: 100, spread: 70, origin: { y: 0.8, x: 0.9 }, colors: ['#6366f1', '#818cf8', '#c7d2fe'] });
                   setTimeout(() => setGiftPopup(null), 5000);
               }
            });
         }
     };
     
     checkRoom();
     const interval = setInterval(checkRoom, 5000);
     const pingInterval = setInterval(() => { store.pingPresence(); }, 30000);
     
     return () => {
         clearInterval(interval);
         clearInterval(pingInterval);
         if (unsubStatus) unsubStatus();
         if (unsubSparks) unsubSparks();
     };
  }, []);
  
  return (
      <>
        {isPaused && !isTeacherView && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.95)', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backdropFilter: 'blur(10px)' }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#38bdf8', textAlign: 'center' }}>Käsijarru vedetty! 🛑</h1>
              <p style={{ fontSize: '1.8rem', maxWidth: '800px', textAlign: 'center', lineHeight: 1.5 }}>
                 Opettaja on asettanut pelin väliaikaisesti tauolle.<br/><br/>Nosta katse ruudusta ja <strong>kuuntele ohjeita tarkasti!</strong>
              </p>
              {/* Jos opettaja on kokeillut peliä oppilaana samalla laitteella, käsijarru peittäisi
                  muuten myös opettajan sisäänkäynnin. Hallintapaneeli vaatii silti luokkakoodin ja PIN-koodin. */}
              <button type="button" onClick={() => navigate('/teacher')} style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', background: 'transparent', border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.75)', padding: '0.6rem 1.2rem', borderRadius: '10px', fontSize: '0.95rem', cursor: 'pointer' }}>
                 Opettaja? Avaa hallintapaneeli
              </button>
          </div>
        )}
        
        {giftPopup && giftPopup.type === 'sparks' && (
          <div className="animate-bounce" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 99998, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '3px solid #f59e0b', padding: '1.5rem 2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: '#f59e0b', padding: '1rem', borderRadius: '50%' }}>
                  <Gift size={32} color="white" />
              </div>
              <div>
                  <h3 style={{ margin: '0 0 0.2rem 0', color: '#d97706', fontSize: '1.2rem', fontWeight: 'bold' }}>Mahtavaa! 🤩</h3>
                  <div style={{ marginBottom: '0.4rem', color: '#b45309', fontSize: '0.95rem' }}>Opettaja huomasi ahkeruutesi!</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#b45309', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      +{giftPopup.amount} <Zap size={32} fill="#b45309" />
                  </div>
              </div>
          </div>
        )}
        
        {giftPopup && giftPopup.type === 'boost' && (
          <div className="animate-bounce" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 99998, background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', border: '3px solid #6366f1', padding: '1.5rem 2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: '#6366f1', padding: '1rem', borderRadius: '50%' }}>
                  <Gift size={32} color="white" />
              </div>
              <div>
                  <h3 style={{ margin: '0 0 0.2rem 0', color: '#4338ca', fontSize: '1.2rem', fontWeight: 'bold' }}>Opettajalta apupaketti! 🚀</h3>
                  <div style={{ marginBottom: '0.4rem', color: '#312e81', fontSize: '0.95rem' }}>Nyt meni hienosti!</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#312e81', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      +{giftPopup.amount} {giftPopup.color === 'red' ? 'Yritä uudelleen' : giftPopup.color === 'yellow' ? 'Poisto' : giftPopup.color === 'green' ? 'Vaihto' : 'Tehostinta'}
                  </div>
              </div>
          </div>
        )}
      </>
  );
}

function GlobalLogo() {
  const location = useLocation();
  const isLobby = location.pathname.startsWith('/lobby') || location.pathname === '/';
  
  // Etusivulla Eduks-logo on sivun alapalkissa
  if (isLobby) return null;

  return (
     <div className="animate-fade-in" style={{ position: 'fixed', bottom: '1.2rem', right: '1.2rem', zIndex: 9000, pointerEvents: 'none' }}>
        <img src="/edukslogo.png" alt="Eduks" style={{ width: '80px', opacity: 0.5, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
     </div>
  );
}

function App() {
  return (
    <Router>
      <GlobalClassroomOverlay />
      <GlobalLogo />
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/roadmap/:mainCategory" element={<Roadmap />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/quiz/:mainCategory/:subCategory" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/" element={<Navigate to="/lobby" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
