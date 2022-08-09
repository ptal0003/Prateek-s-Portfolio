// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault, cert } = require('firebase/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZCrV_JFUQk2sk61GOmYz4GL6lV5smLd8",
  authDomain: "myexplanation-8e5e9.firebaseapp.com",
  databaseURL: "https://myexplanation-8e5e9.firebaseio.com",
  projectId: "myexplanation-8e5e9",
  storageBucket: "myexplanation-8e5e9.appspot.com",
  messagingSenderId: "427475725047",
  appId: "1:427475725047:web:3507c4d03a307d9eba41f2",
  measurementId: "G-PMBMX974XL"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db