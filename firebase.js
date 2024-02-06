// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getSotrage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTXBKyyJUm04kuusnZkRtG6q8hnEe5dFg",
  authDomain: "instagram-8d2d8.firebaseapp.com",
  projectId: "instagram-8d2d8",
  storageBucket: "instagram-8d2d8.appspot.com",
  messagingSenderId: "453708768857",
  appId: "1:453708768857:web:83b98bd8db3cbca7703348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
