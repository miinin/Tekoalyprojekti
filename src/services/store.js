import { categories as defaultCategories } from '../data/questions';

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

  getSparks: async () => {
    const room = store.getRoomCode();
    // Simulate fetching from shared DB. Right now just local storage with room key
    const val = localStorage.getItem(room ? `aivan_sparks_${room}` : 'aivan_sparks');
    return parseInt(val || '0', 10);
  },

  addSparks: async (amount) => {
    const room = store.getRoomCode();
    const current = await store.getSparks();
    const key = room ? `aivan_sparks_${room}` : 'aivan_sparks';
    localStorage.setItem(key, current + amount);
    return current + amount;
  },

  spendSparks: async (amount) => {
    const room = store.getRoomCode();
    const current = await store.getSparks();
    if (current >= amount) {
      const key = room ? `aivan_sparks_${room}` : 'aivan_sparks';
      localStorage.setItem(key, current - amount);
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
    store.setRoomCode(null);
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
    // If we're deleting our current room, clear it
    if (store.getRoomCode() === room) store.setRoomCode(null);
  },

  getQuestions: () => {
    const customData = localStorage.getItem('aivan_custom_questions');
    if (customData) {
      try {
        return JSON.parse(customData);
      } catch (e) {
        console.error('Failed to parse custom questions', e);
      }
    }
    // Deep clone default to avoid reference mutations
    return JSON.parse(JSON.stringify(defaultCategories));
  },

  // --- TEST MODE ---
  getTestMode: () => localStorage.getItem('aivan_test_mode') === 'true',
  setTestMode: (val) => localStorage.setItem('aivan_test_mode', val ? 'true' : 'false'),

  saveQuestions: (newCategoriesData) => {
    localStorage.setItem('aivan_custom_questions', JSON.stringify(newCategoriesData));
    return true;
  },
  
  resetQuestionsToDefault: () => {
    localStorage.removeItem('aivan_custom_questions');
    return JSON.parse(JSON.stringify(defaultCategories));
  }
};
