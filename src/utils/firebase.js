// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYj-TxOtNanTCmtm-sHczpcApYtIfuFmk",
  authDomain: "netflixgpt-anuj.firebaseapp.com",
  projectId: "netflixgpt-anuj",
  storageBucket: "netflixgpt-anuj.appspot.com",
  messagingSenderId: "103304550801",
  appId: "1:103304550801:web:6d17b22b0fff9ea8d06230",
  measurementId: "G-76S22PTV2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
