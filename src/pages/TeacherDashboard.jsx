import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, LogOut, Users, Settings, Play, Pause, Zap, Medal, Star, Maximize, X, AlertTriangle, Disc, Wrench } from 'lucide-react';
import { db } from '../firebase';
import { doc, setDoc, getDoc, onSnapshot, collection, updateDoc, serverTimestamp } from 'firebase/firestore';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [sessionCode, setSessionCode] = useState('');
  const [requireTutorial, setRequireTutorial] = useState(true);
  const [sessionStatus, setSessionStatus] = useState('active');
  const [players, setPlayers] = useState([]);
  
  const [resumeCode, setResumeCode] = useState('');
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Protection / Error state
  const [errorMsg, setErrorMsg] = useState('');
  
  // PIN protection
  const [newPin, setNewPin] = useState('');
  const [resumePin, setResumePin] = useState('');
  
  // Generating a readable 6-character code
  const generateCode = () => {
     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
     let result = '';
     for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
     }
     return result;
  };

  const createSession = async () => {
      if (newPin.length < 4) {
          setErrorMsg('Kirjoita vähintään 4-numeroinen PIN-koodi ensin.');
          return;
      }
      const code = generateCode();
      setSessionCode(code);
      setSessionStatus('active');
      setErrorMsg('');
      
      try {
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
          await Promise.race([setDoc(doc(db, "class_sessions", code), {
              status: 'active',
              requireTutorial: requireTutorial,
              teacherPin: newPin,
              createdAt: serverTimestamp()
          }), timeoutPromise]);
      } catch (err) {
          setErrorMsg('Yhteys opettajan paneeliin estetty verkkosi puolelta (Firebase timeout).');
      }
  };

  const resumeExistingSession = async () => {
      if (resumeCode.length < 6 || resumePin.length < 4) {
          setErrorMsg('Täytä koodi ja PIN.');
          return;
      }
      setErrorMsg('Yhdistetään...');
      const code = resumeCode.toUpperCase();
      
      try {
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
          const docSnap = await Promise.race([getDoc(doc(db, "class_sessions", code)), timeoutPromise]);
          
          if (!docSnap.exists()) {
              setErrorMsg('Huonekoodia ei löydy. Tarkista koodi.');
              return;
          }
          const data = docSnap.data();
          if (data.teacherPin && data.teacherPin !== resumePin) {
              setErrorMsg('Väärä PIN-koodi.');
              return;
          }
          setErrorMsg('');
          setSessionCode(code);
      } catch (err) {
          setErrorMsg('Yhteys epäonnistui - verkko estää yhteyden (Firebase timeout).');
      }
  }
  
  const endSession = async () => {
      if (window.confirm("Haluatko varmasti sulkea tämän oppitunnin? Pelaajat eivät enää näe peliä.")) {
         if (sessionCode) {
            await updateDoc(doc(db, "class_sessions", sessionCode), { status: 'ended' });
         }
         setSessionCode('');
         setPlayers([]);
      }
  };

  const togglePause = async () => {
      if (!sessionCode) return;
      const newStatus = sessionStatus === 'active' ? 'paused' : 'active';
      await updateDoc(doc(db, "class_sessions", sessionCode), { status: newStatus });
      setSessionStatus(newStatus);
  };
  
  const giveSparks = async (nickname, amount) => {
      if (!sessionCode) return;
      await setDoc(doc(db, "class_sessions", sessionCode, "players", nickname), {
          teacherGift: { amount, id: Date.now() }
      }, { merge: true });
  };

  const giveBoost = async (nickname, color, amount) => {
      if (!sessionCode) return;
      await setDoc(doc(db, "class_sessions", sessionCode, "players", nickname), {
          teacherBoostsGift: { color, amount, id: Date.now() }
      }, { merge: true });
  };

  useEffect(() => {
      if (!sessionCode) return;
      
      // Listen to players
      const unsubscribe = onSnapshot(collection(db, "class_sessions", sessionCode, "players"), (snapshot) => {
          const list = [];
          snapshot.forEach(doc => {
              list.push({ id: doc.id, ...doc.data() });
          });
          
          list.sort((a,b) => a.id.localeCompare(b.id));
          setPlayers(list);
      });
      
      return () => unsubscribe();
  }, [sessionCode]);

  useEffect(() => {
      if (!sessionCode) return;
      
      const unsubStatus = onSnapshot(doc(db, "class_sessions", sessionCode), (docSnap) => {
          if (docSnap.exists()) {
             setSessionStatus(docSnap.data().status || 'active');
          }
      });
      return () => unsubStatus();
  }, [sessionCode]);

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '16px', border: '3px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ShieldCheck size={48} color="#0284c7" />
              <div>
                  <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: '#0f172a' }}>Opettajan Paneeli</h1>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '1.2rem' }}>Pelin ohjaus ja oppilaiden seuranta luokkatilassa</p>
              </div>
           </div>
           
           <button className="btn-secondary" onClick={() => navigate('/lobby')} style={{ padding: '0.8rem 1.5rem' }}>
               <LogOut size={20} /> Poistu
           </button>
        </div>

        {!sessionCode ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: '2rem' }}>
                <div style={{ background: 'white', padding: '4rem 3rem', borderRadius: '24px', textAlign: 'center', maxWidth: '600px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '2px solid #e2e8f0' }}>
                    <Users size={64} color="#0284c7" style={{ marginBottom: '1rem' }} />
                    <h2 style={{ fontSize: '2.2rem', margin: '0 0 1rem 0', fontFamily: 'var(--font-display)', color: '#0f172a' }}>Aloita oppitunti</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>Luokkatilassa opettajana seuraat oppilaiden edistymistä reaaliajassa, palkitset heitä Kipinöillä ja voit tarvittaessa lukita peliruudut hetkeksi saadaksesi luokan huomion.</p>
                    


                    {/* PIN input for new session */}
                    <div style={{ marginBottom: '1.5rem', textAlign: 'left', background: '#eff6ff', padding: '1.2rem', borderRadius: '12px', border: '2px solid #bfdbfe' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                            <Lock size={16} /> Luo oppitunnin PIN-suoja (vähintään 4 merkkiä)
                        </label>
                        <input
                            type="password"
                            placeholder="Esim. 1234"
                            value={newPin}
                            maxLength={8}
                            onChange={e => { setNewPin(e.target.value); setErrorMsg(''); }}
                            style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '2px solid #93c5fd', fontSize: '1.1rem', outline: 'none', boxSizing: 'border-box', letterSpacing: '4px' }}
                        />
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#3b82f6' }}>Tarvitset tätä koodia jos haluat jatkaa oppituntia myöhemmin. Muista se!</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
                       <input type="checkbox" id="tut" checked={requireTutorial} onChange={e => setRequireTutorial(e.target.checked)} style={{ minWidth: '24px', height: '24px', cursor: 'pointer', marginTop: '3px' }} />
                       <label htmlFor="tut" style={{ fontSize: '1rem', color: '#334155', cursor: 'pointer', lineHeight: 1.4, margin: 0 }}>
                           <strong style={{ display: 'block', marginBottom: '0.2rem', color: '#0f172a' }}>Näytä pelin opastus (Tutorial) oppilaille</strong> Pidä tämä oletuksena päällä kun ohjaat luokkaa ensimmäistä kertaa, jotta pelin mekaniikka ja tarkoitus aukeaa oikein.
                       </label>
                    </div>

                    {errorMsg && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fef2f2', border: '1px solid #fecaca', padding: '0.8rem 1rem', borderRadius: '10px', marginBottom: '1rem', color: '#dc2626', fontWeight: 'bold', textAlign: 'left' }}>
                            <AlertTriangle size={18} /> {errorMsg}
                        </div>
                    )}

                    <button className="btn-primary" onClick={createSession} disabled={newPin.length < 4} style={{ padding: '1.5rem 3rem', fontSize: '1.5rem', background: newPin.length < 4 ? '#94a3b8' : '#0284c7', width: '100%', marginBottom: '2rem', cursor: newPin.length < 4 ? 'not-allowed' : 'pointer' }}>
                        Luo uusi pelisessio
                    </button>
                    
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2rem 0' }}>
                        <div style={{ flexGrow: 1, height: '1px', background: '#e2e8f0' }}></div>
                        <span style={{ color: '#3b82f6', margin: '0 1rem', fontWeight: 'bold' }}>TAI</span>
                        <div style={{ flexGrow: 1, height: '1px', background: '#e2e8f0' }}></div>
                    </div>
                    
                    <p style={{ color: '#475569', fontWeight: 'bold', marginBottom: '1rem' }}>Jatka aiempaa oppituntia</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
                       <input 
                          type="text" 
                          placeholder="Huonekoodi (ABCDEF)"
                          value={resumeCode}
                          maxLength={6}
                          onChange={(e) => { setResumeCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')); setErrorMsg(''); }}
                          style={{ flexGrow: 1, padding: '1rem', borderRadius: '12px', border: '2px solid #cbd5e1', fontSize: '1.1rem', textAlign: 'center', fontWeight: 'bold', letterSpacing: '2px', outline: 'none' }}
                       />
                       <input 
                          type="password" 
                          placeholder="PIN"
                          value={resumePin}
                          maxLength={8}
                          onChange={(e) => { setResumePin(e.target.value); setErrorMsg(''); }}
                          style={{ width: '100px', padding: '1rem', borderRadius: '12px', border: '2px solid #cbd5e1', fontSize: '1.1rem', textAlign: 'center', fontWeight: 'bold', letterSpacing: '4px', outline: 'none' }}
                       />
                    </div>
                    <button onClick={resumeExistingSession} disabled={resumeCode.length < 6 || resumePin.length < 4} style={{ background: '#10b981', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '12px', fontWeight: 'bold', cursor: (resumeCode.length < 6 || resumePin.length < 4) ? 'not-allowed' : 'pointer', opacity: (resumeCode.length < 6 || resumePin.length < 4) ? 0.5 : 1, width: '100%', fontSize: '1.1rem' }}>
                       Jatka oppituntia
                    </button>

                </div>
            </div>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 3fr', gap: '2rem', alignItems: 'start' }}>
                
                {/* Sidebar */}
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '3px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', textAlign: 'center' }}>Liittymiskoodi</h3>
                      <div style={{ position: 'relative', background: '#f8fafc', border: '2px dashed #cbd5e1', padding: '1.5rem', borderRadius: '16px', fontSize: '3rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: '900', letterSpacing: '6px', color: '#0284c7' }}>
                          {sessionCode}
                          <button onClick={() => setShowFullscreen(true)} title="Näytä koko ruudulla" style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'white', border: '2px solid #cbd5e1', color: '#64748b', borderRadius: '20px', padding: '0.4rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', fontWeight: 'bold', fontSize: '0.9rem' }}>
    <Maximize size={16} /> LAAJENNA
   </button>
                      </div>
                    </div>
                    
                    <hr style={{ borderColor: '#e2e8f0', margin: 0 }} />

                    <div>
                      <h3 style={{ margin: '0 0 1rem 0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px' }}>Luokan Hallinta</h3>
                      <button 
                         onClick={togglePause}
                         style={{ 
                            background: sessionStatus === 'active' ? '#0f766e' : '#10b981', 
                            color: 'white',
                            padding: '1.2rem', 
                            width: '100%', 
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                            transition: '0.3s'
                         }}
                      >
                          {sessionStatus === 'active' ? (
                              <><Pause size={24} /> Keskustelutauko luokalle</>
                          ) : (
                              <><Play size={24} /> Vapauta peli luokalle</>
                          )}
                      </button>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '1rem 0 0 0', lineHeight: 1.5 }}>
                          Tämä painike asettaa oppilaiden pelit väliaikaisesti tauolle, kun haluat antaa yhteisiä ohjeita luokalle.
                      </p>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
                      <button onClick={endSession} style={{ background: 'transparent', border: '2px solid #e2e8f0', color: '#64748b', padding: '1rem', width: '100%', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                          <LogOut size={18} /> Sulje oppitunti
                      </button>
                    </div>
                </div>

                {/* Dashboard / Roster */}
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '3px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                        <h2 style={{ margin: 0, fontSize: '2rem', color: '#0f172a' }}>Aktiiviset oppilaat <span style={{ background: '#f1f5f9', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '1.3rem', marginLeft: '1rem', color: '#334155' }}>{players.length}</span></h2>
                    </div>

                    {players.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #cbd5e1' }}>
                            <div className="animate-pulse" style={{ display: 'inline-block', padding: '1rem', background: '#e0f2fe', borderRadius: '50%', marginBottom: '1rem' }}>
                                <Users size={40} color="#0ea5e9" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: '#475569', margin: '0 0 1rem 0' }}>Odotetaan oppilaita...</h3>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Oppilaat voivat liittyä Aulasta klikkaamalla <strong>Liity oppituntiin</strong> painiketta ja syöttämällä koodin <strong>{sessionCode}</strong>.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {players.map(p => (
                                <div key={p.id} className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '16px', background: '#f8fafc', gap: '2rem' }}>
                                    
                                    <div style={{ flex: '1 1 200px' }}>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', color: '#0f172a' }}>{p.id}</h3>
                                        <div style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                                            <Star size={14} color="#f59e0b" fill="#f59e0b" /> Sijainti: {p.location || 'Aula'}
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {/* Stats */}
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#d97706', background: '#fef3c7', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #fde68a' }}>
                                                <Zap size={20} fill="#d97706" /> {p.sparks || 0}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#334155', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                                <Medal size={20} fill="#94a3b8" color="#64748b" /> Platinaa: {p.medals?.platinum || 0}
                                            </div>
                                        </div>

                                        {/* Buff Buttons */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button onClick={() => giveSparks(p.id, 50)} style={{ background: '#fef3c7', color: '#d97706', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 50 Kipinää">
                                                    +50 <Zap size={14} fill="#d97706" />
                                                </button>
                                                <button onClick={() => giveSparks(p.id, 100)} style={{ background: '#fed7aa', color: '#c2410c', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 100 Kipinää">
                                                    +100 <Zap size={14} fill="#c2410c" />
                                                </button>
                                                <button onClick={() => giveSparks(p.id, 500)} style={{ background: '#fcd34d', color: '#b45309', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 500 Kipinää!">
                                                    +500 <Zap size={14} fill="#b45309" />
                                                </button>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button onClick={() => giveBoost(p.id, 'red', 1)} style={{ background: '#fee2e2', color: '#ef4444', border: '1px solid #fca5a5', padding: '0.4rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 1 Uusinta">
                                                    <ShieldCheck size={14} /> +1 Uusinta
                                                </button>
                                                <button onClick={() => giveBoost(p.id, 'yellow', 1)} style={{ background: '#fef08a', color: '#ca8a04', border: '1px solid #fde047', padding: '0.4rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 1 Poisto">
                                                    <Disc size={14} /> +1 Poisto
                                                </button>
                                                <button onClick={() => giveBoost(p.id, 'green', 1)} style={{ background: '#dcfce7', color: '#22c55e', border: '1px solid #bbf7d0', padding: '0.4rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', transition: '0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'} title="Anna 1 Vaihto">
                                                    <Wrench size={14} /> +1 Vaihto
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        )}

        {/* Fullscreen Code Modal */}
        {showFullscreen && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(224, 242, 254, 0.95) 0%, rgba(219, 234, 254, 0.95) 100%)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }} onClick={() => setShowFullscreen(false)}>
                <p style={{ color: '#94a3b8', fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', letterSpacing: '2px' }}>Liity peliin koodilla:</p>
                <div style={{ background: 'white', padding: '4rem 8rem', borderRadius: '32px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
                    <h1 style={{ fontSize: '10rem', margin: 0, fontFamily: 'monospace', letterSpacing: '1rem', color: '#0284c7', lineHeight: 1 }}>{sessionCode}</h1>
                </div>
                <button style={{ position: 'absolute', top: '3rem', right: '3rem', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setShowFullscreen(false)}>
                    <X size={64} color="#3b82f6" />
                </button>
            </div>
        )}

    </div>
  );
}
