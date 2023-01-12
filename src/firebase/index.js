import firebase from "firebase/app";
import 'firebase/firestore';

 var firebaseConfig = {
  apiKey: "AIzaSyBm9EpEDKkceF_3flsj-3_xmKFqZigWSZE",
  authDomain: "react-coderhouse-c7a80.firebaseapp.com",
  projectId: "react-coderhouse-c7a80",
  storageBucket: "react-coderhouse-c7a80.appspot.com",
  messagingSenderId: "489833141433",
  appId: "1:489833141433:web:987cf9c5c64cb4e80fb768"
};

const app = firebase.initializeApp(firebaseConfig);


export function getFirebase(){
 return app;
}

export function getFirestore(){
 return firebase.firestore(app);
}
