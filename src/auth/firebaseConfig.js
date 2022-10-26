// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmA440kGqr3oEuY59QysC0T4MJMaNHsfU",
  authDomain: "book-shop-87738.firebaseapp.com",
  projectId: "book-shop-87738",
  storageBucket: "book-shop-87738.appspot.com",
  messagingSenderId: "720447390309",
  appId: "1:720447390309:web:5e42ef79b428e98d09bc8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
