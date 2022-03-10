// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

// import { getAnalytics } from 'firebase/analytics';
// import { myFunction } from './lib/index.js';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// // Import the functions you need from the SDKs you need

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAiKKsrEJpCx8NgpvvcNp1dykxNjEyzqe0',
//   authDomain: 'redsocialmascotasars.firebaseapp.com',
//   projectId: 'redsocialmascotasars',
//   storageBucket: 'redsocialmascotasars.appspot.com',
//   messagingSenderId: '193884625743',
//   appId: '1:193884625743:web:0089978f1ca3f84fcc433a',
//   measurementId: 'G-97XRHHD647',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const database = getDatabase(app);
// const auth = getAuth();

// sign_up.addEventListener('click', (e) =>{

// var email = document.getElementById('email').value;
// var password= document.getElementById('password').value;
// // let email = document.getElementById('').value;
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//     set(ref(database, 'users/' + user.uid),{
//       email: email
//     })
//     alert("Usuario creado!");
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage);
//     // ..
//   });
// });

// login.addEventListener ('click', (e) =>{
//   var email = document.getElementById('email').value;
//   var password= document.getElementById('password').value;
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//     const dt = new Date ();
//     update(ref(database, 'users/' + user.uid),{
//       last_login: dt,
//     })
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// })
