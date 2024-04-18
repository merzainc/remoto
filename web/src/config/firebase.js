// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBoQANxcjuI5NnkeDrXJEogG06WCdl4qcA',
  authDomain: 'remoto-418609.firebaseapp.com',
  databaseURL: 'https://remoto-418609-default-rtdb.firebaseio.com',
  projectId: 'remoto-418609',
  storageBucket: 'remoto-418609.appspot.com',
  messagingSenderId: '290212062965',
  appId: '1:290212062965:web:64adaef9b17acc0cbec7bc',
  measurementId: 'G-9R3G9FCXZN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedb = getFirestore(app);
export default firedb;
