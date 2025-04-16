// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGL-SllOeDjtgIcT1r7fs8S3oc8DrMGYE",
  authDomain: "prothom-ondhokar-news.firebaseapp.com",
  projectId: "prothom-ondhokar-news",
  storageBucket: "prothom-ondhokar-news.firebasestorage.app",
  messagingSenderId: "374189601303",
  appId: "1:374189601303:web:ed7b3903880870c969a252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);