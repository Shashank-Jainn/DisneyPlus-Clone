import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCTHhFCSrzHB5AJ5Ik7oiHzL0AuO2sBeZc",
    authDomain: "disneyplus-clone-5c876.firebaseapp.com",
    projectId: "disneyplus-clone-5c876",
    storageBucket: "disneyplus-clone-5c876.appspot.com",
    messagingSenderId: "173897891429",
    appId: "1:173897891429:web:a745f9e200451ee7eed08c",
    measurementId: "G-29YLDCF95D"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
  