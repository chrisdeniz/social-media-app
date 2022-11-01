import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChECIPnLVIkpGAefn_KF1KnNoh8TNvh28",
    authDomain: "social-media-app-1df84.firebaseapp.com",
    projectId: "social-media-app-1df84",
    storageBucket: "social-media-app-1df84.appspot.com",
    messagingSenderId: "109857893890",
    appId: "1:109857893890:web:d4c95e0e5a01ef3138411b",
    measurementId: "G-H9H95GPYZ8"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()
  export {db, auth} 