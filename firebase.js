// // Import the functions you need from the SDKs you need
// // import * as firebase from "firebase";
// // import { getFirestore } from "firebase/firestore";

// import { firebase } from '@firebase/app'
// import '@firebase/auth'
// import '@firebase/firestore'

// // import { initializeApp } from 'firebase/app';
// // import { getFirestore, setDoc, doc } from 'firebase/firestore';
// // import * as f from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDxfmE-gZF2u04Y-Q72FJtHzbkVVwE2UHU",
//   authDomain: "o-rds-78a9d.firebaseapp.com",
//   projectId: "o-rds-78a9d",
//   storageBucket: "o-rds-78a9d.appspot.com",
//   messagingSenderId: "656015579051",
//   appId: "1:656015579051:web:ba0d483eb5e69cf15224ee",
//   measurementId: "G-LM73HPVTXP"
// };

// // Initialize Firebase
// let app;
// if(!firebase.apps.length)
//   app = firebase.initializeApp(firebaseConfig);



// const auth = firebase.auth();
// const db = getFirestore(app);
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase


let myApp = initializeApp(firebaseConfig);
const firestore = getFirestore(myApp);

export { firestore };