import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, LogIn } from 'lucide-react';

export default function Login() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (code.trim()) {
      localStorage.setItem('aivan_user', code);
      navigate('/roadmap');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.2rem' }}>AIVAN</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-main)' }}>Tekoälyn oppimispeli peruskouluille ja lukioille</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <KeyRound style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }} size={20} />
            <input 
              type="text" 
              placeholder="Syötä koodi (esim. TurboKissa)"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                padding: '1.2rem 1rem 1.2rem 3.5rem',
                borderRadius: '8px',
                border: '2px solid rgba(76, 133, 17, 0.2)',
                background: '#f8fafc',
                color: 'var(--text-main)',
                fontSize: '1rem',
                fontFamily: 'var(--font-main)'
              }}
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem' }}>
            <LogIn size={20} /> ALOITA ROADTRIP
          </button>
        </form>
      </div>
    </div>
  );
}
