import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtQt0NGPTjTpjVbHtEmVXUm3xLYYR56AQ",
    authDomain: "whatsapp-clone-3ecea.firebaseapp.com",
    projectId: "whatsapp-clone-3ecea",
    storageBucket: "whatsapp-clone-3ecea.appspot.com",
    messagingSenderId: "1950517956",
    appId: "1:1950517956:web:e76503246e49d5169dd791"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;