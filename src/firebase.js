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
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// signInWithEmailAndPassword
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

const taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('registrado');
  const email = document.querySelector('#email').value;
  const pass = document.querySelector('#password').value;
  console.log(email, pass);

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('cualquiercosa');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#log_email').value;
  const password = document.querySelector('#log_password').value;
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('loggeado');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      console.log('deslogueado');
    })
})

// export const saveTask = (email, password) => addDoc(collection(db, 'users'), { email, password })
// export const getTasks = () => { getDocs(collection, (db, 'users'));}
// export const onGetTasks = (callback) => onSnapshot(collection, (db, 'users'));
// export const authFunction = () => createUserWithEmailAndPassword(auth, email, password);