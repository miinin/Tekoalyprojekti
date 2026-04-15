import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Roadmap from './pages/Roadmap';
import Garage from './pages/Garage';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';
import TeacherDashboard from './pages/TeacherDashboard';
import { store } from './services/store';

function GlobalClassroomOverlay() {
  const [isPaused, setIsPaused] = useState(false);
  
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
               // Gift received.
               console.log("Sait kipinöitä:", amount);
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
  
  if (!isPaused) return null;
  
  return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.95)', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', backdropFilter: 'blur(10px)' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#38bdf8', textAlign: 'center' }}>Käsijarru vedetty! 🛑</h1>
          <p style={{ fontSize: '1.8rem', maxWidth: '800px', textAlign: 'center', lineHeight: 1.5 }}>
             Opettaja on pysäyttänyt pelin väliaikaisesti.<br/><br/>Nosta katse ruudusta ja <strong>kuuntele ohjeita tarkasti!</strong>
          </p>
      </div>
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
