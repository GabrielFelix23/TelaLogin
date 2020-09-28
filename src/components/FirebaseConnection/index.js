import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

 // Your web app's Firebase configuration
 let firebaseConfig = {
    apiKey: "AIzaSyDzF51r0ePFdPNig12FXRKgvkT_80Uf1zo",
    authDomain: "telalogin-e773b.firebaseapp.com",
    databaseURL: "https://telalogin-e773b.firebaseio.com",
    projectId: "telalogin-e773b",
    storageBucket: "telalogin-e773b.appspot.com",
    messagingSenderId: "1071532933681",
    appId: "1:1071532933681:web:7fe0af19976117c0da8b10"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
export default firebase