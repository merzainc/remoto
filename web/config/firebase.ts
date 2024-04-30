import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhfAWqxbfbt4mwLDWq1PNYb5Ij4-sM1_0',
  authDomain: 'remoto-418609.firebaseapp.com',
  databaseURL: 'https://remoto-418609-default-rtdb.firebaseio.com',
  projectId: 'remoto-418609',
  storageBucket: 'remoto-418609.appspot.com',
  messagingSenderId: '290212062965',
  appId: '1:290212062965:android:fa53689652f47962bec7bc',
  measurementId: 'G-9R3G9FCXZN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFire = getFirestore(app);

// Initialise the CloudFirestore and get  a reference to the service
export default dbFire;
