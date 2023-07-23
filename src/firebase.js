// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAkGCEtVsa8TFORhI0op_ivER7VdiBtOZo",
    authDomain: "rizzy-b3bfd.firebaseapp.com",
    projectId: "rizzy-b3bfd",
    storageBucket: "rizzy-b3bfd.appspot.com",
    messagingSenderId: "33080008556",
    appId: "1:33080008556:web:374107876e56402c325d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
