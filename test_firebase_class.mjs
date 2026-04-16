import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn2eOx0WRbUNKefUTVFWGM9WrNaLaT5ac",
  authDomain: "aivan-a9d6e.firebaseapp.com",
  projectId: "aivan-a9d6e",
  storageBucket: "aivan-a9d6e.firebasestorage.app",
  messagingSenderId: "689041328881",
  appId: "1:689041328881:web:6a83c55a38be334fda7750"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testPermissions() {
  console.log("Testing read on class_sessions/ABCD...");
  try {
    const docSnap = await getDoc(doc(db, "class_sessions", "ABCD"));
    console.log("Read success. Exists:", docSnap.exists());
  } catch(e) {
    console.error("Read failed:", e.code || e.message);
  }

  console.log("Testing write on class_sessions/ABCD/players/MIIKA...");
  try {
    await setDoc(doc(db, "class_sessions", "ABCD", "players", "MIIKA"), { test: 1 });
    console.log("Write success.");
  } catch(e) {
    console.error("Write failed:", e.code || e.message);
  }

  console.log("Testing write on saves/TEST2...");
  try {
    await setDoc(doc(db, "saves", "TEST2"), { test: 2 });
    console.log("Saves Write success.");
  } catch(e) {
    console.error("Saves Write failed:", e.code || e.message);
  }

  process.exit(0);
}

testPermissions();
