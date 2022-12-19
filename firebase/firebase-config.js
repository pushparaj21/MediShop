// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFgIWxUxyTs9XdYpQwVqkAT9ZaIjE_48U',
  authDomain: 'cabauth-cecee.firebaseapp.com',
  projectId: 'cabauth-cecee',
  storageBucket: 'cabauth-cecee.appspot.com',
  messagingSenderId: '224908447032',
  appId: '1:224908447032:web:cc60ce8b97f0abba43c5cd',
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyAqyLPnohpjuziLJ62D31my6XtUnU45y7c',

//   authDomain: 'cabauth1.firebaseapp.com',

//   projectId: 'cabauth1',

//   storageBucket: 'cabauth1.appspot.com',

//   messagingSenderId: '438374730972',

//   appId: '1:438374730972:web:45ce05cd23aefad22eb819',
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
