import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCC-Dsr41XgDRckfiuXeGYrQqv2g9jKcIA",
    authDomain: "netflix-clone-25dd2.firebaseapp.com",
    projectId: "netflix-clone-25dd2",
    storageBucket: "netflix-clone-25dd2.appspot.com",
    messagingSenderId: "1066751330850",
    appId: "1:1066751330850:web:dcb2ef8ea076e624fd187b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;