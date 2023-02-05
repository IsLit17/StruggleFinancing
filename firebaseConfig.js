// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF19mksgWAfHS3NJpompq4qqGRWzEo0ec",
  authDomain: "struggle-finance.firebaseapp.com",
  projectId: "struggle-finance",
  storageBucket: "struggle-finance.appspot.com",
  messagingSenderId: "874862288188",
  appId: "1:874862288188:web:be1fd56c1a4d69a1e19239",
  measurementId: "G-2Y6PNBJTDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
