import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnUbRgqsjDxZ8yGH7wQzBChZKO6lA-AcM',
  authDomain: 'petbook-001.firebaseapp.com',
  projectId: 'petbook-001',
  storageBucket: 'petbook-001.appspot.com',
  messagingSenderId: '102791886196',
  appId: '1:102791886196:web:e5ea28fdf0a453c7ca2821',
  measurementId: 'G-NKSYH8XFGH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
