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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore();
//módulo de autenticación:
export const auth = firebase.auth();
//el proveedor de la autenticación:
export const provider = new firebase.auth.GoogleAuthProvider();
//la utilidad para hacer login con el pop-up:
export const loginConGoogle = () => auth.signInWithPopup(provider);
//la utilidad para hacer logout:
export const logout = () => auth.signOut();

// exporta el paquete de firebase para poder usarlo
export default firebase;