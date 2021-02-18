// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuJEp9ODOXhzSZ4v9tlxoJZVyWBKB11Bc",
  authDomain: "clone-front-end.firebaseapp.com",
  projectId: "clone-front-end",
  storageBucket: "clone-front-end.appspot.com",
  messagingSenderId: "471079661835",
  appId: "1:471079661835:web:13c4822fa27165dc8db20e",
  measurementId: "G-8DMZFR3PDF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
