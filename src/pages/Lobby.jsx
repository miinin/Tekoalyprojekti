import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Users, Settings, Plus, ArrowRight, Wrench, Info, X, Zap, GraduationCap, ShieldCheck, Upload, BookOpen, Paintbrush, Sparkles, BookText, Rocket, MessageSquare, Trophy, ExternalLink, History } from 'lucide-react';
import { store } from '../services/store';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Lobby() {
  const navigate = useNavigate();
  
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
    if (skipTutorial) store.grantSkipTutorialRewards();
    
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
      } catch(error) { console.error(error);
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

      // Start actual session logic using the robust joinClassroom method
      const joinResult = await store.joinClassroom(upperCode, classNick);
      setJoinClassLoading(false);

      if (joinResult !== true && joinResult !== 'error') {
          // New player inside a classroom needs the initial 200 sparks to buy the required tool!
          await store.addSparks(200);
      }

      if (joinResult === 'error') {
          setModalState({
              title: 'Yhteysongelma',
              text: 'Emme saaneet ladattua mahdollisia aiempia tietojasi tekoälyluokasta, emmekä tyhjennä peliäsi vahingossa! Tarkista verkkoyhteys ja yritä liittyä luokkaan uudelleen.',
              buttonText: 'Takaisin',
              onClose: () => setModalState(null)
          });
          return;
      }
      
      const reqTutFixed = typeof reqTut === 'boolean' ? reqTut : false;
      const willShowGarage = (joinResult === true) ? false : reqTutFixed; // If resumed, don't force Garage unless needed. Let's just follow reqTut if new player.

      setModalState({
          title: 'Liitytty onnistuneesti!',
          text: (joinResult === true) 
              ? `Tervetuloa takaisin, ${classNick}! Pelitilanteesi on palautettu.` 
              : `Olet nyt mukana luokkatilassa nimimerkillä ${classNick}. Odota opettajan ohjeita ja aloita peli!`,
          buttonText: 'Siirry peliin',
          onClose: () => {
              if (reqTutFixed && joinResult !== true) navigate('/garage');
              else navigate('/roadmap');
          }
      });
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
            -webkit-backdrop-filter: blur(15px);
            border-radius: 28px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem;
            position: relative;
            overflow: hidden;
        }
        @media (max-height: 800px) {
            .mode-card {
                padding: 1.5rem;
                gap: 1rem;
            }
        }
        .mode-card:hover {
            transform: translateY(-8px) translateZ(0);
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
         padding: '2rem 2.5rem',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         minHeight: 'min(90vh, 100%)',
         alignItems: 'center',
         width: '100%',
         maxWidth: '1250px',
         zIndex: 10
      }}>

        <div style={{
           position: 'absolute',
           inset: 0,
           background: 'rgba(255, 255, 255, 0.55)',
           backdropFilter: 'blur(25px)',
           WebkitBackdropFilter: 'blur(25px)',
           border: '1px solid rgba(255,255,255,0.8)',
           boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
           borderRadius: '36px',
           zIndex: -1,
           pointerEvents: 'none'
        }} />

        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.8rem', zIndex: 15, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="https://eduks.fi/aivan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem 1.2rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textDecoration: 'none', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <MessageSquare size={20} color="#15803d" /> Anna palautetta
          </a>
          <button onClick={() => navigate('/teacher')} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem 1.2rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <GraduationCap size={20} color="#15803d" /> Opettajalle
          </button>
          <button onClick={() => setShowInfoBox(true)} title="Tietoa pelistä" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Info size={22} color="#15803d" />
          </button>
          <div style={{ position: 'relative' }}>
            <button onClick={() => setShowSettings(!showSettings)} title="Pelin asetukset" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,1)', padding: '0.6rem', borderRadius: '24px', color: '#166534', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
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

        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 15 }}>
            {/* Hackathon Win Banner */}
            <a 
                href="https://faktabaari.fi/edu/tekoalysta-tukialyksi-hackathonin-2026-tulokset-viisi-valmista-materiaalia-tekoalylukutaidon-opetukseen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-fade-in"
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                    gap: '0.4rem',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(254, 243, 199, 0.8))', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(245, 158, 11, 0.3)', 
                    borderTop: '4px solid #d97706',
                    padding: '0.8rem 1rem', 
                    borderRadius: '12px', 
                    textDecoration: 'none', 
                    boxShadow: '0 4px 20px rgba(217, 119, 6, 0.15)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    color: '#451a03'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(217, 119, 6, 0.25)';
                    e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.6)';
                    const arrow = e.currentTarget.querySelector('.link-arrow');
                    if(arrow) arrow.style.transform = 'translateX(4px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(217, 119, 6, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)';
                    const arrow = e.currentTarget.querySelector('.link-arrow');
                    if(arrow) arrow.style.transform = 'translateX(0)';
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.2rem' }}>
                   <img src="https://faktabaari.fi/images/fblogotitle.png" alt="Faktabaari" style={{ height: '18px', objectFit: 'contain' }} />
                   <ArrowRight className="link-arrow" size={16} color="#d97706" style={{ transition: 'transform 0.2s ease' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                    <span style={{ fontFamily: 'var(--font-main)', fontSize: '0.9rem', fontWeight: 'bold', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.2' }}>
                        Hackathon Voittaja!
                    </span>
                    <span style={{ fontFamily: 'var(--font-main)', fontSize: '0.85rem', color: '#451a03', lineHeight: '1.3' }}>
                        <span style={{ fontFamily: 'var(--font-display)', color: '#d97706', fontSize: '1rem', letterSpacing: '0.5px', marginRight: '4px', fontWeight: 'normal' }}>AI Van!</span> voitti Tekoälystä tukiälyksi -hackathonin.
                    </span>
                </div>
            </a>
        </div>

        <img className="animate-fade-in" src="/logo.png" alt="AIVAN Logo" style={{ height: '130px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))', zIndex: 10 }} />
        <p className="animate-fade-in" style={{ color: '#047857', fontSize: '1.4rem', margin: '0.5rem 0 2rem 0', fontFamily: 'var(--font-main)', fontWeight: 'bold', zIndex: 10 }}>Hyppää kyytiin oppimaan tekoälystä!</p>

        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%', zIndex: 10 }}>
        
        {/* YKSINPELI */}
        <div className="mode-card" style={{ borderTop: '8px solid #059669', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#059669', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
            <Play size={36} /> Yksinpeli
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Pelaa omaan tahtiin ja kehitä tekoälypakuasi.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem' }}>
            <button className="btn-primary" onClick={handleNewSinglePlayer} style={{ padding: '1.2rem', fontSize: '1.3rem', background: store.hasProgress() ? 'transparent' : '#059669', border: `2px solid ${store.hasProgress() ? '#cbd5e1' : '#059669'}`, color: store.hasProgress() ? '#64748b' : 'white', boxShadow: store.hasProgress() ? 'none' : '0 8px 20px rgba(5, 150, 105, 0.4)' }}>
              UUSI SEIKKAILU
            </button>
          </div>
        </div>

        {/* LUOKKATILA */}
        <div className="mode-card" style={{ borderTop: '8px solid #15803d', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#15803d', margin: 0, fontSize: '2.4rem', fontFamily: 'var(--font-display)' }}>
             <GraduationCap size={36} /> Luokkatila
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.5', fontFamily: 'var(--font-main)', opacity: 0.85 }}>Liity opettajan ohjaamalle oppitunnille.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem' }}>
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f0fdf4', padding: '1.2rem', borderRadius: '16px', border: '2px dashed #86efac' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#166534', fontWeight: 'bold', lineHeight: 1.4 }}>
                   <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />Käytä itsestäsi lempinimeä, josta vain opettaja tunnistaa sinut!
                </p>
                <form onSubmit={handleJoinClass} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <input 
                    type="text" 
                    placeholder="Liittymiskoodi" 
                    value={classCode}
                    maxLength={6}
                    onChange={(e) => setClassCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                    style={{ padding: '0.8rem 1rem', borderRadius: '12px', border: '2px solid #4ade80', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        placeholder="Oma nimimerkkisi" 
                        value={classNick}
                        maxLength={15}
                        onChange={(e) => setClassNick(e.target.value)}
                        style={{ minWidth: 0, flexGrow: 1, padding: '0.8rem 1rem', borderRadius: '12px', border: '2px solid #4ade80', fontFamily: 'var(--font-main)', fontSize: '1rem', outline: 'none' }}
                      />
                      <button type="submit" disabled={classCode.length < 6 || classNick.length < 2 || joinClassLoading} className="btn-primary" style={{ background: '#15803d', padding: '0.8rem 1rem', borderRadius: '12px', opacity: (classCode.length < 6 || classNick.length < 2 || joinClassLoading) ? 0.5 : 1 }}>
                        {joinClassLoading ? '...' : <ArrowRight size={24} />}
                      </button>
                  </div>
                </form>
              </div>
          </div>
        </div>

      </div>

      {/* JATKA PELIÄ (Bottom Banner) */}
      <div className="animate-fade-in" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(10px)', borderRadius: '24px', padding: store.hasProgress() ? '1.5rem 2rem' : '0.8rem 2rem', marginTop: '1.5rem', border: store.hasProgress() ? '2px solid #f59e0b' : '1px solid #cbd5e1', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', boxShadow: store.hasProgress() ? '0 10px 30px rgba(245, 158, 11, 0.15)' : 'none', zIndex: 10 }}>
          {store.hasProgress() ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ background: '#f59e0b', width: '50px', height: '50px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                     <History size={28} />
                 </div>
                 <div>
                     <h3 style={{ margin: 0, color: '#b45309', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Jatka peliä</h3>
                     <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-main)', opacity: 0.8, fontSize: '1rem' }}>Palaa takaisin tekoälypakusi rattiin!</p>
                 </div>
              </div>
          ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                 <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <History size={20} />
                 </div>
                 <h3 style={{ margin: 0, color: '#64748b', fontSize: '1.1rem', fontFamily: 'var(--font-main)' }}>Palauta aiempi peli koodilla:</h3>
              </div>
          )}
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', flexGrow: 1, justifyContent: 'flex-end' }}>
             {store.hasProgress() && (
                 <button className="btn-primary animate-bounce" onClick={handleContinueSinglePlayer} style={{ background: '#f59e0b', padding: '0.8rem 2rem', fontSize: '1.2rem', boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)', color: 'white', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                   PALAA PELIIN
                 </button>
             )}
             
             {store.hasProgress() && <div style={{ width: '2px', height: '40px', background: '#cbd5e1', margin: '0 0.5rem', display: window.innerWidth > 600 ? 'block' : 'none' }}></div>}

             <form onSubmit={handleRestoreCloudSave} style={{ display: 'flex', gap: '0.5rem', alignItems: 'stretch' }}>
                  <div style={{ display: 'flex', background: 'white', borderRadius: '8px', border: '2px solid #475569', overflow: 'hidden', height: store.hasProgress() ? '45px' : '40px' }}>
                      <div style={{ background: '#1d4ed8', width: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.65rem' }}>
                          <div style={{ gridTemplateColumns: 'repeat(3, 1fr)', width: '16px', height: '16px', gap: '1px', display: 'grid', justifyContent: 'center', alignContent: 'center', marginBottom: '2px' }}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <div key={i} style={{ width: '4px', height: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i !== 4 && <Zap size={4} fill="#fef08a" color="#fef08a" strokeWidth={1} />}</div>)}
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
                         style={{ width: store.hasProgress() ? '110px' : '90px', padding: '0 0.5rem', border: 'none', fontFamily: 'monospace', fontSize: store.hasProgress() ? '1rem' : '0.9rem', textAlign: 'center', outline: 'none', letterSpacing: '1px', fontWeight: 'bold', color: '#1e293b' }}
                      />
                  </div>
                  <button type="submit" disabled={isRestoring || loadCode.length < 6} style={{ background: store.hasProgress() ? '#0d9488' : '#94a3b8', color: 'white', border: 'none', padding: '0 1rem', borderRadius: '8px', cursor: (isRestoring || loadCode.length < 6) ? 'not-allowed' : 'pointer', opacity: (isRestoring || loadCode.length < 6) ? 0.5 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {isRestoring ? '...' : <ArrowRight size={20} />}
                  </button>
             </form>
          </div>
      </div>
      </div>

      {modalState && (
         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={modalState.onClose}>
            <div className="animate-bounce" style={{ position: 'relative', background: 'rgba(255,255,255,0.95)', padding: 'clamp(1rem, 2vh, 2rem)', borderRadius: '16px', border: '4px solid #0ea5e9', color: 'var(--text-main)', textAlign: 'center', boxShadow: '0 15px 50px rgba(0,0,0,0.3)', width: '95%', maxWidth: '600px' }} onClick={e => e.stopPropagation()}>
               <button onClick={modalState.onClose} style={{ position: 'absolute', top: 'clamp(0.5rem, 1vh, 0.8rem)', right: 'clamp(0.5rem, 1vh, 0.8rem)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={24} /></button>
               <h3 style={{ margin: '0 0 clamp(0.2rem, 1vh, 1rem) 0', color: '#0ea5e9', fontSize: 'clamp(1.2rem, 2.5vh, 1.8rem)', fontFamily: 'var(--font-display)' }}>{modalState.title}</h3>
               <p style={{ margin: '0 0 clamp(0.5rem, 1.5vh, 2rem) 0', fontSize: 'clamp(0.9rem, 1.8vh, 1.1rem)', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>{modalState.text}</p>
               <button className="btn-primary" style={{ background: '#0ea5e9', width: '100%', fontSize: 'clamp(1rem, 2vh, 1.2rem)', padding: 'clamp(0.6rem, 1.5vh, 1rem)' }} onClick={modalState.onClose}>
                  {modalState.buttonText || 'OK'}
               </button>
            </div>
         </div>
      )}

      {showInfoBox && (
         <div className="animate-fade-in" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(3px)' }} onClick={() => setShowInfoBox(false)} />
            <div style={{ position: 'relative', padding: 'clamp(1rem, 2vh, 2rem) clamp(1rem, 2vh, 1.5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1250px', zIndex: 10, textAlign: 'center' }}>
               <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', borderRadius: '36px', zIndex: -1, pointerEvents: 'none' }} />
               <button onClick={() => setShowInfoBox(false)} style={{ position: 'absolute', top: 'clamp(0.8rem, 1.5vh, 1.5rem)', right: 'clamp(0.8rem, 1.5vh, 1.5rem)', background: 'rgba(255,255,255,0.8)', border: 'none', cursor: 'pointer', color: '#64748b', padding: 'clamp(0.4rem, 1vh, 0.6rem)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}><X size={26} /></button>
               
               <h2 style={{ fontSize: 'clamp(1.8rem, 4vh, 3.2rem)', background: 'linear-gradient(135deg, #10b981, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-display)', margin: '0 0 clamp(1rem, 2vh, 2rem) 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  Kuskit ja apukuskit
               </h2>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.8rem, 2vh, 2.5rem)', width: '100%', maxWidth: '1100px', fontFamily: 'var(--font-main)', flexGrow: 1, justifyContent: 'center' }}>
                  
                  {/* Kehittäjät */}
                  <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1rem, 2vh, 2.5rem) clamp(1rem, 2vh, 2rem)', border: '3px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: '#64748b', fontWeight: '900', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 'clamp(1rem, 2vh, 2rem)' }}>
                          <Users size={24} color="#0ea5e9" /> Vastaavat Kehittäjät
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: 'clamp(0.5rem, 1vh, 1.2rem)', width: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1rem' }}>
                              <img src="/edukslogo.png" alt="Eduksi logo" style={{ height: 'clamp(40px, 6vh, 65px)', objectFit: 'contain', opacity: 0.95 }} />
                          </div>
                          <div style={{ fontSize: 'clamp(1.5rem, 3vh, 2rem)', fontWeight: 'bold', color: '#cbd5e1', display: 'flex', alignItems: 'center' }}>:</div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.3rem, 1vh, 0.8rem)', padding: 'clamp(0.6rem, 1.5vh, 1.2rem) clamp(0.8rem, 2vh, 1.8rem)', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: 'clamp(0.95rem, 2vh, 1.3rem)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '220px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Settings size={20} color="#0284c7" /> <BookOpen size={20} color="#0284c7" /> <Paintbrush size={20} color="#0284c7" /></div>
                              Miika Miinin
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.3rem, 1vh, 0.8rem)', padding: 'clamp(0.6rem, 1.5vh, 1.2rem) clamp(0.8rem, 2vh, 1.8rem)', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: 'clamp(0.95rem, 2vh, 1.3rem)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '200px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Settings size={20} color="#0284c7" /> <BookOpen size={20} color="#0284c7" /></div>
                              Heikki Laivamaa
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.3rem, 1vh, 0.8rem)', padding: 'clamp(0.6rem, 1.5vh, 1.2rem) clamp(0.8rem, 2vh, 1.8rem)', background: '#ffffff', color: '#1e293b', border: '2px solid #cbd5e1', borderRadius: '20px', fontWeight: 'bold', fontSize: 'clamp(0.95rem, 2vh, 1.3rem)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', flex: 1, minWidth: '200px' }}>
                              <div style={{ display: 'flex', gap: '0.8rem' }}><Paintbrush size={20} color="#0284c7" /></div>
                              Pauli Hirvonen
                          </div>
                      </div>
                  </div>
 
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 2vh, 2rem)' }}>
                      {/* Konsultit */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1rem, 2vh, 2rem)', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: 'clamp(0.85rem, 2vh, 1.1rem)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 'clamp(1rem, 2vh, 1.5rem)' }}>
                              <GraduationCap size={20} color="#ca8a04" /> Kiitos konsultoinnista!
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vh, 1.2rem)', flexGrow: 1, justifyContent: 'center' }}>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: 'clamp(0.6rem, 1.5vh, 1.2rem)', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <ShieldCheck size={20} color="#ca8a04" /> Ville Myllys
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: 'clamp(0.6rem, 1.5vh, 1.2rem)', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <Paintbrush size={20} color="#ca8a04" /> Ville Schalin
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: 'clamp(0.6rem, 1.5vh, 1.2rem)', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                  <Settings size={20} color="#ca8a04" /> Matti Riikonen
                              </span>
                          </div>
                      </div>
 
                      {/* Testaajat */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1rem, 2vh, 2rem)', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: 'clamp(0.85rem, 2vh, 1.1rem)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 'clamp(1rem, 2vh, 1.5rem)' }}>
                              <Play size={20} color="#10b981" /> Pelitestaajat
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(0.4rem, 1vh, 1rem)', flexGrow: 1, alignContent: 'center' }}>
                              {['Samu', 'Saaga', 'Eemi', 'Anne Rongas', 'Lauri Ylä-Jussila', 'Kari A. Hintikka'].map(name => (
                                  <span key={name} style={{ padding: 'clamp(0.4rem, 1vh, 0.8rem) clamp(0.8rem, 1.5vh, 1.5rem)', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '100px', fontWeight: 'bold', fontSize: 'clamp(0.85rem, 2vh, 1.1rem)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                                      {name}
                                  </span>
                              ))}
                          </div>
                      </div>
 
                      {/* AI Palvelut */}
                      <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1rem, 2vh, 2rem)', border: '2px solid #e2e8f0', boxShadow: '0 6px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#64748b', fontWeight: '900', fontSize: 'clamp(0.85rem, 2vh, 1.1rem)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 'clamp(1rem, 2vh, 1.5rem)' }}>
                              <Zap size={20} color="#f97316" /> Tekoälypalvelut
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vh, 1.2rem)', flexGrow: 1, justifyContent: 'center' }}>
                              {['Google Antigravity', 'NotebookLM', 'Google Gemini'].map(name => (
                                  <span key={name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(0.6rem, 1.5vh, 1.2rem)', background: '#ffffff', color: '#334155', border: '2px solid #cbd5e1', borderRadius: '16px', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 2vh, 1.2rem)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
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
