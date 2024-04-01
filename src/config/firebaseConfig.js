// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';

// // const firebaseConfig = {

// // };

// // const app = initializeApp(firebaseConfig);
// // const storage = getStorage(firebaseConfig);

// // import firebase from "firebase/app";
// // import "firebase/compat/storage";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: 'AIzaSyA6xDtjmQ38i4EMWgFxiJSxlkeZufuPyPk',
//     authDomain: 'react-native-at-5a228.firebaseapp.com',
//     projectId: 'react-native-at-5a228',
//     storageBucket: 'react-native-at-5a228.appspot.com',
//     messagingSenderId: '523863924315',
//     appId: '1:523863924315:web:1156a654546d139d2ae97e',
//     storageBucket: 'react-native-at-5a228.appspot.com'
// };

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6xDtjmQ38i4EMWgFxiJSxlkeZufuPyPk",
  authDomain: "react-native-at-5a228.firebaseapp.com",
  projectId: "react-native-at-5a228",
  storageBucket: "react-native-at-5a228.appspot.com",
  messagingSenderId: "523863924315",
  appId: "1:523863924315:web:1156a654546d139d2ae97e",
  storageBucket: "react-native-at-5a228.appspot.com"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(firebaseConfig);