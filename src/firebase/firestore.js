// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_QdydxUC2SYIWN0-dubNW-p9J6aTFHo",
  authDomain: "portfolio-de9c4.firebaseapp.com",
  projectId: "portfolio-de9c4",
  storageBucket: "portfolio-de9c4.appspot.com",
  messagingSenderId: "124518144896",
  appId: "1:124518144896:web:6fb01b83248dfa454abf65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);