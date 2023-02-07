// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3sP-4aMJa68-HNHuACPu81-Iu0Ar1kEo",
  authDomain: "cars-app-cf2a0.firebaseapp.com",
  projectId: "cars-app-cf2a0",
  storageBucket: "cars-app-cf2a0.appspot.com",
  messagingSenderId: "706716240543",
  appId: "1:706716240543:web:0fc0d11872a806059c30aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);

