// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "versaltile-vault.firebaseapp.com",
  projectId: "versaltile-vault",
  storageBucket: "versaltile-vault.appspot.com",
  messagingSenderId: "1065488667073",
  appId: "1:1065488667073:web:c46380224fc11803d05f40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);