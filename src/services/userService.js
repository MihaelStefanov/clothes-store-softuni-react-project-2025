// src/services/userService.js
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const USERS_COLLECTION = 'users';

// Вземи всички потребители
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, USERS_COLLECTION);
    const snapshot = await getDocs(usersRef);
    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return users;
  } catch (error) {
    console.error('Грешка при вземане на потребители:', error);
    throw error;
  }
};

// Вземи един потребител по ID
export const getUserById = async (userId) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      throw new Error('Потребителят не съществува');
    }
  } catch (error) {
    console.error('Грешка при вземане на потребител:', error);
    throw error;
  }
};

// Добави нов потребител
export const addUser = async (userData) => {
  try {
    const usersRef = collection(db, USERS_COLLECTION);
    const docRef = await addDoc(usersRef, {
      ...userData,
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...userData };
  } catch (error) {
    console.error('Грешка при добавяне на потребител:', error);
    throw error;
  }
};

// Обнови потребител
export const updateUser = async (userId, userData) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: new Date().toISOString()
    });
    return { id: userId, ...userData };
  } catch (error) {
    console.error('Грешка при обновяване на потребител:', error);
    throw error;
  }
};

// Изтрий потребител
export const deleteUser = async (userId) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    await deleteDoc(userRef);
    return userId;
  } catch (error) {
    console.error('Грешка при изтриване на потребител:', error);
    throw error;
  }
};

// Намери потребител по email
export const getUserByEmail = async (email) => {
  try {
    const usersRef = collection(db, USERS_COLLECTION);
    const q = query(usersRef, where('email', '==', email));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return null;
    }
    
    const userDoc = snapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
  } catch (error) {
    console.error('Грешка при търсене на потребител:', error);
    throw error;
  }
};