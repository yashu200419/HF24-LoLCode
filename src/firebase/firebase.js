// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-VBHr6y4LVJ1bhh4bP2ur4KgKGwOXQTc",
  authDomain: "ecoshift-3a6fd.firebaseapp.com",
  projectId: "ecoshift-3a6fd",
  storageBucket: "ecoshift-3a6fd.appspot.com",
  messagingSenderId: "418000167487",
  appId: "1:418000167487:web:591deddcca59b58b28ce8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  

export { app, auth };