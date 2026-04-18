import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../services/store';
import { Settings, ChevronLeft, RefreshCcw, Info } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  
  // -- Rooms State (for count only) --
  const [rooms, setRooms] = useState([]);

  // -- Bug Reports State --
  const [bugReports, setBugReports] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  const expectedHash = '43e0a67e19a08df07e5d2e6ae5dbf2d27b87a16caee2d5c93a36b1a15e8cf415';

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const msgUint8 = new TextEncoder().encode(passwordInput);
          const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          
          if (hashHex === expectedHash) {
              setIsAuthenticated(true);
              setAuthError(false);
          } else {
              setAuthError(true);
              setPasswordInput('');
          }
      } catch (err) {
          console.error(err);
      }
  };

  const loadData = async () => {
    setLoading(true);
    const r = store.getAllRooms();
    setRooms(r);
    
    // Load bugs from Firebase
    if (store.getBugReports) {
      const reports = await store.getBugReports();
      setBugReports(reports);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
        setTimeout(() => {
           loadData();
        }, 0);
    }
     
  }, [isAuthenticated]);



  if (!isAuthenticated) {
      return (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem', background: '#f8fafc' }}>
             <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
                 <Settings size={64} color="#334155" style={{ marginBottom: '1rem' }} />
                 <h2 style={{ fontFamily: 'var(--font-display)', margin: '0 0 1.5rem 0', color: '#1e293b' }}>Ylläpito</h2>
                 <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} placeholder="Salasana" style={{ padding: '1rem', borderRadius: '8px', border: '2px solid #cbd5e1', fontSize: '1.1rem', outline: 'none' }} />
                    {authError && <div style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 'bold' }}>Väärä salasana</div>}
                    <button type="submit" className="btn-primary" style={{ background: '#334155', padding: '1rem', fontSize: '1.1rem' }}>Kirjaudu</button>
                    <button type="button" className="btn-secondary" onClick={() => navigate('/lobby')} style={{ padding: '0.8rem' }}>Peruuta</button>
                 </form>
             </div>
          </div>
      );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Settings size={40} color="#334155" />
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: '#1e293b' }}>Ylläpito</h1>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Admin-työkalut sisällön ja huoneiden ylläpitoon</p>
          </div>
        </div>
        <button className="btn-secondary" onClick={() => navigate('/lobby')}>
          <ChevronLeft size={18} /> Takaisin Aulaan
        </button>
      </div>

      {/* Overview Stat */}
      <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
         <Info size={28} color="#0ea5e9" />
         <span style={{ fontSize: '1.2rem', color: '#334155', fontWeight: 'bold' }}>
            Aktiivisia opettajien luokkatiloja järjestelmässä: <span style={{ background: '#0ea5e9', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px' }}>{rooms.length}</span>
         </span>
      </div>

      {/* BUGS SECTION */}
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Avoimet Virheilmoitukset <span style={{ background: '#e2e8f0', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '1rem' }}>{bugReports.length}</span></h2>
          <button className="btn-secondary" onClick={loadData} disabled={loading} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCcw size={16} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            {loading ? 'Ladataan...' : 'Päivitä'}
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {loading && <p style={{ color: 'var(--text-muted)' }}>Haetaan raportteja Firebasesta...</p>}
            {!loading && bugReports.length === 0 && (
              <p style={{ color: 'var(--text-muted)' }}>Ei uusia virheilmoituksia. Kaikki kunnossa!</p>
            )}
            {bugReports.map(report => (
              <div key={report.id} style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #f59e0b', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 300px' }}>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>{new Date(report.date).toLocaleString('fi-FI')}</div>
                      <h4 style={{ margin: '0 0 0.5rem 0', fontFamily: 'monospace', color: 'var(--primary-color)' }}>Kysymys: {report.questionId}</h4>
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#1e293b' }}>{report.text}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button className="btn-secondary" style={{ color: '#16a34a', borderColor: '#bbf7d0', padding: '0.6rem 1.2rem', whiteSpace: 'nowrap' }} onClick={async () => {
                          if (window.confirm('Kuitataanko ilmoitus käsitellyksi ja poistetaanko se listalta?')) {
                              await store.deleteBugReport(report.id);
                              loadData();
                          }
                      }}>
                          Kuittaa selvitetyksi
                      </button>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
