import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcXyfDxVLNDORbYEQ72kKLd7LFG32-CJA",
  authDomain: "whatsapp-clone-4bd23.firebaseapp.com",
  projectId: "whatsapp-clone-4bd23",
  storageBucket: "whatsapp-clone-4bd23.appspot.com",
  messagingSenderId: "984971410528",
  appId: "1:984971410528:web:66f9b7605bba80f3ca9705",
  measurementId: "G-VNM08P8L0M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;