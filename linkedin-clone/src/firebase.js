import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA6hcFwo9kaa9FaqXlXRm8ckW8pQyF63zg",
    authDomain: "linkedin-clone-3c4d9.firebaseapp.com",
    projectId: "linkedin-clone-3c4d9",
    storageBucket: "linkedin-clone-3c4d9.appspot.com",
    messagingSenderId: "594658197034",
    appId: "1:594658197034:web:5141a0629362d9fc148d53"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export {db, auth};