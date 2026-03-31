import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Roadmap from './pages/Roadmap';
import Garage from './pages/Garage';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/roadmap/:mainCategory" element={<Roadmap />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/quiz/:mainCategory/:subCategory" element={<Quiz />} />
        <Route path="/" element={<Navigate to="/lobby" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
