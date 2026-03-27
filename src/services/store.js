// A simple abstraction over local storage that simulates an async backend like Firebase
// Will be expanded when Firebase is connected
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

  hasProgress: () => {
    // Check if user has single player progress saved
    return localStorage.getItem('aivan_sparks') !== null;
  },
  
  clearSinglePlayer: () => {
    localStorage.setItem('aivan_sparks', '0');
    store.setRoomCode(null);
  }
};
