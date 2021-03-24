import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByYg-OrzJOjThFolpo7hhb0y17GTZUxyQ",
  authDomain: "netflix-clone-ba54c.firebaseapp.com",
  projectId: "netflix-clone-ba54c",
  storageBucket: "netflix-clone-ba54c.appspot.com",
  messagingSenderId: "932855654727",
  appId: "1:932855654727:web:df4b05074e15e8c1638462",
  measurementId: "G-QMR6BQETRX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
