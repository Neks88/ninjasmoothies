import firebase from 'firebase';
import firestore from 'firebase/firestore';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAscqVJvBLpxzXkjtKEwI7a3cLUCuUqDr8",
    authDomain: "ninjasmoothies-99232.firebaseapp.com",
    databaseURL: "https://ninjasmoothies-99232.firebaseio.com",
    projectId: "ninjasmoothies-99232",
    storageBucket: "ninjasmoothies-99232.appspot.com",
    messagingSenderId: "691707497140"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  //export firestore database

  export default firebaseApp.firestore()
