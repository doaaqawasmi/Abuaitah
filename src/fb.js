import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7ZH8fmN77DX0iX2hVb2--lXecCJlxn_w",
    authDomain: "abuaitah-4fba0.firebaseapp.com",
    projectId: "abuaitah-4fba0",
    storageBucket: "abuaitah-4fba0.appspot.com",
    messagingSenderId: "562305513353",
    appId: "1:562305513353:web:8561f817de19eb29a69358",
    measurementId: "G-1ZFWPW8VBR"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export { app, firebase, db };


