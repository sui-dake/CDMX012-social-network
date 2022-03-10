// import { async } from './regenerator-runtime';saveTask, getTask, authFunction,
// eslint-disable-next-line import/no-unresolved
// import { auth } from './firebase.js';

// const emailContainer = document.getElementById('email_container')
// const signUp = document.getElementById('sign_up');

// signUp.addEventListener('click', (e) =>{
//   var email = document.getElementById('email').value;
//   var password= document.getElementById('password').value;

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

// window.addEventListener('DOMContentLoaded', async () => {
//   const querySnapshot = await getTask();
//   let html = '';
//   querySnapshot.forEach(doc => {
//     const task = doc.data()
//     html += `
//     <div>
//         <h3>${task.email}</h3>
//         <p>${task.password}</p>
//     </div>`;
//   });
//   emailContainer.innerHTML = html;
// });

// signUp.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // console.log ('submitted');
//   const email = signUp['task-title'];
//   const password = signUp['task-description'];
//   saveTask(email.value, password.value);
// });