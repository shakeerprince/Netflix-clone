// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkc0V6XusXW2AJTXf4wfG1oLPLBPsd0fI",
  authDomain: "netflixgpt-d37e8.firebaseapp.com",
  projectId: "netflixgpt-d37e8",
  storageBucket: "netflixgpt-d37e8.firebasestorage.app",
  messagingSenderId: "739429421651",
  appId: "1:739429421651:web:e72264e4413e4f8f79eca6",
  measurementId: "G-CCJGCLQ5YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();