import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { store } from '../services/store';
import { ShieldAlert, Trash2, Edit, Save, Plus, ChevronLeft, ChevronDown, ChevronRight, X, AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('rooms'); // rooms, questions
  
  // -- Rooms State --
  const [rooms, setRooms] = useState([]);
  const [roomSparks, setRoomSparks] = useState({});
  const [selectedRooms, setSelectedRooms] = useState(new Set());

  // -- Bug Reports State --
  const [bugReports, setBugReports] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const r = store.getAllRooms();
    setRooms(r);
    
    // Load sparks for each room
    const sparksData = {};
    r.forEach(roomId => {
      sparksData[roomId] = localStorage.getItem(`aivan_sparks_${roomId}`) || '0';
    });
    setRoomSparks(sparksData);

    // Load bugs from Firebase
    if (store.getBugReports) {
      const reports = await store.getBugReports();
      setBugReports(reports);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // -- Room Handlers --
  const handleToggleRoom = (roomId) => {
    const newSelected = new Set(selectedRooms);
    if (newSelected.has(roomId)) newSelected.delete(roomId);
    else newSelected.add(roomId);
    setSelectedRooms(newSelected);
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Haluatko varmasti poistaa ${selectedRooms.size} huonetta?`)) {
      selectedRooms.forEach(roomId => store.deleteRoom(roomId));
      setSelectedRooms(newSelected => new Set());
      loadData();
    }
  };

  const handleDeleteRoom = (roomId) => {
    if (window.confirm(`Poistetaanko huone ${roomId}?`)) {
      store.deleteRoom(roomId);
      loadData();
    }
  };

  const handleUpdateSparks = (roomId) => {
    store.setRoomSparks(roomId, roomSparks[roomId] || 0);
    alert('Kipinät päivitetty!');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ShieldAlert size={40} color="#ef4444" />
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: '#1e293b' }}>Hallintapaneeli</h1>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Admin-työkalut sisällön ja huoneiden ylläpitoon</p>
          </div>
        </div>
        <button className="btn-secondary" onClick={() => navigate('/lobby')}>
          <ChevronLeft size={18} /> Takaisin Aulaan
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          className={activeTab === 'rooms' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => setActiveTab('rooms')}
        >
          Huoneet &amp; Käyttäjät
        </button>
        
        <button 
          className={activeTab === 'bugs' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => setActiveTab('bugs')}
          style={{ position: 'relative' }}
        >
          Virheilmoitukset
          {bugReports.length > 0 && (
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {bugReports.length}
            </span>
          )}
        </button>
      </div>

      {/* ROOMS TAB */}
      {activeTab === 'rooms' && (
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Aktiiviset Huoneet <span style={{ background: '#e2e8f0', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '1rem' }}>{rooms.length}</span></h2>
            {selectedRooms.size > 0 && (
              <button 
                className="btn-primary" 
                style={{ background: '#ef4444' }}
                onClick={handleBulkDelete}
              >
                <Trash2 size={16} /> Poista Valitut ({selectedRooms.size})
              </button>
            )}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '1rem 0.5rem' }}>
                   Valitse
                </th>
                <th style={{ padding: '1rem 0.5rem' }}>Huonekoodi</th>
                <th style={{ padding: '1rem 0.5rem' }}>Kipinät (Sparks)</th>
                <th style={{ padding: '1rem 0.5rem', textAlign: 'right' }}>Toiminnot</th>
              </tr>
            </thead>
            <tbody>
              {rooms.length === 0 && (
                <tr><td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Ei aktiivisia session/huoneita.</td></tr>
              )}
              {rooms.map(room => (
                <tr key={room} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0.5rem' }}>
                    <input 
                      type="checkbox" 
                      style={{ width: '18px', height: '18px' }} 
                      checked={selectedRooms.has(room)}
                      onChange={() => handleToggleRoom(room)}
                    />
                  </td>
                  <td style={{ padding: '1rem 0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>{room}</td>
                  <td style={{ padding: '1rem 0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input 
                        type="number" 
                        value={roomSparks[room] || ''} 
                        onChange={(e) => setRoomSparks({...roomSparks, [room]: e.target.value})}
                        style={{ padding: '0.5rem', width: '100px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      />
                      <button className="btn-secondary" style={{ padding: '0.5rem' }} onClick={() => handleUpdateSparks(room)}>Tallenna</button>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 0.5rem', textAlign: 'right' }}>
                    <button className="btn-secondary" style={{ padding: '0.5rem', color: '#ef4444', borderColor: '#fca5a5' }} onClick={() => handleDeleteRoom(room)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* BUGS TAB */}
      {activeTab === 'bugs' && (
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
                <div key={report.id} style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #ef4444', display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
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
      )}
    </div>
  );
}
