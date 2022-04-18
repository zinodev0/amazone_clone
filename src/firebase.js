import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdNjG8mkz4Uq2GqWhWtGEVSWSvAXq_xe0",
  authDomain: "clone-5bd25.firebaseapp.com",
  databaseURL: "https://clone-5bd25.firebaseio.com",
  projectId: "clone-5bd25",
  storageBucket: "clone-5bd25.appspot.com",
  messagingSenderId: "823682372744",
  appId: "1:823682372744:web:06f61ec3842b1c8f60bb3d",
  measurementId: "G-MYMY5Z2HP0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
