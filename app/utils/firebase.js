import firebase from "firebase";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD8QWwDtBDTI1OJU4-n3W4xrTQfFtNaWGI",
  authDomain: "climaproject-ibm.firebaseapp.com",
  projectId: "climaproject-ibm",
  storageBucket: "climaproject-ibm.appspot.com",
  messagingSenderId: "909183259854",
  appId: "1:909183259854:web:793550faacdc1b69f66c9f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db


};