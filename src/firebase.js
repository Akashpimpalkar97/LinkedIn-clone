import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDIKXLG1jZE31AmCD-CCeIZmmCgQyGeHUs",
  authDomain: "linkedin-4afb8.firebaseapp.com",
  projectId: "linkedin-4afb8",
  storageBucket: "linkedin-4afb8.appspot.com",
  messagingSenderId: "178999223013",
  appId: "1:178999223013:web:ae01864c3f523933722a0c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
