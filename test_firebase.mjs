import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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

async function testSave() {
  try {
    console.log("Attempting to write to 'saves/TEST1234'...");
    await setDoc(doc(db, "saves", "TEST1234"), {
      timestamp: new Date().toISOString(),
      testData: "Hello from test script"
    });
    console.log("Success! Wrote to Firestore.");
    process.exit(0);
  } catch(e) {
    console.error("Failed:", e.message, e.code);
    process.exit(1);
  }
}

testSave();
