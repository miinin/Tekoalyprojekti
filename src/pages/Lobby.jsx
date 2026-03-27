import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Settings, Plus, ArrowRight } from 'lucide-react';
import { store } from '../services/store';

export default function Lobby() {
  const navigate = useNavigate();
  const [showMultiplayer, setShowMultiplayer] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  
  const handleNewSinglePlayer = () => {
    store.clearSinglePlayer();
    navigate('/roadmap');
  };

  const handleContinueSinglePlayer = () => {
    store.setRoomCode(null);
    navigate('/roadmap');
  };

  const handleCreateLobby = () => {
    const code = store.generateRoomCode();
    store.setRoomCode(code);
    alert(`Yhteistyöhuone luotu koodilla:\n\n${code}\n\nJaa tämä koodi ystävillesi! Muut voivat liittyä peliin syöttämällä koodin Lobbyssa. Keräätte yhdessä pisteitä (Kipinöitä) samaan autotalliin!`);
    navigate('/roadmap');
  };

  const handleJoinLobby = (e) => {
    e.preventDefault();
    if (joinCode.trim().length >= 4) {
      store.setRoomCode(joinCode.trim());
      navigate('/roadmap');
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'radial-gradient(circle at center, rgba(0, 114, 198, 0.05), transparent)' }}>
      <h1 style={{ fontSize: '5.5rem', marginBottom: '0.2rem', textShadow: '0 4px 10px rgba(0,0,0,0.1)', color: 'var(--primary-color)' }}>AIVAN</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '4rem', fontFamily: 'var(--font-main)' }}>Tekoälyn oppimispeli peruskouluille ja lukioille</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%', maxWidth: '850px' }}>
        
        {/* YKSINPELI */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', borderTop: '6px solid var(--primary-color)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', margin: 0, fontSize: '2rem' }}>
            <Play size={28} /> Yksinpeli
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.5', fontFamily: 'var(--font-main)' }}>Pelaa omaan tahtiin keräten Kipinöitä ja kehitä tekoälypakuasi.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            {store.hasProgress() && (
              <button className="btn-primary" onClick={handleContinueSinglePlayer} style={{ background: 'var(--accent-color)', padding: '1.2rem', fontSize: '1.2rem' }}>
                JATKA PELIÄ
              </button>
            )}
            <button className={store.hasProgress() ? 'btn-secondary' : 'btn-primary'} onClick={handleNewSinglePlayer} style={{ padding: '1.2rem', fontSize: '1.2rem' }}>
              {store.hasProgress() ? 'ALOITA ALUSTA' : 'UUSI PELI'}
            </button>
          </div>
        </div>

        {/* MONINPELI */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem', borderTop: '6px solid #8b5cf6' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#8b5cf6', margin: 0, fontSize: '2rem' }}>
            <Users size={28} /> Yhteistyömoodi
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.5', fontFamily: 'var(--font-main)' }}>Pelaa 2-4 kaverin kanssa. Kerätkää yhdessä Kipinöitä ja virittäkää kärry huippuunsa!</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            {!showMultiplayer ? (
              <button className="btn-primary" style={{ background: '#8b5cf6', padding: '1.2rem', fontSize: '1.2rem' }} onClick={() => setShowMultiplayer(true)}>
                AVAA MONINPELI
              </button>
            ) : (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <button className="btn-secondary" style={{ borderColor: '#8b5cf6', color: '#8b5cf6', padding: '1rem' }} onClick={handleCreateLobby}>
                  <Plus size={20} /> LUO UUSI HUONE
                </button>
                <div style={{ width: '100%', borderBottom: '2px dashed #e2e8f0', margin: '0.5rem 0' }}></div>
                <label style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Liity kaverin peliin koodilla:</label>
                <form onSubmit={handleJoinLobby} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Esim. TurboKissa" 
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    style={{ flexGrow: 1, padding: '1rem', borderRadius: '8px', border: '2px solid #cbd5e1', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary" style={{ background: '#8b5cf6', padding: '1rem' }}>
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="btn-secondary" style={{ marginTop: '4rem', border: '2px solid transparent', background: 'transparent', color: 'var(--text-muted)' }} onClick={() => alert('Asetuksia voi säätää täältä myöhemmin (esim. musiikki ja esteettömyys).')}>
        <Settings size={20} /> Asetukset
      </button>

    </div>
  );
}
