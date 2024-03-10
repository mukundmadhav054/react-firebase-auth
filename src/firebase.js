// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzoMUJ_qFHTgM3jf_FLB2tuly9hx3BD4s",
  authDomain: "react-auth-f0549.firebaseapp.com",
  projectId: "react-auth-f0549",
  storageBucket: "react-auth-f0549.appspot.com",
  messagingSenderId: "822149973184",
  appId: "1:822149973184:web:c7ca4ddd1bcea6aa141925",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
