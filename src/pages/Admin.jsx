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

  // -- Questions State --
  const [categories, setCategories] = useState([]);
  const [expandedCats, setExpandedCats] = useState(new Set());
  const [expandedSubs, setExpandedSubs] = useState(new Set());
  const [editingQuestion, setEditingQuestion] = useState(null); // { catId, subId, qIdx, data }

  const loadData = () => {
    const r = store.getAllRooms();
    setRooms(r);
    
    // Load sparks for each room
    const sparksData = {};
    r.forEach(roomId => {
      sparksData[roomId] = localStorage.getItem(`aivan_sparks_${roomId}`) || '0';
    });
    setRoomSparks(sparksData);

    setCategories(store.getQuestions());
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

  // -- Question Handlers --
  const toggleCat = (catId) => {
    const n = new Set(expandedCats);
    n.has(catId) ? n.delete(catId) : n.add(catId);
    setExpandedCats(n);
  };

  const toggleSub = (subId) => {
    const n = new Set(expandedSubs);
    n.has(subId) ? n.delete(subId) : n.add(subId);
    setExpandedSubs(n);
  };

  const saveEditedQuestion = () => {
    if (!editingQuestion) return;
    const { catId, subId, qIdx, data } = editingQuestion;
    
    const newCats = [...categories];
    const cIdx = newCats.findIndex(c => c.id === catId);
    const sIdx = newCats[cIdx].subcategories.findIndex(s => s.id === subId);
    
    if (qIdx === -1) {
      // New question
      newCats[cIdx].subcategories[sIdx].questions.push(data);
    } else {
      // Update
      newCats[cIdx].subcategories[sIdx].questions[qIdx] = data;
    }
    
    setCategories(newCats);
    store.saveQuestions(newCats);
    setEditingQuestion(null);
  };

  const deleteQuestion = (catId, subId, qIdx) => {
    if (!window.confirm('Poista kysymys?')) return;
    const newCats = [...categories];
    const cIdx = newCats.findIndex(c => c.id === catId);
    const sIdx = newCats[cIdx].subcategories.findIndex(s => s.id === subId);
    newCats[cIdx].subcategories[sIdx].questions.splice(qIdx, 1);
    
    setCategories(newCats);
    store.saveQuestions(newCats);
  };

  const resetQuestions = () => {
    if (window.confirm('Haluatko varmasti palauttaa kaikki kysymykset oletuksiin? Menetät kaikki tekemäsi muutokset!')) {
      store.resetQuestionsToDefault();
      loadData();
    }
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
          className={activeTab === 'questions' ? 'btn-primary' : 'btn-secondary'} 
          onClick={() => setActiveTab('questions')}
        >
          Kysymysten Hallinta
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

      {/* QUESTIONS TAB */}
      {activeTab === 'questions' && (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div className="glass-panel" style={{ flex: '1 1 500px', padding: '2rem', maxHeight: '800px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0 }}>Sisältöpuu</h2>
              <button className="btn-secondary" style={{ color: '#ef4444' }} onClick={resetQuestions}>
                <RefreshCcw size={16} /> Palauta Oletukset
              </button>
            </div>

            {categories.map(cat => (
              <div key={cat.id} style={{ marginBottom: '1rem', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <div 
                  style={{ background: '#f8fafc', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => toggleCat(cat.id)}
                >
                  {cat.name}
                  {expandedCats.has(cat.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>

                {expandedCats.has(cat.id) && (
                  <div style={{ padding: '1rem', background: 'white' }}>
                    {cat.subcategories?.map(sub => (
                      <div key={sub.id} style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                        <div 
                          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}
                          onClick={() => toggleSub(sub.id)}
                        >
                          {expandedSubs.has(sub.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          {sub.name} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>({sub.questions.length} kysymystä)</span>
                        </div>
                        
                        {expandedSubs.has(sub.id) && (
                          <div style={{ marginLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {sub.questions.map((q, qIdx) => (
                              <div key={q.id || qIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: '#f1f5f9', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
                                  ({q.type}) {q.question}
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                  <button onClick={() => setEditingQuestion({ catId: cat.id, subId: sub.id, qIdx, data: JSON.parse(JSON.stringify(q)) })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-color)' }}><Edit size={16} /></button>
                                  <button onClick={() => deleteQuestion(cat.id, sub.id, qIdx)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={16} /></button>
                                </div>
                              </div>
                            ))}
                            <button 
                              className="btn-secondary" 
                              style={{ padding: '0.4rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'center' }}
                              onClick={() => setEditingQuestion({ 
                                catId: cat.id, subId: sub.id, qIdx: -1, 
                                data: { type: 'multiple_choice', question: 'Uusi kysymys', options: ['A', 'B'], correctAnswer: 'A', explanation: '' }
                              })}
                            >
                              <Plus size={16} /> Lisää uusi kysymys
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Editor Form */}
          {editingQuestion && (
            <div className="glass-panel" style={{ flex: '1 1 400px', padding: '2rem', position: 'sticky', top: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ margin: 0, color: 'var(--primary-color)' }}>Muokkaa Kysymystä</h2>
                <button onClick={() => setEditingQuestion(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={24} /></button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Kysymyksen tyyppi</label>
                  <select 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    value={editingQuestion.data.type}
                    onChange={e => setEditingQuestion({...editingQuestion, data: {...editingQuestion.data, type: e.target.value}})}
                  >
                    <option value="multiple_choice">Monivalinta (Multiple Choice)</option>
                    <option value="true_false">Oikein / Väärin (True/False)</option>
                    <option value="scenario">Skenaario (Scenario)</option>
                    <option value="spot_the_ai">Tunnista tekoäly</option>
                    <option value="spot_the_lie">Hallusinaation metsästys</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Kysymysteksti</label>
                  <textarea 
                    rows={3}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical' }}
                    value={editingQuestion.data.question}
                    onChange={e => setEditingQuestion({...editingQuestion, data: {...editingQuestion.data, question: e.target.value}})}
                  />
                </div>

                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Vaihtoehdot (pilkulla erotettuna)</label>
                  <input 
                    type="text"
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    value={editingQuestion.data.options ? editingQuestion.data.options.join(', ') : ''}
                    onChange={e => setEditingQuestion({...editingQuestion, data: {...editingQuestion.data, options: e.target.value.split(',').map(s=>s.trim())}})}
                    placeholder="Esim. Kyllä, Ei, Ehkä"
                  />
                  <small style={{ color: 'var(--text-muted)' }}>Erota vaihtoehdot pilkulla (,)</small>
                </div>

                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Oikea vastaus (oltava tismalleen sama kuin em. vaihtoehto)</label>
                  <input 
                    type="text"
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    value={editingQuestion.data.correctAnswer}
                    onChange={e => setEditingQuestion({...editingQuestion, data: {...editingQuestion.data, correctAnswer: e.target.value}})}
                  />
                </div>

                <div>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Selitys (Miksi tämä on oikein?)</label>
                  <textarea 
                    rows={4}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical' }}
                    value={editingQuestion.data.explanation}
                    onChange={e => setEditingQuestion({...editingQuestion, data: {...editingQuestion.data, explanation: e.target.value}})}
                  />
                </div>

                <button className="btn-primary" style={{ marginTop: '1rem', padding: '1rem' }} onClick={saveEditedQuestion}>
                  <Save size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Tallenna muutokset
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
