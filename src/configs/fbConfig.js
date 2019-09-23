import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDu0Zn7IrSvHOG8w_puTG8WRm3eqw1VGjg",
  authDomain: "nicereads-7e1dc.firebaseapp.com",
  databaseURL: "https://nicereads-7e1dc.firebaseio.com",
  projectId: "nicereads-7e1dc",
  storageBucket: "",
  messagingSenderId: "480516394336",
  appId: "1:480516394336:web:2072162464d4e830db2205"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
