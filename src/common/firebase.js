import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNTOV95IjjIcVpOwfyAhIg7C19H89FR8Q",
  authDomain: "ify-simple-d2d1f.firebaseapp.com",
  databaseURL: "https://ify-simple-d2d1f.firebaseio.com",
  projectId: "ify-simple-d2d1f",
  storageBucket: "ify-simple-d2d1f.appspot.com",
  messagingSenderId: "720692364590",
  appId: "1:720692364590:web:8d2948222e965c74d526bf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
