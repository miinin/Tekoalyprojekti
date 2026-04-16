import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Settings, Plus, ArrowRight, Wrench, Info, X, Zap, GraduationCap, ShieldCheck, Upload } from 'lucide-react';
import { store } from '../services/store';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Lobby() {
  const navigate = useNavigate();
  const [showMultiplayer, setShowMultiplayer] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  
  const [testMode, setTestMode] = useState(store.getTestMode());
  const [skipTutorial, setSkipTutorial] = useState(store.getTutorialSkipped());
  const [showSettings, setShowSettings] = useState(false);
  const [loadCode, setLoadCode] = useState('');
  const [isRestoring, setIsRestoring] = useState(false);
  const [modalState, setModalState] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
          try {
              const jsonData = JSON.parse(event.target.result);
              const success = store.importLocalSave(jsonData);
              if (success) {
                  setModalState({
                      title: 'Lataus onnistui!',
                      text: 'Tiedostosta ladattiin edellinen pelisi. Matka jatkuu!',
                      onClose: () => navigate('/roadmap'),
                      buttonText: 'Jatka peliä'
                  });
              } else {
                  throw new Error('Invalid format');
              }
          } catch(err) {
              setModalState({
                  title: 'Aivan väärä tiedosto',
                  text: 'Valitsemasi tiedosto ei sisältänyt kelvollista Aivan-tallennusta.',
                  onClose: () => setModalState(null),
                  buttonText: 'Takaisin'
              });
          }
      };
      reader.readAsText(file);
  };

  const handleRestoreCloudSave = async (e) => {
      e.preventDefault();
      if (loadCode.length < 6) return;
      setIsRestoring(true);
      const success = await store.importProgressFromCloud(loadCode);
      setIsRestoring(false);
      if (success) {
          setModalState({
              title: 'Tervetuloa takaisin!',
              text: `Peli ladattiin onnistuneesti rekisterikilvellä ${loadCode.toUpperCase()}. Kaikki kipinäsi ja aiempien pelikertojen eteneminen on palautettu.`,
              onClose: () => navigate('/roadmap'),
              buttonText: 'Jatka matkaa'
          });
      } else {
          setModalState({
              title: 'Lataus epäonnistui',
              text: 'Rekisterikilpeä ei löytynyt tietokannasta, tai huonon nettiyhteyden takia haku epäonnistui. Tarkista koodi ja yritä uudelleen.',
              onClose: () => setModalState(null),
              buttonText: 'Takaisin'
          });
      }
  };

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


  const [showClassroom, setShowClassroom] = useState(false);
  const [classCode, setClassCode] = useState('');
  const [classNick, setClassNick] = useState('');

  const [joinClassLoading, setJoinClassLoading] = useState(false);

  const handleJoinClass = async (e) => {
      e.preventDefault();
      if (classCode.length < 6 || classNick.length < 2) return;
      
      setJoinClassLoading(true);
      store.clearSinglePlayer();
      const upperCode = classCode.toUpperCase();
      store.setClassroomCode(upperCode, classNick);
      const success = await store.syncClassroomProgress();
      
      if (success) {
          try {
             const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
             const sessionDoc = await Promise.race([getDoc(doc(db, "class_sessions", upperCode)), timeoutPromise]);
             if (sessionDoc.exists()) {
                const rt = sessionDoc.data().requireTutorial;
                if (typeof rt === 'boolean') {
                    store.setTutorialSkipped(!rt);
                }
             }
          } catch(err) {
             console.warn("Could not fetch tutorial state");
          }
      }
      
      setJoinClassLoading(false);
      
      if (success) {
          setModalState({
              title: 'Liitytty onnistuneesti!',
              text: `Olet nyt mukana luokkatilassa nimimerkillä ${classNick}. Odota opettajan ohjeita ja aloita peli!`,
              buttonText: 'Siirry peliin',
              onClose: () => navigate('/roadmap')
          });
      } else {
          store.clearSinglePlayer();
          setModalState({
              title: 'Yhteys laitteelta estetty',
              text: 'Selaimesi tai oppilaitoksen verkko estää yhteyden opettajan paneeliin (Firebase timeout). \n\nJos käytät AdBlockia, ota se pois päältä. Jos olet koulun verkossa, kokeile jakaa netti omasta puhelimesta.',
              buttonText: 'Takaisin',
              onClose: () => setModalState(null)
          });
      }
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
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setShowSettings(!showSettings)} title="Pelin asetukset" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', padding: '0.8rem', borderRadius: '50%', color: 'white', cursor: 'pointer', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}>
              <Settings size={22} />
          </button>
          {showSettings && (
               <div className="animate-fade-in" style={{ position: 'absolute', top: '120%', right: 0, width: '300px', backgroundColor: '#f8fafc', borderRadius: '16px', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', border: '2px solid #cbd5e1', boxShadow: '0 15px 40px rgba(0,0,0,0.5)', zIndex: 100 }}>
                  <h3 style={{ margin: 0, borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', color: '#334155', fontFamily: 'var(--font-main)' }}>Asetukset</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>Ohita opastus</span>
                     <div 
                       className="toggle-track"
                       onClick={() => { const v = !skipTutorial; setSkipTutorial(v); store.setTutorialSkipped(v); }}
                       style={{ background: skipTutorial ? '#10b981' : '#cbd5e1' }}>
                       <div className="toggle-thumb" style={{ left: skipTutorial ? '23px' : '3px' }} />
                     </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>Testitila (+100k kipinää)</span>
                     <div 
                       className="toggle-track"
                       onClick={() => { const v = !testMode; setTestMode(v); store.setTestMode(v); }}
                       style={{ background: testMode ? '#10b981' : '#cbd5e1' }}>
                       <div className="toggle-thumb" style={{ left: testMode ? '23px' : '3px' }} />
                     </div>
                  </div>
               </div>
          )}
        </div>
        <button onClick={() => navigate('/teacher')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.9)', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '20px', color: '#0f172a', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <GraduationCap size={20} color="#059669" /> Opettajalle
        </button>
      </div>

      
      {/* Animated gradient background */}
      <style>{`
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .lobby-bg {
            position: absolute;
            inset: -20px;
            background: linear-gradient(-45deg, #0ea5e9, #10b981, #059669, #f59e0b);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            z-index: -2;
        }
        .lobby-overlay {
            position: absolute;
            inset: -20px;
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
            min-height: 520px;
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

      <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1200px', padding: '0 1.5rem', zIndex: 10 }}>
        
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

            <div style={{ background: 'rgba(248, 250, 252, 0.8)', padding: '1rem', borderRadius: '12px', border: '2px dashed #cbd5e1', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>
                    <label style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        Jatka tallentamallasi rekisterikilvellä: 
                        <button type="button" onClick={() => setModalState({ title: 'Miten lataaminen toimii?', text: 'Syötä tähän Autotallista tallentamasi rekisterikilpi-koodi (esim. ABC-123), niin voit jatkaa peliä täsmälleen siitä mihin jäit, täydellä kipinäpotilla!', onClose: () => setModalState(null), buttonText: 'Selvä juttu' })} style={{ background: 'none', color: '#0ea5e9', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}><Info size={18} /></button>
                    </label>
                </div>
                <form onSubmit={handleRestoreCloudSave} style={{ display: 'flex', gap: '0.6rem', width: '100%', alignItems: 'stretch' }}>
                     <div style={{ flexGrow: 1, display: 'flex', background: 'white', borderRadius: '8px', border: '2px solid #cbd5e1', overflow: 'hidden' }}>
                         <div style={{ background: '#0ea5e9', width: '38px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.75rem', paddingBottom: '0.3rem' }}>
                            <div style={{ display: 'flex', gridTemplateColumns: 'repeat(3, 1fr)', width: '22px', height: '22px', gap: '2px', display: 'grid', justifyContent: 'center', alignContent: 'center', marginTop: '6px', marginBottom: '4px' }}>
                               {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <div key={i} style={{ width: '6px', height: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i !== 4 && <Zap size={6} fill="#fde047" color="#fde047" strokeWidth={1} />}</div>)}
                            </div>
                            FIN
                         </div>
                         <input
                            type="text"
                            placeholder="ABC-123"
                            value={loadCode}
                            onChange={(e) => {
                                let val = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
                                if (val.length === 3 && !val.includes('-') && loadCode.length < 3) val += '-';
                                setLoadCode(val);
                            }}
                            maxLength={7}
                            style={{ minWidth: 0, flexGrow: 1, padding: '0.8rem 0.5rem', border: 'none', fontFamily: 'monospace', fontSize: '1.1rem', lineHeight: 1, textAlign: 'center', textTransform: 'uppercase', outline: 'none', letterSpacing: '2px', fontWeight: '900', color: '#1e293b', background: 'transparent' }}
                         />
                     </div>
                     <button type="submit" disabled={isRestoring || loadCode.length < 6} style={{ background: '#10b981', color: 'white', border: 'none', padding: '0 1rem', borderRadius: '8px', cursor: (isRestoring || loadCode.length < 6) ? 'not-allowed' : 'pointer', opacity: (isRestoring || loadCode.length < 6) ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '50px' }}>
                         {isRestoring ? '...' : <ArrowRight size={24} />}
                     </button>
                </form>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <input type="file" accept=".json" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileUpload} />
                    <button className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => fileInputRef.current.click()}>
                        <Upload size={16} /> Tuo tallennustiedostosta
                    </button>
                </div>
            </div>


          </div>
        </div>

        {/* MONINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #ec4899' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ec4899', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Users size={36} /> Yhteistyömoodi
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa kavereiden kanssa samassa tallissa. Kerätkää yhdessä Kipinöitä!</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
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
                    style={{ minWidth: 0, flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #fbcfe8', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary" style={{ background: '#ec4899', padding: '1rem', borderRadius: '12px' }}>
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>

          </div>
        </div>

        {/* LUOKKATILA */}
        <div className="mode-card" style={{ borderTop: '8px solid #059669' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#059669', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
             <GraduationCap size={36} /> Luokkatila
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Liity opettajan ohjaamalle oppitunnille koulussa.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', backgroundColor: '#ecfdf5', padding: '1.5rem', borderRadius: '16px', border: '2px dashed #a7f3d0' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#047857', fontWeight: 'bold', lineHeight: 1.4 }}>
                   <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />Käytä itsestäsi lempinimeä tai nimikirjaimia, josta vain opettaja tunnistaa sinut! Älä käytä oikeaa nimeäsi.
                </p>
                <form onSubmit={handleJoinClass} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <input 
                    type="text" 
                    placeholder="Opettajan koodi (esim. ABCDEF)" 
                    value={classCode}
                    maxLength={6}
                    onChange={(e) => setClassCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                    style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #6ee7b7', fontFamily: 'var(--font-main)', fontSize: '1.2rem', outline: 'none', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', fontWeight: 'bold' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        placeholder="Sinun nimimerkkisi" 
                        value={classNick}
                        maxLength={15}
                        onChange={(e) => setClassNick(e.target.value)}
                        style={{ minWidth: 0, flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #6ee7b7', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                      />
                      <button type="submit" disabled={classCode.length < 6 || classNick.length < 2 || joinClassLoading} className="btn-primary" style={{ background: '#059669', padding: '1rem', borderRadius: '12px', opacity: (classCode.length < 6 || classNick.length < 2 || joinClassLoading) ? 0.5 : 1 }}>
                        {joinClassLoading ? '...' : <ArrowRight size={24} />}
                      </button>
                  </div>
                </form>
              </div>
          </div>
        </div>

      </div>

      

      {modalState && (
         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={modalState.onClose}>
            <div className="animate-bounce" style={{ position: 'relative', background: 'rgba(255,255,255,0.95)', padding: '2.5rem', borderRadius: '16px', border: '4px solid #0ea5e9', color: 'var(--text-main)', textAlign: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.3)', width: '90%', maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
               <button onClick={modalState.onClose} style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={24} /></button>
               <h3 style={{ margin: '0 0 1rem 0', color: '#0ea5e9', fontSize: '1.8rem', fontFamily: 'var(--font-display)' }}>{modalState.title}</h3>
               <p style={{ margin: '0 0 2rem 0', fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>{modalState.text}</p>
               <button className="btn-primary" style={{ background: '#0ea5e9', width: '100%', fontSize: '1.2rem', padding: '1rem' }} onClick={modalState.onClose}>
                  {modalState.buttonText || 'Selvä'}
               </button>
            </div>
         </div>
      )}

    </div>
  );
}
