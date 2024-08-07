// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdykNJjKUU7AsTiajZZ5f099TTo5jGHN8",
  authDomain: "theshop-19b93.firebaseapp.com",
  projectId: "theshop-19b93",
  storageBucket: "theshop-19b93.appspot.com",
  messagingSenderId: "889844373707",
  appId: "1:889844373707:web:7ce18d73786dabadece34e",
  measurementId: "G-PX5QGJ0DZX",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export { appFirebase, analytics };
