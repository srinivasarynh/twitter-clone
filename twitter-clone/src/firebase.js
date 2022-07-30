// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBdtT2qH7yRIfQfFqIC9iyB9JZI4RG5K3o",
    authDomain: "twitter-clone-6186f.firebaseapp.com",
    projectId: "twitter-clone-6186f",
    storageBucket: "twitter-clone-6186f.appspot.com",
    messagingSenderId: "814178925725",
    appId: "1:814178925725:web:1b063b2cf4130606aee874",
    measurementId: "G-QGZG42J9J4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;