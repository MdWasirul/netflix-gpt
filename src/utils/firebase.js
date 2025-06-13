// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA460W9QXV-NjG2HtWiWTGAES9ih5hodw0",
  authDomain: "netflixgpt-38584.firebaseapp.com",
  projectId: "netflixgpt-38584",
  storageBucket: "netflixgpt-38584.firebasestorage.app",
  messagingSenderId: "398993770066",
  appId: "1:398993770066:web:e8e5aee57f6158d0cac18b",
  measurementId: "G-2P71E284KX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
