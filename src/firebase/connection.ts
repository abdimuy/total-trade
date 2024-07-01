// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRXzWxvwZcs9qVjKvrjoMOOynPwyF0sBo',
  authDomain: 'msp-db-1c2ce.firebaseapp.com',
  projectId: 'msp-db-1c2ce',
  storageBucket: 'msp-db-1c2ce.appspot.com',
  messagingSenderId: '519103475417',
  appId: '1:519103475417:web:405ea92fcd75a753d898c8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
