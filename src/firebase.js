// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,

// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
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
const db = getFirestore();
const auth = getAuth();
//const fs = app.firestore();
//const docRef = query(collection(db, 'posts'));
export const querySnapshot = await getDocs(collection(db, 'posts'));
export const usuario = await getDocs(collection(db, 'users'));

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

// const googleButton = document.querySelector('#googleLogin');
// googleButton.addEventListener('click', (e) => {
//  const credential = GoogleAuthProvider.credentialFromResult(result);

//Crear cuenta con Google
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
    }).catch((error) => {
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

//Crear cuenta con Facebook
export const facebookLog = () => {
  signInWithRedirect(auth, provider2);
  getRedirectResult(auth)
    .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    }).catch((error) => {
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

//Función iniciar sesión
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

//Función cerrar sesión
export const logOutFunct = () => {
  signOut(auth)
  .then(() => {
 console.log('deslogueado');
 }).catch((error) => {
})};

 //Función para que solo se pueda acceder el time line con cuenta valida
/*export const dataCall = (token) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      collection(db, 'posts')
      .get()
      .then((snapshot) =>{ 
      console.log(snapshot.docs);
      token(snapshot.docs)
      })
    } else {
    console.log("no autenticado")
    token([]);
    }
  });*/
 
  export const validacion = () => {
    onAuthStateChanged(auth, user => {
    if (user){
    console.log('loggeado')
    console.log(querySnapshot);
    } else {
      console.log('No estas logeada');
    };
  })};
    // querySnapshot.forEach((doc) => {
    //   const postData = doc.data()
    //    const publicaciones =`${postData.Title} ${postData.Description}`;
    //    console.log(publicaciones);
    //    return publicaciones;
//     });
//      }else{
//     console.log('No estas logeada');
//   }
// });
//   }



/*const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/


// export const saveTask = (email, password) => addDoc(collection(db, 'users'), { email, password })
export const getTasks = () => getDocs(collection, (db, 'posts'));
export const onGetTasks = (callback) => onSnapshot(collection, (db, 'posts'));
// export const authFunction = () => createUserWithEmailAndPassword(auth, email, password);