import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlxQXoljmk11g9mnOyjpfXCHBT7RevYqE",
  authDomain: "linkedline-clone.firebaseapp.com",
  projectId: "linkedline-clone",
  storageBucket: "linkedline-clone.appspot.com",
  messagingSenderId: "671692679113",
  appId: "1:671692679113:web:c2fe47b9989fd53f2bea18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
