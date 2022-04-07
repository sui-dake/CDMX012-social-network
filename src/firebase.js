import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query, where,
  orderBy,
  updateDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
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
// import { impresion } from './components/signIn.js';
import { onNavigate } from './app.js';

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

/* const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(); */

export const signInFunct = (email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          alert('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/weak-password') {
          alert('Tu contraseña debe contener al menos 6 carácteres.');
        }
        if (tkn === 'auth/email-already-in-use') {
          alert(
            'Ya existe una cuenta con este correo, intenta con uno nuevo o Inicia Sesión',
          );
        }
      };
      const resultado = errores(errorCode);
      return resultado;
    });
};

export const saveForm = (name, email, password) => {
  addDoc(collection(db, 'users'), { name, email, password });
  console.log('saveF');
};

export const savePost = (Description, date) => {
  const users = auth.currentUser;
  if (users) {
    console.log('saveF');
    const email = users.email;
    const UID = users.uid;
    const likes = [];
    addDoc(collection(db, 'posts'), {
      email, Description, date, likes, UID,
    });
  }
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
      console.log(user);
      onNavigate('/timeLine');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          console.log('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/wrong-password') {
          console.log('Tu contraseña es incorrecta');
        }
        if (tkn === 'auth/user-not-found') {
          console.log(
            'Correo no registrado, crea una cuenta',
          );
        }
      };
      errores(errorCode);
      // console.log(typeof mensaje);
      // impresion(mensaje);
    });
};
// crear fun para errores (traducciones)
// Función cerrar sesión
export const logOutFunct = () => {
  signOut(auth)
    .then(() => {
      console.log('deslogueado');
    })
    .catch((error) => { console.log(error); });
};

/* export const dataCall = (callBackFn) => {
  getDocs(collection(db, 'posts')).then((snapshot) =>
    callBackFn(snapshot.docs);

  });
}; */

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  }
});

// const data = collection(db, 'posts');

// const w = query(data, orderBy('date', 'asc'));
// export const unsubscribe = (funct) => {
//   console.log('unsus');
//   onSnapshot(w, (snapshot) => {
//     const changes = snapshot.docChanges();
//     console.log(changes);
//     funct(changes);
//   });
// };
export const unsubscribe = (funct) => {
  const data = collection(db, 'posts');
  const orderData = query(data, orderBy('date', 'asc'));
  let postsArray = [];
  onSnapshot(orderData, (snapshot) => {
    postsArray = [];
    // console.log('start postsArray.size=' + postsArray.length);
    // console.log('snapshot.size=' + snapshot.size);
    // console.log('snapshot.docChanges().size=' + snapshot.docChanges().length);
    snapshot.forEach((postDoc) => {
      // either edit, update or delete
      if (postDoc.metadata.hasPendingWrites) {
        // objeto fue actualizado
        if (postDoc.exists) {
          console.log('existen cambios');
          // edit or create logic
          // console.log('edit or create logic '+ postDoc.id + "  "+ postDoc.data().Description)
          // console.log(postDoc.data());
          postsArray.push({
            id: postDoc.id,
            ...postDoc.data(),
          });
        } else{
          // delete logic
          // console.log('delete logic=' + postDoc.id + "  "+postDoc.data().Description);
        }
      } else {
        console.log('no existen cambios');
        // objeto no tiene cambios
        // console.log('objeto no tiene cambios='+ postDoc.id + "  " + postDoc.data().Description);
        // console.log(postDoc.data());
        postsArray.push({
          id: postDoc.id,
          ...postDoc.data(),
        });
      }
    });
    // console.log('END postsArray.size=' + postsArray.length);
    funct(postsArray);
  });
};

export const currUser = () => {
  const users = auth.currentUser;
  if (users) {
    return users.uid;
  }
};
/// /Likes//
export const likeArray = async (postId) => {
  const users = auth.currentUser;
  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await updateDoc(postCollection, {
      likes: arrayUnion(userId),
    });
  }
};
export const dislike = async (postId) => {
  const users = auth.currentUser;
  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await updateDoc(postCollection, {
      likes: arrayRemove(userId),
    });
  }
};

export const totalLikes = (post) => {
  const allLikes = post.likes;
  return allLikes.length;
};
export const userLikes = (post) => {
  const Likes = post.likes;
  //console.log(Likes);
  return Likes;
};
// //// EDIT POST ///
export const editP = async (postId, postDesc) => {
  const users = auth.currentUser;
  if (users) {
    const postColle = doc(db, 'posts', postId);
    await updateDoc(postColle, {
      Description: postDesc,
    });
  }
};
// export const editP = async (postId, postDesc, liked) => {
//   const users = auth.currentUser;
//   if (users) {
//     const postColle = doc(db, 'posts', postId);
//     await setDoc(postColle, {
//       Description: postDesc,
//       UID: users.uid,
//       date: new Date(),
//       email: users.email,
//       //likes: [`${liked}`],
//     });
//   }
// };
// /// REMOVE POST ///
export const removing = async (postId) => {
  const users = auth.currentUser;
  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await deleteDoc(postCollection);
    // unsubscribe(postwo);
  }
};
