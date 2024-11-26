import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDr23ge7KJRElbFK7fCKQevXAM2DovGuoI',
  authDomain: 'list-status.firebaseapp.com',
  projectId: 'list-status',
  storageBucket: 'list-status.firebasestorage.app',
  messagingSenderId: '409911416011',
  appId: '1:409911416011:web:269ff766aec4ba08c3374e',
  measurementId: 'G-1F2KP6RDZ7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, doc, deleteDoc, updateDoc, getDocs };
