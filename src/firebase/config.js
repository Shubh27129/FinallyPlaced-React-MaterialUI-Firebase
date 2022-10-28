// Import the functions you need from the SDKs you need
import app from "firebase/app";
import'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKsAgxUEKPynwlxcECeK4dvXVqu0GhK5M",
  authDomain: "finally-placed.firebaseapp.com",
  projectId: "finally-placed",
  storageBucket: "finally-placed.appspot.com",
  messagingSenderId: "343797969272",
  appId: "1:343797969272:web:076dd15f90b59ed5d7588d"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore= firebase.firestore();
export{firebase, firestore,app};