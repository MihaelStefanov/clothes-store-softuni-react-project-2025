// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Твоята Firebase конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyBlACyS9dzTCQ1Mj3U7zASYVIrlN9Uwonk",
  authDomain: "clothing-store-9888e.firebaseapp.com",
  databaseURL: "https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clothing-store-9888e",
  storageBucket: "clothing-store-9888e.firebasestorage.app",
  messagingSenderId: "37412178312",
  appId: "1:37412178312:web:23c1968b7895de5619923d",
  measurementId: "G-072YLVRP54"
};

// Инициализирай Firebase
const app = initializeApp(firebaseConfig);

// Инициализирай Firestore
export const db = getFirestore(app);