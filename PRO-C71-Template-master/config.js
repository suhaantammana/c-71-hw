import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAEHGP9rq2oOKxtcji5y2RoucclPX6a6a8",
    authDomain: "c-71-hw-b50bc.firebaseapp.com",
    databaseURL: "https://c-71-hw-b50bc-default-rtdb.firebaseio.com",
    projectId: "c-71-hw-b50bc",
    storageBucket: "c-71-hw-b50bc.appspot.com",
    messagingSenderId: "1051941500474",
    appId: "1:1051941500474:web:6981b25d24ffcdae4aa703"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
