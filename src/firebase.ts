import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyB044oVII6ufJIT4v-VQuO5tGY4LJkdZyw',
  authDomain: 'car-rental-app-c1694.firebaseapp.com',
  databaseURL: 'https://car-rental-app-c1694-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'car-rental-app-c1694',
  storageBucket: 'car-rental-app-c1694.firebasestorage.app',
  messagingSenderId: '42904044184',
  appId: '1:42904044184:web:26cdd14a78744ddec606ed',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
