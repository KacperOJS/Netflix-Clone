// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhtHIXqUw4Twa1bGu3tkfKQg7E-_ewmg",
  authDomain: "netflix-clone-7c1a4.firebaseapp.com",
  projectId: "netflix-clone-7c1a4",
  storageBucket: "netflix-clone-7c1a4.appspot.com",
  messagingSenderId: "297028886777",
  appId: "1:297028886777:web:3b468ced39d17b3fc44228",
  measurementId: "G-M9VJ7XH0GY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)