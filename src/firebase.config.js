// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrD_56LpYbggFCGSBsKkzG2_EVpMDoNMk',
  authDomain: 'house-marketplace-app-8bdee.firebaseapp.com',
  projectId: 'house-marketplace-app-8bdee',
  storageBucket: 'house-marketplace-app-8bdee.appspot.com',
  messagingSenderId: '337260411421',
  appId: '1:337260411421:web:4837b8af78ec61dd7824f4',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
