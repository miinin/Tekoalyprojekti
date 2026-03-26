import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, LogIn } from 'lucide-react';

export default function Login() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (code.trim()) {
      // Mock login for now
      localStorage.setItem('aivan_user', code);
      navigate('/roadmap');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>AIvan</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Tekoälyn oppimispeli peruskouluille ja lukioille</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <KeyRound style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
            <input 
              type="text" 
              placeholder="Oma koodi (esim. TurboKissa)"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.2)',
                color: 'white',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
            <LogIn size={20} /> Start Roadtrip
          </button>
        </form>
      </div>
    </div>
  );
}
