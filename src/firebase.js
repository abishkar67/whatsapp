import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-k9u6dbav2soxA4-86q73sctL3hmpPz4",
  authDomain: "whatsapp-clone-ef16b.firebaseapp.com",
  databaseURL: "",
  projectId: "whatsapp-clone-ef16b",
  storageBucket: "whatsapp-clone-ef16b.appspot.com",
  messagingSenderId: "207186964711",
  appId: "1:207186964711:web:a5bad82a6f43a0b3cd3242",
  measurementId: "G-8NT4X4W2P6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
