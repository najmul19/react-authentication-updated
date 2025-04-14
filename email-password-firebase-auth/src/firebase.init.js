// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCPTa9AKv0IbHv-8kIS_mx9GI6Z6cjPMg",
  authDomain: "email-password-auth-b5dc6.firebaseapp.com",
  projectId: "email-password-auth-b5dc6",
  storageBucket: "email-password-auth-b5dc6.firebasestorage.app",
  messagingSenderId: "492302264534",
  appId: "1:492302264534:web:177832ae775241b3fa0177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);