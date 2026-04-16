import { categories as defaultCategories } from '../data/questions';
import { doc, setDoc, getDoc, updateDoc, onSnapshot, collection, serverTimestamp, deleteDoc, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

// A simple abstraction over local storage that simulates an async backend like Firebase
export const store = {
  // Check if there is an active co-op session
  getRoomCode: () => localStorage.getItem('aivan_room') || null,
  setRoomCode: (code) => {
    if (code) {
      localStorage.setItem('aivan_room', code);
    } else {
      localStorage.removeItem('aivan_room');
    }
  },

  // Generates a two-word code
  generateRoomCode: () => {
    const words1 = ['Turbo', 'Nocturne', 'Rauta', 'Salama', 'Kulta', 'Hopea', 'Super', 'Laser'];
    const words2 = ['Kissa', 'Kettu', 'Vasara', 'Pulu', 'Koira', 'Siili', 'Leijona', 'Kotka'];
    const code = `${words1[Math.floor(Math.random() * words1.length)]}${words2[Math.floor(Math.random() * words2.length)]}`;
    return code;
  },

  // Map Animation Location Tracking
  getLastLocation: () => {
    return {
      main: localStorage.getItem('aivan_last_main') || null,
      sub: localStorage.getItem('aivan_last_sub') || null
    };
  },
  
  setLastLocation: (main, sub) => {
    if (main) localStorage.setItem('aivan_last_main', main);
    else localStorage.removeItem('aivan_last_main');
    
    if (sub) localStorage.setItem('aivan_last_sub', sub);
    else localStorage.removeItem('aivan_last_sub');
    
    store.syncClassroomProgress();
  },

  // Map Progress / Completions Tracking
  getCompletions: () => {
    return JSON.parse(localStorage.getItem('aivan_completions') || '[]');
  },

  markCompleted: (id) => {
    const comps = store.getCompletions();
    if (!comps.includes(id)) {
      comps.push(id);
      localStorage.setItem('aivan_completions', JSON.stringify(comps));
    }
  },

  getNodeRecords: () => {
    return JSON.parse(localStorage.getItem('aivan_node_records') || '{}');
  },

  saveNodeRecord: (nodeId, newScore) => {
    const records = store.getNodeRecords();
    const currentScore = records[nodeId] || 0;
    if (newScore > currentScore) {
       records[nodeId] = newScore;
       localStorage.setItem('aivan_node_records', JSON.stringify(records));
       store.syncClassroomProgress();
       return newScore - currentScore; // Return the amount of NEW sparks earned
    }
    return 0; // No new sparks earned
  },

  getQuestionRecords: () => {
    return JSON.parse(localStorage.getItem('aivan_question_records') || '{}');
  },

  saveQuestionRecord: (questionId, newScore) => {
    const records = store.getQuestionRecords();
    const currentScore = records[questionId] || 0;
    if (newScore > currentScore) {
       records[questionId] = newScore;
       localStorage.setItem('aivan_question_records', JSON.stringify(records));
       store.syncClassroomProgress();
       return newScore - currentScore; // Return the amount of NEW sparks earned
    }
    return 0; // No new sparks earned
  },

  getQuestionCorrectness: () => {
    return JSON.parse(localStorage.getItem('aivan_question_correctness') || '{}');
  },

  saveQuestionCorrectness: (nodeId, questionId, isCorrect) => {
    const correctness = store.getQuestionCorrectness();
    if (!correctness[nodeId]) correctness[nodeId] = {};
    if (isCorrect || !correctness[nodeId].hasOwnProperty(questionId)) { 
        correctness[nodeId][questionId] = isCorrect;
        localStorage.setItem('aivan_question_correctness', JSON.stringify(correctness));
    }
  },

  getAggregatedNodeStats: (nodeId, totalNodeQuestionsCount) => {
    const correctness = store.getQuestionCorrectness();
    const nodeState = correctness[nodeId] || {};
    let correct = 0;
    Object.values(nodeState).forEach(val => { if (val) correct++; });
    return { correct, total: totalNodeQuestionsCount };
  },

  getNodeStats: () => {
    return JSON.parse(localStorage.getItem('aivan_node_stats') || '{}');
  },

  saveNodeStats: (nodeId, correctCount, totalCount) => {
    const stats = store.getNodeStats();
    const currentStat = stats[nodeId];
    
    // Only save if it's the first time OR if the new completion ratio is strictly better
    if (!currentStat || (correctCount / totalCount) > (currentStat.correct / currentStat.total)) {
        stats[nodeId] = { correct: correctCount, total: totalCount };
        localStorage.setItem('aivan_node_stats', JSON.stringify(stats));
    }
  },

  getSparks: async () => {
    const room = store.getRoomCode();
    // Simulate fetching from shared DB. Right now just local storage with room key
    const val = localStorage.getItem(room ? `aivan_sparks_${room}` : 'aivan_sparks');
    return parseInt(val || '0', 10);
  },

  getTutorialSkipped: () => {
    return localStorage.getItem('aivan_tutorial_skipped') === 'true';
  },

  setTutorialSkipped: (skipped) => {
    localStorage.setItem('aivan_tutorial_skipped', skipped ? 'true' : 'false');
  },

  getTutorialCompleted: () => {
    return localStorage.getItem('aivan_tutorial_completed') === 'true';
  },

  completeTutorial: () => {
    localStorage.setItem('aivan_tutorial_completed', 'true');
  },

  getMapTutorialCompleted: () => {
    return localStorage.getItem('aivan_map_tutorial_completed') === 'true';
  },

  completeMapTutorial: () => {
    localStorage.setItem('aivan_map_tutorial_completed', 'true');
  },

  addSparks: async (amount) => {
    const room = store.getRoomCode();
    const current = await store.getSparks();
    const key = room ? `aivan_sparks_${room}` : 'aivan_sparks';
    localStorage.setItem(key, current + amount);
    store.syncClassroomProgress();
    return current + amount;
  },

  getMeters: () => {
    const defaultMeters = { red: 0, yellow: 0, green: 0 };
    try {
        return JSON.parse(localStorage.getItem('aivan_meters') || JSON.stringify(defaultMeters));
    } catch (e) {
        return defaultMeters;
    }
  },

  chargeMeter: (color, amount) => {
    const meters = store.getMeters();
    if (meters[color] !== undefined && meters[color] < 100) {
        meters[color] = Math.min(100, meters[color] + amount);
        localStorage.setItem('aivan_meters', JSON.stringify(meters));
        store.syncClassroomProgress();
        return meters[color] === 100; // Returns true if it just reached full
    }
    return false;
  },

  useMeter: (color) => {
    const meters = store.getMeters();
    if (meters[color] >= 100) {
        meters[color] = 0;
        localStorage.setItem('aivan_meters', JSON.stringify(meters));
        store.syncClassroomProgress();
        return true;
    }
    return false;
  },

  spendSparks: async (amount) => {
    const room = store.getRoomCode();
    const current = await store.getSparks();
    if (current >= amount) {
      const key = room ? `aivan_sparks_${room}` : 'aivan_sparks';
      localStorage.setItem(key, current - amount);
      store.syncClassroomProgress();
      return true;
    }
    return false;
  },

  getPurchasedItems: async () => {
    const room = store.getRoomCode();
    const key = room ? `aivan_items_${room}` : 'aivan_items';
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  },

  getEquippedItems: async () => {
    const room = store.getRoomCode();
    const key = room ? `aivan_equipped_${room}` : 'aivan_equipped';
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : {};
  },

  equipItem: async (itemId, category) => {
    const room = store.getRoomCode();
    const key = room ? `aivan_equipped_${room}` : 'aivan_equipped';
    const items = await store.getEquippedItems();
    items[category] = itemId;
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  },

  unequipItem: async (category) => {
    const room = store.getRoomCode();
    const key = room ? `aivan_equipped_${room}` : 'aivan_equipped';
    const items = await store.getEquippedItems();
    delete items[category];
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  },

  purchaseItem: async (itemId, price, category = null) => {
    const success = await store.spendSparks(price);
    if (success) {
      const room = store.getRoomCode();
      const key = room ? `aivan_items_${room}` : 'aivan_items';
      const items = await store.getPurchasedItems();
      if (!items.includes(itemId)) {
        items.push(itemId);
        localStorage.setItem(key, JSON.stringify(items));
      }
      if (category) {
          await store.equipItem(itemId, category);
      }
      return true;
    }
    return false;
  },

  hasProgress: () => {
    // Check if user has single player progress saved
    return localStorage.getItem('aivan_sparks') !== null;
  },
  
  clearSinglePlayer: () => {
    localStorage.setItem('aivan_sparks', '0');
    localStorage.removeItem('aivan_items');
    localStorage.removeItem('aivan_equipped');
    localStorage.removeItem('aivan_completions');
    localStorage.removeItem('completed_lessons');
    localStorage.removeItem('aivan_node_records');
    localStorage.removeItem('aivan_question_records');
    localStorage.removeItem('aivan_question_correctness');
    localStorage.removeItem('aivan_node_stats');
    localStorage.removeItem('aivan_tutorial_completed');
    localStorage.removeItem('aivan_map_tutorial_completed');
    localStorage.removeItem('aivan_garage_tuition');
    localStorage.removeItem('aivan_last_main');
    localStorage.removeItem('aivan_last_sub');
    store.setRoomCode(null);
  },

  // --- CLOUD SAVE SYSTEM ---
  exportProgressToCloud: async () => {
    try {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const l1 = letters.charAt(Math.floor(Math.random() * letters.length));
      const l2 = letters.charAt(Math.floor(Math.random() * letters.length));
      const l3 = letters.charAt(Math.floor(Math.random() * letters.length));
      const nums = Math.floor(100 + Math.random() * 900); // 100-999
      const code = `${l1}${l2}${l3}-${nums}`;
      
      const payload = { timestamp: new Date().toISOString() };
      
      for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('aivan_') && key !== 'aivan_room') {
              payload[key] = localStorage.getItem(key);
          }
      }
      
      await setDoc(doc(db, "saves", code), payload);
      return code;
    } catch (err) {
      console.error("Save error:", err);
      return null;
    }
  },

  importProgressFromCloud: async (code) => {
    try {
      if (!code || typeof code !== 'string') return false;
      const upperCode = code.toUpperCase().trim();
      const docRef = doc(db, "saves", upperCode);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
          const data = docSnap.data();
          // clear existing aivan_ keys EXCEPT room
          const keysToRemove = [];
          for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key && key.startsWith('aivan_') && key !== 'aivan_room') {
                  keysToRemove.push(key);
              }
          }
          keysToRemove.forEach(k => localStorage.removeItem(k));
          
          // restore keys
          Object.keys(data).forEach(k => {
              if (k.startsWith('aivan_')) {
                  localStorage.setItem(k, data[k]);
              }
          });
          
          return true;
      } else {
          return false;
      }
    } catch (err) {
      console.error("Load error:", err);
      return false;
    }
  },

  // --- ADMIN METHODS ---
  getAllRooms: () => {
    const rooms = new Set();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('aivan_sparks_')) {
        rooms.add(key.replace('aivan_sparks_', ''));
      }
    }
    return Array.from(rooms);
  },

  setRoomSparks: (room, newAmount) => {
    localStorage.setItem(`aivan_sparks_${room}`, newAmount);
  },

  deleteRoom: (room) => {
    localStorage.removeItem(`aivan_sparks_${room}`);
    localStorage.removeItem(`aivan_items_${room}`);
    localStorage.removeItem(`aivan_equipped_${room}`);
    localStorage.removeItem('aivan_completions');
    localStorage.removeItem('aivan_node_records');
    localStorage.removeItem('aivan_question_records');
    localStorage.removeItem('aivan_question_correctness');
    // If we're deleting our current room, clear it
    if (store.getRoomCode() === room) store.setRoomCode(null);
  },

  getQuestions: () => {
    // Deep clone default to avoid reference mutations
    return JSON.parse(JSON.stringify(defaultCategories));
  },

  // --- TEST MODE ---
  getTestMode: () => localStorage.getItem('aivan_test_mode') === 'true',
  setTestMode: (val) => localStorage.setItem('aivan_test_mode', val ? 'true' : 'false'),

  

  // --- BUG REPORTS ---
  getBugReports: async () => {
    try {
      const snapshot = await getDocs(collection(db, 'bug_reports'));
      const reports = [];
      snapshot.forEach(d => reports.push({ id: d.id, ...d.data() }));
      // Sortaa uusimmat ensin
      reports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      return reports;
    } catch (e) {
      console.error('getBugReports error:', e);
      return [];
    }
  },

  saveBugReport: async (questionId, text) => {
    try {
      await addDoc(collection(db, 'bug_reports'), {
        questionId,
        text,
        date: new Date().toISOString()
      });
    } catch (e) {
      console.error('saveBugReport error:', e);
    }
  },

  deleteBugReport: async (reportId) => {
    try {
      await deleteDoc(doc(db, 'bug_reports', reportId));
    } catch (e) {
      console.error('deleteBugReport error:', e);
    }
  },

  // --- CLASSROOM MODE ---
  getClassroomCode: () => localStorage.getItem('aivan_classroom') || null,
  getClassroomNickname: () => localStorage.getItem('aivan_classroom_name') || null,
  setClassroomCode: (code, nickname) => {
    if (code) {
      localStorage.setItem('aivan_classroom', code);
      if (nickname) localStorage.setItem('aivan_classroom_name', nickname);
    } else {
      localStorage.removeItem('aivan_classroom');
      localStorage.removeItem('aivan_classroom_name');
    }
  },

  syncClassroomProgress: async () => {
    const code = store.getClassroomCode();
    const nickname = store.getClassroomNickname();
    if (!code || !nickname) return;
    
    try {
      const sparks = parseInt(localStorage.getItem('aivan_sparks') || '0', 10);
      const stats = store.getNodeStats();
      let platinum = 0, gold = 0, silver = 0, bronze = 0;
      Object.keys(stats).forEach(nodeId => {
          const stat = stats[nodeId];
          if (!stat || stat.total === 0) return;
          if (stat.correct === stat.total) platinum++;
          else if (stat.correct >= Math.floor(stat.total * 0.9)) gold++;
          else if (stat.correct >= Math.floor(stat.total * 0.7)) silver++;
          else if (stat.correct >= 2) bronze++;
      });
      
      const location = store.getLastLocation() || { main: '', sub: '' };
      const locStr = location.main ? (location.sub ? `${location.main} -> ${location.sub}` : location.main) : 'Lobby';

      const rawData = {};
      for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('aivan_') && key !== 'aivan_room') {
              rawData[key] = localStorage.getItem(key);
          }
      }

      await setDoc(doc(db, "class_sessions", code, "players", nickname), {
        sparks,
        medals: { platinum, gold, silver, bronze },
        location: locStr,
        rawData,
        lastUpdate: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error('Luokkatilan synkronointi epäonnistui:', err);
    }
  },

  listenToClassroomStatus: (code, callback) => {
    return onSnapshot(doc(db, "class_sessions", code), (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data().status);
      }
    });
  },

  listenToTeacherGifts: (code, nickname, callback) => {
    return onSnapshot(doc(db, "class_sessions", code, "players", nickname), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.teacherGift) {
          const current = parseInt(localStorage.getItem('aivan_sparks') || '0', 10);
          localStorage.setItem('aivan_sparks', current + data.teacherGift);
          updateDoc(doc(db, "class_sessions", code, "players", nickname), {
            teacherGift: 0
          });
          if (callback) callback(data.teacherGift);
        }
      }
    });
  },

  joinClassroom: async (code, nickname) => {
      try {
          const upperCode = code.toUpperCase().trim();
          const docRef = doc(db, "class_sessions", upperCode, "players", nickname);
          
          try {
             const sessionDoc = await getDoc(doc(db, "class_sessions", upperCode));
             if (sessionDoc.exists()) {
                const rt = sessionDoc.data().requireTutorial;
                if (typeof rt === 'boolean') {
                    store.setTutorialSkipped(!rt);
                }
             }
          } catch(e) {}
          
          let docSnap;
          try { docSnap = await getDoc(docRef); } catch(e) {}
          
          if (docSnap && docSnap.exists() && docSnap.data().rawData) {
              const data = docSnap.data().rawData;
              const keysToRemove = [];
              for (let i = 0; i < localStorage.length; i++) {
                  const key = localStorage.key(i);
                  if (key && key.startsWith('aivan_') && key !== 'aivan_room') keysToRemove.push(key);
              }
              keysToRemove.forEach(k => localStorage.removeItem(k));
              
              Object.keys(data).forEach(k => {
                  if (k.startsWith('aivan_')) localStorage.setItem(k, data[k]);
              });
              
              store.setClassroomCode(upperCode, nickname);
              return true; // Resumed
          } else {
              store.clearSinglePlayer();
              store.setClassroomCode(upperCode, nickname);
              await store.syncClassroomProgress();
              return false; // New
          }
      } catch (err) {
          store.clearSinglePlayer();
          store.setClassroomCode(code.toUpperCase().trim(), nickname);
          await store.syncClassroomProgress();
          return false;
      }
  },
};
