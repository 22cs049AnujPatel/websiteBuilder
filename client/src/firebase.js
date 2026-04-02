// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-web-96fef.firebaseapp.com",
  projectId: "ai-web-96fef",
  storageBucket: "ai-web-96fef.firebasestorage.app",
  messagingSenderId: "783484059153",
  appId: "1:783484059153:web:929b75c1115fe28d4a3bb0",
  measurementId: "G-83HYK7HL5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
