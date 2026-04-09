import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Settings, Plus, ArrowRight, Wrench } from 'lucide-react';
import { store } from '../services/store';

export default function Lobby() {
  const navigate = useNavigate();
  const [showMultiplayer, setShowMultiplayer] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  
  const [testMode, setTestMode] = useState(store.getTestMode());
  const [skipTutorial, setSkipTutorial] = useState(store.getTutorialSkipped());
  const [showSettings, setShowSettings] = useState(false);

  const handleNewSinglePlayer = async () => {
    store.clearSinglePlayer();
    store.setTutorialSkipped(skipTutorial);
    
    // Antigravity fix: clearSinglePlayer pyyhkii kaikki rahat (ml. testirahat), 
    // joten testitilan 100k lisätään vasta nollaamisen jälkeen!
    if (!skipTutorial) {
        await store.addSparks(testMode ? 100200 : 200);
        navigate('/garage');
    } else {
        if (testMode) await store.addSparks(100000);
        navigate('/roadmap');
    }
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
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
      {/* Animated gradient background */}
      <style>{`
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .lobby-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(-45deg, #0ea5e9, #10b981, #059669, #f59e0b);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            z-index: -2;
        }
        .lobby-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at center, transparent, rgba(0,0,0,0.5));
            z-index: -1;
        }
        .mode-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            border-radius: 28px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
        }
        .mode-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }
        .toggle-track {
            width: 46px; height: 26px; border-radius: 13px; position: relative; cursor: pointer; transition: 0.3s;
        }
        .toggle-thumb {
            position: absolute; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: white; transition: 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
      <div className="lobby-bg" />
      <div className="lobby-overlay" />

      <img className="animate-fade-in" src="/logo.png" alt="AIVAN Logo" style={{ height: '160px', objectFit: 'contain', marginTop: '-3rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))', zIndex: 10 }} />
      <p className="animate-fade-in" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.4rem', margin: '0.5rem 0 3.5rem 0', fontFamily: 'var(--font-main)', fontWeight: 'bold', zIndex: 10 }}>Hyppää kyytiin oppimaan tekoälystä!</p>

      <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem', width: '100%', maxWidth: '950px', padding: '0 1.5rem', zIndex: 10 }}>
        
        {/* YKSINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #0ea5e9' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#0ea5e9', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Play size={36} /> Yksinpeli
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa omaan tahtiin keräten Kipinöitä ja kehitä tekoälypakuasi huippuunsa.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            {store.hasProgress() && (
              <button className="btn-primary" onClick={handleContinueSinglePlayer} style={{ background: '#10b981', padding: '1.2rem', fontSize: '1.3rem', boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)' }}>
                JATKA PELIÄ
              </button>
            )}

            <button className={store.hasProgress() ? 'btn-secondary' : 'btn-primary'} onClick={handleNewSinglePlayer} style={{ padding: '1.2rem', fontSize: '1.3rem', background: store.hasProgress() ? 'transparent' : '#0ea5e9', borderColor: '#0ea5e9', color: store.hasProgress() ? '#0ea5e9' : 'white', boxShadow: store.hasProgress() ? 'none' : '0 8px 20px rgba(14, 165, 233, 0.4)' }}>
              {store.hasProgress() ? 'ALOITA ALUSTA' : 'UUSI SEIKKAILU'}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.2rem' }}>
               <button onClick={() => setShowSettings(!showSettings)} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                 <Wrench size={16} /> Aloitusasetukset
               </button>
            </div>

            {showSettings && (
               <div className="animate-fade-in" style={{ backgroundColor: '#f8fafc', borderRadius: '16px', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '2px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>Nopea oppija (Ohita opastus)</span>
                     <div 
                       className="toggle-track"
                       onClick={() => { const v = !skipTutorial; setSkipTutorial(v); store.setTutorialSkipped(v); }}
                       style={{ background: skipTutorial ? '#10b981' : '#cbd5e1' }}>
                       <div className="toggle-thumb" style={{ left: skipTutorial ? '23px' : '3px' }} />
                     </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>Testitila (Antaa alkukassaa)</span>
                     <div 
                       className="toggle-track"
                       onClick={() => { const v = !testMode; setTestMode(v); store.setTestMode(v); }}
                       style={{ background: testMode ? '#8b5cf6' : '#cbd5e1' }}>
                       <div className="toggle-thumb" style={{ left: testMode ? '23px' : '3px' }} />
                     </div>
                  </div>
               </div>
            )}
          </div>
        </div>

        {/* MONINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #ec4899' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ec4899', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Users size={36} /> Yhteistyömoodi
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa kavereiden kanssa samassa tallissa. Kerätkää yhdessä Kipinöitä!</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            {!showMultiplayer ? (
              <button className="btn-primary" style={{ background: '#ec4899', padding: '1.2rem', fontSize: '1.3rem', boxShadow: '0 8px 20px rgba(236, 72, 153, 0.4)' }} onClick={() => setShowMultiplayer(true)}>
                AVAA MONINPELI
              </button>
            ) : (
              <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', backgroundColor: '#fdf2f8', padding: '1.5rem', borderRadius: '16px', border: '2px dashed #fbcfe8' }}>
                <button className="btn-secondary" style={{ borderColor: '#ec4899', color: '#ec4899', padding: '1rem', background: 'white' }} onClick={handleCreateLobby}>
                  <Plus size={20} /> LUO UUSI HUONE
                </button>
                <div style={{ height: '1px', background: '#fbcfe8', margin: '0.5rem 0' }}></div>
                <label style={{ color: '#be185d', fontWeight: 'bold', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Liity kaverin peliin koodilla:</label>
                <form onSubmit={handleJoinLobby} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Esim. TurboKissa" 
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    style={{ flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #fbcfe8', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary" style={{ background: '#ec4899', padding: '1rem', borderRadius: '12px' }}>
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <button style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem 1.5rem', borderRadius: '20px', color: 'rgba(255,255,255,0.9)', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 'bold', position: 'absolute', bottom: '2rem', transition: '0.3s', zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onClick={() => alert('Asetuksia voi säätää täältä myöhemmin (esim. musiikki ja esteettömyys).')}>
        <Settings size={20} /> Yleiset asetukset
      </button>

    </div>
  );
}
