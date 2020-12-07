import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUNdvchMeirvq_m5j1jy4hPPszcUKeIbQ",
    authDomain: "wapp-mern.firebaseapp.com",
    databaseURL: "https://wapp-mern.firebaseio.com",
    projectId: "wapp-mern",
    storageBucket: "wapp-mern.appspot.com",
    messagingSenderId: "7993782812",
    appId: "1:7993782812:web:9d12b7732ac36e09bca5d9",
    measurementId: "G-BXXJQM29H2"
  };
  

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;