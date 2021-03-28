import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
firebase.analytics();