import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqVLLv8ox7UR4UXdEodZBYj-foEfbLSeE",
    authDomain: "linkedin-clone-7bdf3.firebaseapp.com",
    projectId: "linkedin-clone-7bdf3",
    storageBucket: "linkedin-clone-7bdf3.appspot.com",
    messagingSenderId: "673833540069",
    appId: "1:673833540069:web:34d79a489e1a9f3a03b70c"
  };

const firebaseapp =firebase.intializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db , auth};