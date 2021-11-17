import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0DodyFAfoukkz5X8ItxM8vYKYcb15_cA",
  authDomain: "tenedores-dfdd9.firebaseapp.com",
  projectId: "tenedores-dfdd9",
  storageBucket: "tenedores-dfdd9.appspot.com",
  messagingSenderId: "1028522935196",
  appId: "1:1028522935196:web:cb8f4100a3f9122f25fe59",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
