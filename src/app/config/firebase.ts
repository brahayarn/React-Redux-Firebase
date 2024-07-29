// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents2024-15432.firebaseapp.com",
  projectId: "revents2024-15432",
  storageBucket: "revents2024-15432.appspot.com",
  messagingSenderId: "779724512760",
  appId: "1:779724512760:web:73936b56a115cf43088a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);