// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCB9RQsNr1KKyhJJjBhjaAY7hAnj7UaOc",
  authDomain: "maltimart-9ffad.firebaseapp.com",
  projectId: "maltimart-9ffad",
  storageBucket: "maltimart-9ffad.appspot.com",
  messagingSenderId: "590140646564",
  appId: "1:590140646564:web:b25fda1eff45d02150b231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app