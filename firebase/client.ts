// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuZKnc3McdnQJwSqL1CgWiI0yGxByB0wQ",
  authDomain: "prepwise-5fd87.firebaseapp.com",
  projectId: "prepwise-5fd87",
  storageBucket: "prepwise-5fd87.firebasestorage.app",
  messagingSenderId: "225192107718",
  appId: "1:225192107718:web:7ca5ffa67fd0bb308001c7",
  measurementId: "G-BFBRRLSXSH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
