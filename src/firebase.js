import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8H-92mXrJndS8n2oYHk4IFrjaUhbbadU",
  authDomain: "store-react-redux.firebaseapp.com",
  projectId: "store-react-redux",
  storageBucket: "store-react-redux.appspot.com",
  messagingSenderId: "865832350175",
  appId: "1:865832350175:web:cdfffb75cae2cb4bd0146a",
  measurementId: "G-B6VTY4ZY0J",
});

const auth = firebase.auth();
const Gprovider = new firebase.auth.GoogleAuthProvider();
const Fprovider = new firebase.auth.FacebookAuthProvider();

export { auth, Gprovider, Fprovider };
