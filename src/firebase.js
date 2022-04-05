// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2Nyq_jmFns0E10QYv_L2oLgNdbTI4sI",
  authDomain: "registration-form-3e166.firebaseapp.com",
  databaseURL: "https://registration-form-3e166-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "registration-form-3e166",
  storageBucket: "registration-form-3e166.appspot.com",
  messagingSenderId: "1076999592108",
  appId: "1:1076999592108:web:578eb89eb9ce025edaa709",
  measurementId: "G-QHHS704KB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);