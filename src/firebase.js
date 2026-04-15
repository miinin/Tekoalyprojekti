import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn2eOx0WRbUNKefUTVFWGM9WrNaLaT5ac",
  authDomain: "aivan-a9d6e.firebaseapp.com",
  projectId: "aivan-a9d6e",
  storageBucket: "aivan-a9d6e.firebasestorage.app",
  messagingSenderId: "689041328881",
  appId: "1:689041328881:web:6a83c55a38be334fda7750"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
