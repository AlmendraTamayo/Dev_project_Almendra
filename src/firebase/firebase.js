import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBs8Ptw-2oMtJWxin7OqyWDjk0T4hj1kkE",
    authDomain: "devproject-cd817.firebaseapp.com",
    projectId: "devproject-cd817",
    storageBucket: "devproject-cd817.appspot.com",
    messagingSenderId: "148549542538",
    appId: "1:148549542538:web:5e7dc94ae58b52de510373"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const loginConGoogle = () => auth.signInWithPopup(provider);
export const logout = () => auth.signOut();

export default firebase;

