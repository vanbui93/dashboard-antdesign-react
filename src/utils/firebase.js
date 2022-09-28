import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAG9cwYQ4Jsj8IZpxPzXrftNxXCq6PFQvk',
  authDomain: 'dashboard-antdesign.firebaseapp.com',
  databaseURL: 'https://dashboard-antdesign-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dashboard-antdesign',
  storageBucket: 'dashboard-antdesign.appspot.com',
  messagingSenderId: '365047837927',
  appId: '1:365047837927:web:cf19a454db16e758acde42',
  measurementId: 'G-3JV9NX6J20'
};

export const firebase = initializeApp(firebaseConfig);

export const db = getDatabase(firebase);
