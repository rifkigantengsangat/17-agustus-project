// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDr7K_OMedxvkVMWdBnoUxi9Iip0NpygtU",
    authDomain: "fir-cf33f.firebaseapp.com",
    projectId: "fir-cf33f",
    storageBucket: "fir-cf33f.appspot.com",
    messagingSenderId: "653797660969",
    appId: "1:653797660969:web:5f0b19cb67ad96fd793f38",
    measurementId: "G-77PSPSR5M7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)