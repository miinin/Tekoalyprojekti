import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Settings, Plus, ArrowRight, Wrench, Info, X, Zap, GraduationCap, ShieldCheck, Upload, BookOpen, Paintbrush, Sparkles, BookText, Rocket } from 'lucide-react';
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
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [loadCode, setLoadCode] = useState('');
  const [isRestoring, setIsRestoring] = useState(false);
  const [modalState, setModalState] = useState(null);


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
      const upperCode = classCode.toUpperCase();
      
      let sessionExists = false;
      let reqTut = null;

      try {
             const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
             const sessionDoc = await Promise.race([getDoc(doc(db, "class_sessions", upperCode)), timeoutPromise]);
             if (sessionDoc.exists()) {
                 sessionExists = true;
                 const rt = sessionDoc.data().requireTutorial;
                 if (typeof rt === 'boolean') {
                     reqTut = rt;
                 }
             }
      } catch(err) {
          setJoinClassLoading(false);
          setModalState({
              title: 'Yhteys laitteelta estetty',
              text: 'Selaimesi tai oppilaitoksen verkko estää yhteyden opettajan paneeliin (Firebase timeout). \n\nJos käytät AdBlockia, ota se pois päältä. Jos olet koulun verkossa, kokeile jakaa netti omasta puhelimesta.',
              buttonText: 'Takaisin',
              onClose: () => setModalState(null)
          });
          return;
      }

      if (!sessionExists) {
          setJoinClassLoading(false);
          setModalState({
              title: 'Luokkaa ei löydy',
              text: 'Tarkista opettajan koodi uudelleen, sellaista luokkaa ei tällä hetkellä ole avoinna!',
              buttonText: 'Takaisin',
              onClose: () => setModalState(null)
          });
          return;
      }

      // Start actual session logic now that we know room exists
      store.clearSinglePlayer();
      store.setClassroomCode(upperCode, classNick);
      if (reqTut !== null) store.setTutorialSkipped(!reqTut);
      
      const success = await store.syncClassroomProgress();
      
      if (success && reqTut === true) {
          const currentSparks = await store.getSparks();
          if (currentSparks < 200) {
              await store.addSparks(200);
          }
      }

      setJoinClassLoading(false);
      
      if (success) {
          setModalState({
              title: 'Liitytty onnistuneesti!',
              text: `Olet nyt mukana luokkatilassa nimimerkillä ${classNick}. Odota opettajan ohjeita ja aloita peli!`,
              buttonText: 'Siirry peliin',
              onClose: () => {
                  if (reqTut === true) navigate('/garage');
                  else navigate('/roadmap');
              }
          });
      } else {
          store.clearSinglePlayer();
          setModalState({
              title: 'Yhteys palvelimeen pätkäisi',
              text: 'Kirjautuminen opettajan huoneeseen onnistui, mutta luokkatietojen tallentaminen epäonnistui kireän verkon palomuurin takia.',
              buttonText: 'Takaisin',
              onClose: () => setModalState(null)
          });
      }
  };

  const handleCreateLobby = () => {
    const code = store.generateRoomCode();
    store.setRoomCode(code);
    setModalState({
        title: 'Yhteistyöhuone luotu!',
        text: `Koodi on: ${code}\n\nJaa tämä koodi ystävillesi! Muut voivat liittyä peliin syöttämällä koodin Lobbyssa. Keräätte yhdessä Kipinöitä!`,
        buttonText: 'Siirry kartalle',
        onClose: () => {
            setModalState(null);
            navigate('/roadmap');
        }
    });
  };

  const handleJoinLobby = (e) => {
    e.preventDefault();
    if (joinCode.trim().length >= 4) {
      store.setRoomCode(joinCode.trim());
      navigate('/roadmap');
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
      
      {/* Animated gradient background */}
      <style>{`
        @keyframes gradientBG {
            0% { background-position: 0% 0%; }
            25% { background-position: 100% 20%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 20% 100%; }
            100% { background-position: 0% 0%; }
        }
        .lobby-bg {
            position: absolute;
            inset: -20px;
            background: linear-gradient(110deg, #dcfce7, #fed7aa, #bbf7d0, #fdba74, #86efac, #ffedd5);
            background-size: 300% 300%;
            animation: gradientBG 60s ease-in-out infinite;
            z-index: -2;
        }
        .lobby-overlay {
            position: absolute;
            inset: -20px;
            background: radial-gradient(circle at center, transparent, rgba(253, 186, 116, 0.15));
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
            padding: 2rem;
            position: relative;
            overflow: hidden;
            min-height: 440px;
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

      <div className="animate-fade-in" style={{
         position: 'relative',
         background: 'rgba(255, 255, 255, 0.55)',
         backdropFilter: 'blur(25px)',
         WebkitBackdropFilter: 'blur(25px)',
         border: '1px solid rgba(255,255,255,0.8)',
         boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
         borderRadius: '36px',
         padding: '2rem 2.5rem',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         height: '90vh',
         minHeight: '750px',
         alignItems: 'center',
         width: '100%',
         maxWidth: '1250px',
         zIndex: 10
      }}>

        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '1rem', zIndex: 15 }}>
          <button onClick={() => navigate('/teacher')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem 1.2rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: '0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <GraduationCap size={20} color="#15803d" /> Opettajalle
          </button>
          <button onClick={() => setShowInfoBox(true)} title="Tietoa pelistä" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', transition: '0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Info size={22} color="#15803d" />
          </button>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setShowSettings(!showSettings)} title="Pelin asetukset" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', transition: '0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Settings size={22} color="#15803d" />
            </button>
            {showSettings && (
                 <div className="animate-fade-in" style={{ position: 'absolute', top: '120%', right: 0, width: '300px', backgroundColor: '#f8fafc', borderRadius: '16px', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', border: '2px solid #cbd5e1', boxShadow: '0 15px 40px rgba(0,0,0,0.5)', zIndex: 100, textAlign: 'left' }}>
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
                       <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 'bold', fontFamily: 'var(--font-main)' }}>Testitila</span>
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
        </div>

        <img className="animate-fade-in" src="/logo.png" alt="AIVAN Logo" style={{ height: '130px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))', zIndex: 10 }} />
        <p className="animate-fade-in" style={{ color: '#047857', fontSize: '1.4rem', margin: '0.5rem 0 2rem 0', fontFamily: 'var(--font-main)', fontWeight: 'bold', zIndex: 10 }}>Hyppää kyytiin oppimaan tekoälystä!</p>

        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', zIndex: 10 }}>
        
        {/* YKSINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #059669' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#059669', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Play size={36} /> Yksinpeli
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa omaan tahtiin keräten Kipinöitä ja kehitä tekoälypakuasi huippuunsa.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>


            {store.hasProgress() && (
              <button className="btn-primary" onClick={handleContinueSinglePlayer} style={{ background: '#10b981', padding: '1.2rem', fontSize: '1.3rem', boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)' }}>
                JATKA PELIÄ
              </button>
            )}

            <button className={store.hasProgress() ? 'btn-secondary' : 'btn-primary'} onClick={handleNewSinglePlayer} style={{ padding: '1.2rem', fontSize: '1.3rem', background: store.hasProgress() ? 'transparent' : '#059669', borderColor: '#059669', color: store.hasProgress() ? '#059669' : 'white', boxShadow: store.hasProgress() ? 'none' : '0 8px 20px rgba(5, 150, 105, 0.4)' }}>
              {store.hasProgress() ? 'ALOITA ALUSTA' : 'UUSI SEIKKAILU'}
            </button>

            <div style={{ background: 'rgba(248, 250, 252, 0.8)', padding: '1rem', borderRadius: '12px', border: '2px dashed #cbd5e1', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>
                    <label style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        Jatka peliä koodilla:
                        <button type="button" onClick={() => setModalState({ title: 'Miten lataaminen toimii?', text: 'Syötä tähän Autotallista tallentamasi rekisterikilpi-koodi (esim. ABC-123), niin voit jatkaa peliä täsmälleen siitä mihin jäit, täydellä kipinäpotilla!', onClose: () => setModalState(null), buttonText: 'Selvä juttu' })} style={{ background: 'none', color: '#059669', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0, transition: '0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}><Info size={18} /></button>
                    </label>
                </div>
                <form onSubmit={handleRestoreCloudSave} style={{ display: 'flex', gap: '0.6rem', width: '100%', alignItems: 'stretch' }}>
                     <div style={{ flexGrow: 1, display: 'flex', background: 'white', borderRadius: '8px', border: '2px solid #cbd5e1', overflow: 'hidden' }}>
                         <div style={{ background: '#1d4ed8', width: '38px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.75rem', paddingBottom: '0.3rem' }}>
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
            </div>


          </div>
        </div>

        {/* MONINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #0d9488' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#0d9488', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Users size={36} /> Yhteistyötila
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa kavereiden kanssa samassa tallissa. Kerätkää kipinöitä yhdessä!</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginTop: '1.5rem' }}>
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', backgroundColor: '#f0fdfa', padding: '1.5rem', borderRadius: '16px', border: '2px dashed #5eead4', flexGrow: 1, justifyContent: 'center' }}>
                <button className="btn-secondary" style={{ borderColor: '#0d9488', color: '#0d9488', padding: '1rem', background: 'white' }} onClick={handleCreateLobby}>
                  <Plus size={20} /> LUO UUSI HUONE
                </button>
                <div style={{ height: '1px', background: '#5eead4', margin: '0.5rem 0' }}></div>
                <label style={{ color: '#0f766e', fontWeight: 'bold', fontSize: '0.9rem', fontFamily: 'var(--font-main)' }}>Liity kaverin peliin koodilla:</label>
                <form onSubmit={handleJoinLobby} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Esim. TurboKissa" 
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value)}
                    style={{ minWidth: 0, flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #5eead4', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary" style={{ background: '#0d9488', padding: '1rem', borderRadius: '12px' }}>
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>

          </div>
        </div>

        {/* LUOKKATILA */}
        <div className="mode-card" style={{ borderTop: '8px solid #15803d' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#15803d', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
             <GraduationCap size={36} /> Luokkatila
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Liity opettajan ohjaamalle oppitunnille koulussa.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginTop: '1.5rem' }}>
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '16px', border: '2px dashed #86efac', flexGrow: 1, justifyContent: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#166534', fontWeight: 'bold', lineHeight: 1.4 }}>
                   <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />Käytä itsestäsi lempinimeä tai nimikirjaimia, josta vain opettaja tunnistaa sinut! Älä käytä oikeaa nimeäsi.
                </p>
                <form onSubmit={handleJoinClass} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <input 
                    type="text" 
                    placeholder="Opettajan koodi" 
                    value={classCode}
                    maxLength={6}
                    onChange={(e) => setClassCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                    style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #4ade80', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        placeholder="Oma nimimerkkisi" 
                        value={classNick}
                        maxLength={15}
                        onChange={(e) => setClassNick(e.target.value)}
                        style={{ minWidth: 0, flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #4ade80', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                      />
                      <button type="submit" disabled={classCode.length < 6 || classNick.length < 2 || joinClassLoading} className="btn-primary" style={{ background: '#15803d', padding: '1rem', borderRadius: '12px', opacity: (classCode.length < 6 || classNick.length < 2 || joinClassLoading) ? 0.5 : 1 }}>
                        {joinClassLoading ? '...' : <ArrowRight size={24} />}
                      </button>
                  </div>
                </form>
              </div>
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

      {showInfoBox && (
         <div className="animate-fade-in" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(3px)' }} onClick={() => setShowInfoBox(false)} />
            <div style={{ position: 'relative', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', borderRadius: '36px', padding: '4rem 2.5rem 3.5rem 2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1250px', minHeight: '80vh', maxHeight: '95vh', overflowY: 'auto', zIndex: 10, textAlign: 'center' }}>
               <button onClick={() => setShowInfoBox(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.8)', border: 'none', cursor: 'pointer', color: '#64748b', padding: '0.6rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}><X size={26} /></button>
               
               <h2 style={{ fontSize: '3.2rem', background: 'linear-gradient(135deg, #10b981, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-display)', margin: '0 0 2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  Kuskit ja apukuskit
               </h2>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%', maxWidth: '1100px', fontFamily: 'var(--font-main)', flexGrow: 1, justifyContent: 'center' }}>
                  
                  {/* Kehittäjät */}
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '2.5rem 2rem', border: '3px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: '#64748b', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '2rem' }}>
                          <Users size={24} color="#0ea5e9" /> Vastaavat Kehittäjät
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: '1.2rem', width: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' }}>
                              <img src="/edukslogo.png" alt="Eduksi logo" style={{ height: '65px', objectFit: 'contain', opacity: 0.95 }} />
                          </div>
                          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#cbd5e1', display: 'flex', alignItems: 'center' }}>:</div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem 1.8rem', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: '1.3rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '220px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Settings size={22} color="#0284c7" /> <BookOpen size={22} color="#0284c7" /> <Paintbrush size={22} color="#0284c7" /></div>
                              Miika Miinin
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem 1.8rem', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: '1.3rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '200px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Settings size={22} color="#0284c7" /> <BookOpen size={22} color="#0284c7" /></div>
                              Heikki Laivamaa
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '1.2rem 1.8rem', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: '1.3rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '200px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Paintbrush size={22} color="#0284c7" /></div>
                              Pauli Hirvonen
                          </div>
                      </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                      {/* Konsultit */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '2rem', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem' }}>
                              <GraduationCap size={24} color="#ca8a04" /> Kiitos konsultoinnista!
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1, justifyContent: 'center' }}>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.2rem', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <ShieldCheck size={24} color="#ca8a04" /> Ville Myllys
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.2rem', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <Paintbrush size={24} color="#ca8a04" /> Ville Schalin
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.2rem', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <Settings size={24} color="#ca8a04" /> Matti Riikonen
                              </span>
                          </div>
                      </div>

                      {/* Testaajat */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '2rem', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem' }}>
                              <Play size={24} color="#10b981" /> Pelitestaajat
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', flexGrow: 1, alignContent: 'center' }}>
                              {['Samu', 'Saaga', 'Eemi', 'Anne Rongas', 'Lauri Ylä-Jussila', 'Kari A. Hintikka'].map(name => (
                                  <span key={name} style={{ padding: '0.8rem 1.5rem', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '100px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                      {name}
                                  </span>
                              ))}
                          </div>
                      </div>

                      {/* AI Palvelut */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '2rem', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem' }}>
                              <Zap size={24} color="#8b5cf6" /> Tekoälypalvelut
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flexGrow: 1, justifyContent: 'center' }}>
                              {['Google Antigravity', 'NotebookLM', 'Google Gemini'].map(name => (
                                  <span key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.2rem', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                      {name}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>

               </div>
            </div>
         </div>
      )}
    </div>
  );
}
