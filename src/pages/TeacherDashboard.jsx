import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, LogOut, Users, Settings, Play, Pause, Zap, Medal, Star, Maximize, X, AlertTriangle, Disc, Wrench, Info } from 'lucide-react';
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
     const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
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

  const giveSparksToAll = async (amount) => {
      if (!sessionCode) return;
      const tid = Date.now();
      const promises = players.map(p => 
          setDoc(doc(db, "class_sessions", sessionCode, "players", p.id), {
              teacherGift: { amount, id: tid + '_' + p.id }
          }, { merge: true })
      );
      await Promise.all(promises);
  };

  const giveBoostToAll = async (color, amount) => {
      if (!sessionCode) return;
      const tid = Date.now();
      const promises = players.map(p => 
          setDoc(doc(db, "class_sessions", sessionCode, "players", p.id), {
              teacherBoostsGift: { color, amount, id: tid + '_' + p.id }
          }, { merge: true })
      );
      await Promise.all(promises);
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
    <div className="animate-fade-in" style={{ padding: '3rem 2rem', boxSizing: 'border-box', margin: '0 auto', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(16px)', padding: '1.5rem 2.5rem', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', padding: '1rem', borderRadius: '20px', boxShadow: '0 10px 20px rgba(2, 132, 199, 0.2)' }}>
                  <ShieldCheck size={36} color="white" />
              </div>
              <div>
                  <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: '#0f172a', letterSpacing: '-0.5px' }}>Komentokeskus</h1>
                  <p style={{ margin: '0.2rem 0 0 0', color: '#64748b', fontSize: '1.1rem', fontWeight: 500 }}>Opettajan hallintapaneeli</p>
              </div>
           </div>
           
           <button onClick={() => navigate('/lobby')} style={{ padding: '0.8rem 1.5rem', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '14px', color: '#475569', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={e=>{e.currentTarget.style.background='rgba(255, 255, 255, 0.5)'; e.currentTarget.style.transform='translateY(0)'}}>
               <LogOut size={20} /> Sulje
           </button>
        </div>

        {!sessionCode ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, gap: '2rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', padding: '5rem 4rem', borderRadius: '32px', textAlign: 'center', maxWidth: '650px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
                    <div style={{ display: 'inline-flex', background: '#f0f9ff', padding: '1.5rem', borderRadius: '24px', marginBottom: '1.5rem', border: '2px solid #bae6fd', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.1)' }}>
                        <Users size={64} color="#0284c7" />
                    </div>
                    <h2 style={{ fontSize: '2.4rem', margin: '0 0 1rem 0', fontFamily: 'var(--font-display)', color: '#0f172a', letterSpacing: '-0.5px' }}>Uusi oppitunti</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem', lineHeight: 1.6 }}>Seuraa oppilaiden edistymistä reaaliajassa, palkitse heitä juhlallisilla Kipinöillä ja ota luokka haltuun lukitsemalla näytöt tarvittaessa.</p>
                    
                    {/* PIN input for new session */}
                    <div style={{ marginBottom: '2rem', textAlign: 'left', background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.8rem', fontSize: '1rem' }}>
                            <Lock size={18} color="#3b82f6" /> Luo PIN-koodi (väh. 4 merkkiä)
                        </label>
                        <input
                            type="password"
                            placeholder="Esim. 1234"
                            value={newPin}
                            maxLength={8}
                            onChange={e => { setNewPin(e.target.value); setErrorMsg(''); }}
                            style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '14px', border: '2px solid #cbd5e1', fontSize: '1.2rem', outline: 'none', boxSizing: 'border-box', letterSpacing: '4px', transition: 'border-color 0.2s', background: '#f8fafc' }}
                            onFocus={e => e.target.style.borderColor = '#3b82f6'}
                            onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                        />
                        <p style={{ margin: '0.8rem 0 0 0', fontSize: '0.9rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Info size={14}/> Tarvitset koodin jos jatkat tuntia myöhemmin.</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', marginBottom: '2.5rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', textAlign: 'left', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => setRequireTutorial(!requireTutorial)} onMouseOver={e=>e.currentTarget.style.background='#f1f5f9'} onMouseOut={e=>e.currentTarget.style.background='#f8fafc'}>
                       <input type="checkbox" id="tut" checked={requireTutorial} onChange={e => setRequireTutorial(e.target.checked)} style={{ minWidth: '24px', height: '24px', cursor: 'pointer', marginTop: '3px', accentColor: '#3b82f6' }} onClick={e => e.stopPropagation()} />
                       <label htmlFor="tut" style={{ fontSize: '1rem', color: '#475569', cursor: 'pointer', lineHeight: 1.5, margin: 0 }} onClick={e => e.stopPropagation()}>
                           <strong style={{ display: 'block', marginBottom: '0.3rem', color: '#0f172a', fontSize: '1.1rem' }}>Opastus ensikertalaisille (Tutorial)</strong> Varmista, että uudet oppilaat käyvät pelin pikaoppaan läpi ymmärtääkseen miten Kipinöitä jaetaan.
                       </label>
                    </div>

                    {errorMsg && (
                        <div className="animate-shake" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem 1.2rem', borderRadius: '14px', marginBottom: '1.5rem', color: '#dc2626', fontWeight: 'bold', textAlign: 'left', boxShadow: '0 4px 10px rgba(220, 38, 38, 0.1)' }}>
                            <AlertTriangle size={20} color="#dc2626" /> {errorMsg}
                        </div>
                    )}
                    
                    <button 
                        onClick={createSession} 
                        style={{ width: '100%', padding: '1.2rem', fontSize: '1.3rem', background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', color: 'white', border: 'none', borderRadius: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.3)', transition: 'all 0.2s', letterSpacing: '1px' }}
                        onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} 
                        onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}
                    >
                        PERUSTA LUOKKA
                    </button>
                    
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2.5rem 0' }}>
                        <div style={{ flexGrow: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                        <span style={{ color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 1rem' }}>TAI</span>
                        <div style={{ flexGrow: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                    </div>
                    
                    <h3 style={{ fontSize: '1.5rem', margin: '0 0 1.5rem 0', fontFamily: 'var(--font-display)', color: '#0f172a' }}>Jatka aiempaa tuntia</h3>
                    <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
                       <input 
                          type="text" 
                          placeholder="Huonekoodi (A8X1)"
                          value={resumeCode}
                          maxLength={6}
                          onChange={(e) => { setResumeCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '')); setErrorMsg(''); }}
                          style={{ flexGrow: 1, padding: '1rem 1.2rem', borderRadius: '14px', border: '2px solid #cbd5e1', fontSize: '1.1rem', textAlign: 'center', fontWeight: 'bold', letterSpacing: '2px', outline: 'none', transition: 'border-color 0.2s', background: '#f8fafc' }}
                          onFocus={e => e.target.style.borderColor = '#10b981'}
                          onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                       />
                       <input 
                          type="password" 
                          placeholder="PIN"
                          value={resumePin}
                          maxLength={8}
                          onChange={(e) => { setResumePin(e.target.value); setErrorMsg(''); }}
                          style={{ width: '120px', padding: '1rem', borderRadius: '14px', border: '2px solid #cbd5e1', fontSize: '1.1rem', textAlign: 'center', fontWeight: 'bold', letterSpacing: '4px', outline: 'none', transition: 'border-color 0.2s', background: '#f8fafc' }}
                          onFocus={e => e.target.style.borderColor = '#10b981'}
                          onBlur={e => e.target.style.borderColor = '#cbd5e1'}
                       />
                    </div>
                    <button onClick={resumeExistingSession} disabled={resumeCode.length < 6 || resumePin.length < 4} style={{ background: 'white', color: '#10b981', border: '2px solid #10b981', padding: '1rem 2rem', borderRadius: '14px', fontWeight: 'bold', cursor: (resumeCode.length < 6 || resumePin.length < 4) ? 'not-allowed' : 'pointer', opacity: (resumeCode.length < 6 || resumePin.length < 4) ? 0.5 : 1, width: '100%', fontSize: '1.2rem', transition: 'all 0.2s' }} onMouseOver={e=>{if(!(resumeCode.length < 6 || resumePin.length < 4)){e.currentTarget.style.background='#10b981'; e.currentTarget.style.color='white'; e.currentTarget.style.boxShadow='0 10px 25px rgba(16, 185, 129, 0.3)'}}} onMouseOut={e=>{if(!(resumeCode.length < 6 || resumePin.length < 4)){e.currentTarget.style.background='white'; e.currentTarget.style.color='#10b981'; e.currentTarget.style.boxShadow='none'}}}>
                       PALAUTA ISTUNTO
                    </button>

                </div>
            </div>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) 3fr', gap: '2rem', alignItems: 'start' }}>
                
                {/* Sidebar */}
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', padding: '2.5rem', borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.6)', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    
                    <div>
                      <h3 style={{ margin: '0 0 0.8rem 0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', textAlign: 'center', fontWeight: 'bold' }}>Liittymiskoodi</h3>
                      <div style={{ position: 'relative', background: '#e0f2fe', border: '2px solid #bae6fd', padding: '1.5rem', borderRadius: '24px', fontSize: 'clamp(2rem, 3vw, 3rem)', fontFamily: 'monospace', textAlign: 'center', fontWeight: '900', letterSpacing: '4px', color: '#0369a1', boxShadow: 'inset 0 4px 10px rgba(3, 105, 161, 0.05)' }}>
                          {sessionCode}
                          <button onClick={() => setShowFullscreen(true)} title="Näytä koko ruudulla" style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'white', border: '2px solid #bae6fd', color: '#0369a1', borderRadius: '20px', padding: '0.4rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', boxShadow: '0 8px 15px rgba(2, 132, 199, 0.15)', fontWeight: 'bold', fontSize: '0.9rem', transition: 'transform 0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>
                              <Maximize size={16} /> LAAJENNA
                          </button>
                      </div>
                    </div>
                    
                    <hr style={{ borderColor: '#e2e8f0', margin: 0 }} />

                    <div>
                      <h3 style={{ margin: '0 0 1rem 0', color: '#64748b', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 'bold' }}>Luokan Hallinta</h3>
                      <button 
                         onClick={togglePause}
                         style={{ 
                            background: sessionStatus === 'active' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                            color: 'white',
                            padding: '1.2rem', 
                            width: '100%', 
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '16px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            boxShadow: sessionStatus === 'active' ? '0 10px 25px rgba(16, 185, 129, 0.3)' : '0 10px 25px rgba(245, 158, 11, 0.3)',
                            transition: 'all 0.3s'
                         }}
                         onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'}
                         onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}
                      >
                          {sessionStatus === 'active' ? (
                              <><Pause size={24} fill="white" /> Keskeytä peli luokkatilassa</>
                          ) : (
                              <><Play size={24} fill="white" /> Vapauta pelit</>
                          )}
                      </button>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '1rem 0 0 0', lineHeight: 1.5 }}>
                          Aseta oppilaiden peliruudut väliaikaisesti tauolle saadaksesi heidän huomionsa ohjeistukseen.
                      </p>
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
                      <button onClick={endSession} style={{ background: '#f8fafc', border: '2px solid #e2e8f0', color: '#dc2626', padding: '1rem', width: '100%', borderRadius: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }} onMouseOver={e=>{e.currentTarget.style.background='#fef2f2'; e.currentTarget.style.borderColor='#fecaca'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#e2e8f0'}}>
                          <LogOut size={18} /> Päätä oppitunti
                      </button>
                    </div>
                </div>

                {/* Dashboard / Roster */}
                <div style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', padding: '2.5rem', borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.6)', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', margin: 0, fontFamily: 'var(--font-display)', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Users size={32} color="#0284c7" /> Luokan seuranta</h2>
                        <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.6rem 1.5rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #bae6fd', boxShadow: '0 4px 10px rgba(3, 105, 161, 0.1)' }}>{players.length} Oppilasta mukana</span>
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
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            {/* Anna Kaikille -paneeli */}
                            <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '2rem', borderRadius: '24px', border: '2px solid #bae6fd', boxShadow: '0 10px 30px rgba(2, 132, 199, 0.1)' }}>
                                <h3 style={{ margin: '0 0 1.5rem 0', color: '#0369a1', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontFamily: 'var(--font-display)', letterSpacing: '1px' }}>
                                    <Zap size={24} color="#0ea5e9" fill="#0ea5e9" /> Lähetä resurssipaketti koko luokalle
                                </h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {/* Kipinät Kaikille */}
                                    <div style={{ display: 'flex', gap: '0.8rem', paddingRight: '1rem', borderRight: '2px solid #bae6fd' }}>
                                        <button onClick={() => giveSparksToAll(50)} style={{ background: 'white', color: '#0369a1', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px solid #7dd3fc', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 15px rgba(2, 132, 199, 0.1)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 10px rgba(0,0,0,0.02)'}}>
                                            +50 <Zap size={16} fill="#f59e0b" color="#f59e0b"/>
                                        </button>
                                        <button onClick={() => giveSparksToAll(100)} style={{ background: 'white', color: '#0369a1', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px solid #7dd3fc', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 15px rgba(2, 132, 199, 0.1)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 10px rgba(0,0,0,0.02)'}}>
                                            +100 <Zap size={16} fill="#f59e0b" color="#f59e0b"/>
                                        </button>
                                        <button onClick={() => giveSparksToAll(500)} style={{ background: '#f8fafc', color: '#0284c7', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px solid #0ea5e9', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 15px rgba(2, 132, 199, 0.1)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 10px rgba(0,0,0,0.02)'}}>
                                            +500 <Zap size={16} fill="#f59e0b" color="#f59e0b"/>
                                        </button>
                                    </div>
                                    
                                    {/* Apuvälineet Kaikille */}
                                    <div style={{ display: 'flex', gap: '0.8rem' }}>
                                        <button onClick={() => giveBoostToAll('red', 1)} style={{ background: 'white', color: '#0369a1', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px dashed #7dd3fc', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='#0ea5e9'; e.currentTarget.style.color='#0ea5e9'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='#7dd3fc'; e.currentTarget.style.color='#0369a1'}}>
                                            <ShieldCheck size={16} /> +1 Uusinta
                                        </button>
                                        <button onClick={() => giveBoostToAll('yellow', 1)} style={{ background: 'white', color: '#0369a1', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px dashed #7dd3fc', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='#0ea5e9'; e.currentTarget.style.color='#0ea5e9'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='#7dd3fc'; e.currentTarget.style.color='#0369a1'}}>
                                            <Disc size={16} /> +1 Poisto
                                        </button>
                                        <button onClick={() => giveBoostToAll('green', 1)} style={{ background: 'white', color: '#0369a1', padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', border: '1px dashed #7dd3fc', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='#0ea5e9'; e.currentTarget.style.color='#0ea5e9'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='#7dd3fc'; e.currentTarget.style.color='#0369a1'}}>
                                            <Wrench size={16} /> +1 Vaihto
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Oppilaat */}
                            <div style={{ display: 'grid', gap: '1.2rem' }}>
                            {players.map(p => (
                                <div key={p.id} className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px', background: 'white', gap: '2rem', flexWrap: 'wrap', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.2s' }} onMouseOver={e=>{e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(0,0,0,0.08)'}} onMouseOut={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(0,0,0,0.03)'}}>
                                    
                                    <div style={{ flex: '1 1 200px' }}>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem', color: '#0f172a' }}>{p.id}</h3>
                                        <div style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                                            <Star size={14} color="#f59e0b" fill="#f59e0b" /> Sijainti: {p.location || 'Aula'}
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {/* Stats */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#d97706', background: '#fef3c7', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid #fde68a' }}>
                                                    <Zap size={20} fill="#d97706" /> {p.sparks || 0}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1rem', color: '#334155', background: '#f1f5f9', padding: '0.5rem 0.8rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                                    <Medal size={16} fill="#94a3b8" color="#64748b" title="Platina" /><span style={{color: '#64748b'}}>{p.medals?.platinum || 0}</span>
                                                    <Medal size={16} fill="#f59e0b" color="#d97706" title="Kulta" /> <span style={{color: '#d97706'}}>{p.medals?.gold || 0}</span>
                                                    <Medal size={16} fill="#cbd5e1" color="#94a3b8" title="Hopea" /> <span style={{color: '#94a3b8'}}>{p.medals?.silver || 0}</span>
                                                    <Medal size={16} fill="#b45309" color="#92400e" title="Pronssi" /> <span style={{color: '#92400e'}}>{p.medals?.bronze || 0}</span>
                                                </div>
                                            </div>
                                            {p.globalStats && p.globalStats.attempts > 0 && (
                                                <div style={{ width: '100%', marginTop: '0.4rem' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                                                        <span>Vastaustarkkuus: {p.globalStats.correct} / {p.globalStats.attempts}</span>
                                                        <span style={{ color: Math.round((p.globalStats.correct / p.globalStats.attempts) * 100) >= 80 ? '#10b981' : Math.round((p.globalStats.correct / p.globalStats.attempts) * 100) >= 50 ? '#f59e0b' : '#ef4444' }}>{Math.round((p.globalStats.correct / p.globalStats.attempts) * 100)}%</span>
                                                    </div>
                                                    <div style={{ width: '100%', height: '10px', background: '#f1f5f9', borderRadius: '5px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                                        <div style={{ 
                                                            width: `${Math.round((p.globalStats.correct / p.globalStats.attempts) * 100)}%`, 
                                                            height: '100%', 
                                                            background: Math.round((p.globalStats.correct / p.globalStats.attempts) * 100) >= 80 ? 'linear-gradient(90deg, #34d399, #10b981)' : Math.round((p.globalStats.correct / p.globalStats.attempts) * 100) >= 50 ? 'linear-gradient(90deg, #fbbf24, #f59e0b)' : 'linear-gradient(90deg, #f87171, #ef4444)', 
                                                            borderRadius: '5px', 
                                                            transition: 'width 0.5s ease-out' 
                                                        }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Buff Buttons */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                                <button onClick={() => giveSparks(p.id, 50)} style={{ background: '#f8fafc', color: '#475569', border: '1px solid #cbd5e1', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#94a3b8'; e.currentTarget.style.color='#0f172a'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.color='#475569'}} title="Anna 50 Kipinää">
                                                    +50 <Zap size={14} fill="#f59e0b" color="#f59e0b" />
                                                </button>
                                                <button onClick={() => giveSparks(p.id, 100)} style={{ background: '#f8fafc', color: '#475569', border: '1px solid #cbd5e1', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#94a3b8'; e.currentTarget.style.color='#0f172a'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.color='#475569'}} title="Anna 100 Kipinää">
                                                    +100 <Zap size={14} fill="#f59e0b" color="#f59e0b" />
                                                </button>
                                                <button onClick={() => giveSparks(p.id, 500)} style={{ background: '#f1f5f9', color: '#334155', border: '1px solid #94a3b8', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#64748b'; e.currentTarget.style.color='#0f172a'}} onMouseOut={e=>{e.currentTarget.style.background='#f1f5f9'; e.currentTarget.style.borderColor='#94a3b8'; e.currentTarget.style.color='#334155'}} title="Anna 500 Kipinää!">
                                                    +500 <Zap size={14} fill="#f59e0b" color="#f59e0b" />
                                                </button>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                                <button onClick={() => giveBoost(p.id, 'red', 1)} style={{ background: '#f8fafc', color: '#475569', border: '1px dashed #cbd5e1', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#3b82f6'; e.currentTarget.style.color='#3b82f6'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.color='#475569'}} title="Anna 1 Uusinta">
                                                    <ShieldCheck size={14} /> +1 Uusinta
                                                </button>
                                                <button onClick={() => giveBoost(p.id, 'yellow', 1)} style={{ background: '#f8fafc', color: '#475569', border: '1px dashed #cbd5e1', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#3b82f6'; e.currentTarget.style.color='#3b82f6'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.color='#475569'}} title="Anna 1 Poisto">
                                                    <Disc size={14} /> +1 Poisto
                                                </button>
                                                <button onClick={() => giveBoost(p.id, 'green', 1)} style={{ background: '#f8fafc', color: '#475569', border: '1px dashed #cbd5e1', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s', fontSize: '0.95rem' }} onMouseOver={e=>{e.currentTarget.style.background='white'; e.currentTarget.style.borderColor='#3b82f6'; e.currentTarget.style.color='#3b82f6'}} onMouseOut={e=>{e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.color='#475569'}} title="Anna 1 Vaihto">
                                                    <Wrench size={14} /> +1 Vaihto
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
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
    </div>
  );
}


