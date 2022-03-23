import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query, where,

} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAiKKsrEJpCx8NgpvvcNp1dykxNjEyzqe0',
  authDomain: 'redsocialmascotasars.firebaseapp.com',
  projectId: 'redsocialmascotasars',
  storageBucket: 'redsocialmascotasars.appspot.com',
  messagingSenderId: '193884625743',
  appId: '1:193884625743:web:0089978f1ca3f84fcc433a',
  measurementId: 'G-97XRHHD647',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

export const signInFunct = (email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const saveForm = (name, email, password) => {
  addDoc(collection(db, 'users'), { name, email, password });
};

export const savePost = (Title, Description) => {
  addDoc(collection(db, 'posts'), { Title, Description });
};

// Crear cuenta con Google
export const googleLogin = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('funciona?');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Crear cuenta con Facebook
export const facebookLog = () => {
  signInWithRedirect(auth, provider2);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    });
};

// Función iniciar sesión
export const loginInFunct = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// Función cerrar sesión
export const logOutFunct = () => {
  signOut(auth)
    .then(() => {
      console.log('deslogueado');
    })
    .catch((error) => { console.log(error); });
};

export const dataCall = (callBackFn) => {
  // console.log(user.email);

  getDocs(collection(db, 'posts')).then((snapshot) => {
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    // console.log(snapshot.docs);
    callBackFn(snapshot.docs);
    // loginCheck(user);
  });
};
