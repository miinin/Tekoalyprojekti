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
    if (isCorrect || !Object.prototype.hasOwnProperty.call(correctness[nodeId], questionId)) { 
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

  trackAttempt: (isCorrect) => {
    try {
        const stats = JSON.parse(localStorage.getItem('aivan_global_stats') || '{"attempts":0, "correct":0}');
        stats.attempts++;
        if (isCorrect) stats.correct++;
        localStorage.setItem('aivan_global_stats', JSON.stringify(stats));
        store.syncClassroomProgress();
    } catch(error) { console.error(error); }
  },

  getStreakStats: () => {
    try {
        return JSON.parse(localStorage.getItem('aivan_streak_stats') || '{"current":0, "best":0}');
    } catch (e) {
        return { current: 0, best: 0 };
    }
  },

  trackStreak: (isCorrect, options = {}) => {
    try {
        const stats = store.getStreakStats();
        const oldCurrent = stats.current;
        if (isCorrect) {
            stats.current++;
            if (stats.current > stats.best) {
                stats.best = stats.current;
            }
        } else {
            if (options.forgiveBreak) {
                // Katkeaminen annetaan anteeksi, ketju jatkuu samasta kohtaa
            } else if (options.dropToFive) {
                stats.current = 5;
            } else {
                stats.current = 0;
            }
        }
        localStorage.setItem('aivan_streak_stats', JSON.stringify(stats));
        
        let justReached = null;
        if (oldCurrent < 5 && stats.current === 5) justReached = 5;
        if (oldCurrent < 10 && stats.current === 10) justReached = 10;
        
        return { ...stats, justReached };
    } catch (error) { 
        console.error(error); 
        return { current: 0, best: 0, justReached: null }; 
    }
  },

  getNodeStats: () => {
    return JSON.parse(localStorage.getItem('aivan_node_stats') || '{}');
  },

  saveNodeStats: (nodeId, correctCount, totalCount) => {
    const stats = store.getNodeStats();
    stats[nodeId] = { correct: correctCount, total: totalCount };
    localStorage.setItem('aivan_node_stats', JSON.stringify(stats));
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

  grantSkipTutorialRewards: () => {
    const room = store.getRoomCode();
    const keyItems = room ? `aivan_items_${room}` : 'aivan_items';
    let items = [];
    try { items = JSON.parse(localStorage.getItem(keyItems)) || []; } catch (error) { console.error(error); }
    if (!items.includes('g-clean')) items.push('g-clean');
    localStorage.setItem(keyItems, JSON.stringify(items));
    
    const keyEq = room ? `aivan_equipped_${room}` : 'aivan_equipped';
    let equipped = {};
    try { equipped = JSON.parse(localStorage.getItem(keyEq)) || {}; } catch (error) { console.error(error); }
    equipped['g_floor'] = 'g-clean';
    localStorage.setItem(keyEq, JSON.stringify(equipped));
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

  getTeacherBoosts: () => {
    const defaultMeters = { red: 0, yellow: 0, green: 0 };
    try {
        return JSON.parse(localStorage.getItem('aivan_teacher_boosts') || JSON.stringify(defaultMeters));
    } catch (error) {
        console.error(error);
        return defaultMeters;
    }
  },

  useTeacherBoost: (color) => {
    const boosts = store.getTeacherBoosts();
    if (boosts[color] > 0) {
        boosts[color] -= 1;
        localStorage.setItem('aivan_teacher_boosts', JSON.stringify(boosts));
        store.syncClassroomProgress();
        return true;
    }
    return false;
  },

  getUsedMapBoosts: () => {
    try {
        return JSON.parse(localStorage.getItem('aivan_used_map_boosts') || '{}');
    } catch (error) {
        console.error(error);
        return {};
    }
  },

  useMapBoost: (mapId, color) => {
    const used = store.getUsedMapBoosts();
    const key = `${mapId}_${color}`;
    used[key] = (used[key] || 0) + 1;
    localStorage.setItem('aivan_used_map_boosts', JSON.stringify(used));
    store.syncClassroomProgress();
    return true;
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
    localStorage.removeItem('aivan_trophy_tuition');
    localStorage.removeItem('aivan_meter_tutorial_seen');
    localStorage.removeItem('aivan_last_main');
    localStorage.removeItem('aivan_last_sub');
    localStorage.removeItem('aivan_used_map_boosts');
    localStorage.removeItem('aivan_teacher_boosts');
    localStorage.removeItem('aivan_streak_stats');
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
      
      const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Firebase timeout')), 10000);
      });
      await Promise.race([setDoc(doc(db, "saves", code), payload), timeoutPromise]);
      return code;
    } catch (err) {
      console.error("Save error:", err);
      return { _error: true, message: err.message || "Tuntematon virhe." };
    }
  },

  importProgressFromCloud: async (code) => {
    try {
      if (!code || typeof code !== 'string') return false;
      const upperCode = code.toUpperCase().trim();
      const docRef = doc(db, "saves", upperCode);
      
      const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Firebase timeout')), 5000);
      });
      const docSnap = await Promise.race([getDoc(docRef), timeoutPromise]);
      
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

  downloadLocalSave: () => {
    const payload = { timestamp: new Date().toISOString(), type: 'aivan_save' };
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('aivan_') && key !== 'aivan_room') {
            payload[key] = localStorage.getItem(key);
        }
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `Aivan_Tallennus_${new Date().toLocaleDateString('fi-FI').replace(/\./g, '-')}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  },

  importLocalSave: (jsonData) => {
    if (!jsonData || jsonData.type !== 'aivan_save') return false;
    
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('aivan_') && key !== 'aivan_room') keysToRemove.push(key);
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    
    Object.keys(jsonData).forEach(k => {
        if (k.startsWith('aivan_')) localStorage.setItem(k, jsonData[k]);
    });
    return true;
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

      let globalStats = { attempts: 0, correct: 0 };
      try {
          globalStats = JSON.parse(localStorage.getItem('aivan_global_stats') || '{"attempts":0, "correct":0}');
      } catch(error) { console.error(error); }

      const dataPayload = {
        sparks,
        medals: { platinum, gold, silver, bronze },
        location: locStr,
        globalStats,
        rawData,
        lastUpdate: serverTimestamp()
      };
      
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
      await Promise.race([setDoc(doc(db, "class_sessions", code, "players", nickname), dataPayload, { merge: true }), timeoutPromise]);
      return true;
    } catch (err) {
      console.error('Luokkatilan synkronointi epäonnistui:', err);
      return false;
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
        let updated = false;

        const processedSparksId = localStorage.getItem('aivan_last_teacher_spark_id');
        if (data.teacherGift && data.teacherGift.amount && String(data.teacherGift.id) !== processedSparksId) {
          localStorage.setItem('aivan_last_teacher_spark_id', String(data.teacherGift.id));
          const current = parseInt(localStorage.getItem('aivan_sparks') || '0', 10);
          localStorage.setItem('aivan_sparks', current + data.teacherGift.amount);
          updated = true;
          if (callback) callback({ sparks: data.teacherGift.amount });
        }
        
        const processedBoostsId = localStorage.getItem('aivan_last_teacher_boost_id');
        if (data.teacherBoostsGift && data.teacherBoostsGift.amount && String(data.teacherBoostsGift.id) !== processedBoostsId) {
           localStorage.setItem('aivan_last_teacher_boost_id', String(data.teacherBoostsGift.id));
           const currentBoosts = store.getTeacherBoosts();
           const color = data.teacherBoostsGift.color;
           currentBoosts[color] = (currentBoosts[color] || 0) + data.teacherBoostsGift.amount;
           localStorage.setItem('aivan_teacher_boosts', JSON.stringify(currentBoosts));
           updated = true;
           if (callback) callback({ boosts: { [color]: data.teacherBoostsGift.amount } });
        }

        if (updated) {
            updateDoc(doc(db, "class_sessions", code, "players", nickname), {
              teacherGift: null,
              teacherBoostsGift: null
            });
        }
      }
    });
  },

  joinClassroom: async (code, nickname) => {
      try {
          const upperCode = code.toUpperCase().trim();
          const docRef = doc(db, "class_sessions", upperCode, "players", nickname);
          
          try {
             const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
             const sessionDoc = await Promise.race([getDoc(doc(db, "class_sessions", upperCode)), timeoutPromise]);
             if (sessionDoc.exists()) {
                const rt = sessionDoc.data().requireTutorial;
                if (typeof rt === 'boolean') {
                    store.setTutorialSkipped(!rt);
                }
             }
          } catch(error) { console.error(error); }
          
          let fetchError = false;
          let docSnap;
          try { 
              const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Firebase timeout')), 5000));
              docSnap = await Promise.race([getDoc(docRef), timeoutPromise]); 
          } catch(error) { 
              console.error(error); 
              fetchError = true;
          }
          
          if (fetchError) return 'error';
          
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
              
              if (store.getTutorialSkipped()) {
                  store.grantSkipTutorialRewards();
              }
              
              await store.syncClassroomProgress();
              return false; // New
          }
      } catch (error) {
          console.error(error);
          return 'error';
      }
  },
};
