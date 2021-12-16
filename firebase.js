import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBkcO3ZUxngHvupLfUlNesp_6pfvNPgVRk",
    authDomain: "facebook-pro-15c36.firebaseapp.com",
    projectId: "facebook-pro-15c36",
    storageBucket: "facebook-pro-15c36.appspot.com",
    messagingSenderId: "921475922018",
    appId: "1:921475922018:web:64c355175aad9bd5c0b93b"
  };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage();

export {db, storage}
