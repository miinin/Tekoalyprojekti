import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Roadmap from './pages/Roadmap';
import Garage from './pages/Garage';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';
import TeacherDashboard from './pages/TeacherDashboard';
import { store } from './services/store';

import { Zap, Gift } from 'lucide-react';

function GlobalClassroomOverlay() {
  const [isPaused, setIsPaused] = useState(false);
  const [giftPopup, setGiftPopup] = useState(null);
  
  useEffect(() => {
     let unsubSparks = null;
     let unsubStatus = null;
     
     const checkRoom = () => {
         const code = store.getClassroomCode();
         const nick = store.getClassroomNickname();
         if (code && nick) {
            unsubStatus = store.listenToClassroomStatus(code, (status) => {
               setIsPaused(status === 'paused');
            });
            unsubSparks = store.listenToTeacherGifts(code, nick, (amount) => {
               if (amount && amount > 0) {
                   setGiftPopup(amount);
                   setTimeout(() => setGiftPopup(null), 4000);
               }
            });
         }
     };
     
     checkRoom();
     const interval = setInterval(checkRoom, 5000);
     
     return () => {
         clearInterval(interval);
         if (unsubStatus) unsubStatus();
         if (unsubSparks) unsubSparks();
     };
  }, []);
  
  return (
      <>
        {isPaused && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.95)', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backdropFilter: 'blur(10px)' }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#38bdf8', textAlign: 'center' }}>Käsijarru vedetty! 🛑</h1>
              <p style={{ fontSize: '1.8rem', maxWidth: '800px', textAlign: 'center', lineHeight: 1.5 }}>
                 Opettaja on asettanut pelin väliaikaisesti tauolle.<br/><br/>Nosta katse ruudusta ja <strong>kuuntele ohjeita tarkasti!</strong>
              </p>
          </div>
        )}
        
        {giftPopup && (
          <div className="animate-bounce" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 99998, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '3px solid #f59e0b', padding: '1.5rem 2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: '#f59e0b', padding: '1rem', borderRadius: '50%' }}>
                  <Gift size={32} color="white" />
              </div>
              <div>
                  <h3 style={{ margin: '0 0 0.2rem 0', color: '#d97706', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Opettajalta lahja!</h3>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: '#b45309', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      +{giftPopup} <Zap size={28} fill="#b45309" />
                  </div>
              </div>
          </div>
        )}
      </>
  );
}

function App() {
  return (
    <Router>
      <GlobalClassroomOverlay />
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
