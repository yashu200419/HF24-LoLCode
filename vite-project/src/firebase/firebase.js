// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBccyOi_ZmvDYrB6MKnYMg1xMRTiFRHHTc",
  authDomain: "ecoshift-60779.firebaseapp.com",
  projectId: "ecoshift-60779",
  storageBucket: "ecoshift-60779.appspot.com",
  messagingSenderId: "790874654460",
  appId: "1:790874654460:web:3a2014723876e46e6ef979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app,auth};