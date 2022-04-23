import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALRndWL9jwufcUAg-szJmO4dJUot7EdGg",
  authDomain: "linkedin-clone-12dd7.firebaseapp.com",
  databaseURL: "https://linkedin-clone-12dd7-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-12dd7",
  storageBucket: "linkedin-clone-12dd7.appspot.com",
  messagingSenderId: "909111997299",
  appId: "1:909111997299:web:33c091312a58220b90cb06"
};

initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

const postsRef = collection(db, "posts");
const postsQuery = query(postsRef, orderBy("timestamp", "desc"));
const userRef = collection(db, "users");

export { auth, postsRef, postsQuery, userRef, db };
