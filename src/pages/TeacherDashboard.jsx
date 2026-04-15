import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogOut, Users, Settings, Play, Pause, Zap, Medal, Star } from 'lucide-react';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot, collection, updateDoc, serverTimestamp } from 'firebase/firestore';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [sessionCode, setSessionCode] = useState('');
  const [sessionStatus, setSessionStatus] = useState('active');
  const [players, setPlayers] = useState([]);
  
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
      const code = generateCode();
      setSessionCode(code);
      setSessionStatus('active');
      
      await setDoc(doc(db, "class_sessions", code), {
          status: 'active',
          createdAt: serverTimestamp()
      });
  };
  
  const endSession = async () => {
      if (window.confirm("Haluatko varmasti sulkea tämän oppitunnin? Oppilaat eivät enää näe peliä.")) {
         // Optionally delete or just mark ended
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
          teacherGift: amount
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
          
          // Sort alphabetically by nickname
          list.sort((a,b) => a.id.localeCompare(b.id));
          setPlayers(list);
      });
      
      return () => unsubscribe();
  }, [sessionCode]);

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem', background: 'white', padding: '1.5rem 2rem', borderRadius: '16px', border: '3px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ShieldCheck size={48} color="#0ea5e9" />
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
                <div style={{ background: 'white', padding: '4rem 3rem', borderRadius: '24px', textAlign: 'center', maxWidth: '600px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '4px solid #f8fafc' }}>
                    <Users size={64} color="#0ea5e9" style={{ marginBottom: '1rem' }} />
                    <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>Aloita oppitunti</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem', lineHeight: 1.6 }}>Luokkatilassa luot satunnaisen koodin, jolla oppilaat kirjautuvat peliin. Näet oppilaiden edistymisen reaaliajassa, voit palkita heitä Kipinöillä ja tarvittaessa lukita peliruudut hetkeksi, jotta he kuuntelevat antamiasi ohjeita.</p>
                    
                    <button className="btn-primary" onClick={createSession} style={{ padding: '1.5rem 3rem', fontSize: '1.5rem', background: '#0ea5e9', width: '100%' }}>
                        Luo uusi pelisessio
                    </button>
                </div>
            </div>
        ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 3fr', gap: '2rem', alignItems: 'start' }}>
                
                {/* Sidebar */}
                <div style={{ background: '#0f172a', color: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
                    <h3 style={{ margin: '0 0 1rem 0', color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px' }}>Liittymiskoodi</h3>
                    <div style={{ background: 'black', padding: '1rem', borderRadius: '12px', fontSize: '3rem', fontFamily: 'monospace', textAlign: 'center', fontWeight: '900', letterSpacing: '8px', marginBottom: '2rem', color: '#38bdf8' }}>
                        {sessionCode}
                    </div>
                    
                    <h3 style={{ margin: '0 0 1rem 0', color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px' }}>Luokan Hallinta</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button 
                           className="btn-primary" 
                           onClick={togglePause}
                           style={{ background: sessionStatus === 'active' ? '#ef4444' : '#10b981', padding: '1.2rem', width: '100%', fontSize: '1.2rem' }}
                        >
                            {sessionStatus === 'active' ? (
                                <><Pause size={24} /> Pysäytä oppitunti!</>
                            ) : (
                                <><Play size={24} /> Vapauta peli</>
                            )}
                        </button>
                        
                        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', opacity: 0.8, margin: 0, lineHeight: 1.5 }}>
                            Pysäytä oppitunti -painike pimentää ja lukitsee kaikkien koodilla liittyneiden pelaajien näytöt välittömästi. Käytä silloin kun tarvitset koko luokan huomion!
                        </p>
                    </div>

                    <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0' }} />

                    <button className="btn-secondary" onClick={endSession} style={{ background: 'transparent', borderColor: '#ef4444', color: '#ef4444', width: '100%' }}>
                        Lopeta sessio lopullisesti
                    </button>
                </div>

                {/* Dashboard / Roster */}
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '3px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                        <h2 style={{ margin: 0, fontSize: '2rem' }}>Aktiiviset oppilaat <span style={{ background: '#e2e8f0', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '1.3rem', marginLeft: '1rem', color: '#0f172a' }}>{players.length}</span></h2>
                    </div>

                    {players.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #cbd5e1' }}>
                            <div className="animate-pulse" style={{ display: 'inline-block', padding: '1rem', background: '#e0f2fe', borderRadius: '50%', marginBottom: '1rem' }}>
                                <Users size={40} color="#0ea5e9" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: '#475569', margin: '0 0 1rem 0' }}>Odotetaan oppilaita...</h3>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Oppilaat voivat liittyä Aulasta klikkaamalla <strong>Liity oppituntiin</strong> painiketta moninpelin vieressä ja syöttämällä koodin <strong>{sessionCode}</strong>.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {players.map(p => (
                                <div key={p.id} className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '16px', background: '#f8fafc', gap: '2rem' }}>
                                    
                                    <div style={{ flex: '1 1 200px' }}>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.4rem' }}>{p.id}</h3>
                                        <div style={{ color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Star size={14} /> Sijainti: {p.location || 'Aula'}
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {/* Stats */}
                                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#d97706', background: '#fef3c7', padding: '0.5rem 1rem', borderRadius: '12px' }}>
                                                <Zap size={20} fill="#d97706" /> {p.sparks || 0}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: '#0f172a', background: '#e2e8f0', padding: '0.5rem 1rem', borderRadius: '12px' }}>
                                                <Medal size={20} /> Platinaa: {p.medals?.platinum || 0}
                                            </div>
                                        </div>

                                        {/* Buff Buttons */}
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button onClick={() => giveSparks(p.id, 50)} style={{ background: '#fef3c7', color: '#d97706', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }} title="Anna 50 Kipinää">
                                                +50 <Zap size={14} fill="#d97706" />
                                            </button>
                                            <button onClick={() => giveSparks(p.id, 100)} style={{ background: '#fed7aa', color: '#c2410c', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }} title="Anna 100 Kipinää">
                                                +100 <Zap size={14} fill="#c2410c" />
                                            </button>
                                            <button onClick={() => giveSparks(p.id, 500)} style={{ background: '#fcd34d', color: '#b45309', border: 'none', padding: '0.5rem 0.8rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem' }} title="Anna 500 Kipinää!">
                                                +500 <Zap size={14} fill="#b45309" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        )}
    </div>
  );
}
