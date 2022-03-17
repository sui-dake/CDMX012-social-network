/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
// eslint-disable-next-line no-unused-vars
import { onNavigate } from '../app.js';

/// ///  VISTA CREACION DE CUENTA ////////////
export const SignIn = () => {
  /// / LOGO E INTRODUCCION /////////////
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_small.png';
  headerImg.setAttribute('id', 'logo_hexagonal');
  document.body.appendChild(headerImg);
  const SignInDiv = document.createElement('div');
  SignInDiv.setAttribute('id', 'welcomeText2');
  const signH1 = document.createElement('h1');
  signH1.textContent = '¡Estás a punto de comenzar! Introduce tus datos';
  /// //// FORMULARIO PARA CREAR CUENTA/////////////
  const signInInputs = document.createElement('div');
  signInInputs.setAttribute('id', 'container1');

  const nameInput = document.createElement('input');
  Object.assign(nameInput, {
    id: 'log_name',
    type: 'text',
    placeholder: 'Nombre',
  });
  nameInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(nameInput);

  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    id: 'log_email',
    type: 'text',
    placeholder: 'Correo Electrónico',
  });
  emailInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(emailInput);

  const passInput = document.createElement('input');
  Object.assign(passInput, {
    id: 'log_password',
    type: 'password',
    placeholder: 'Contraseña',
  });
  passInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(passInput);

  const submitAction = document.createElement('input');
  Object.assign(submitAction, {
    id: 'creat_acc',
    type: 'submit',
    value: 'Crear cuenta',
  });
  document.body.appendChild(submitAction);

  /// ///// PINTAR NODOS EN HTML ////////
  signInInputs.append(nameInput, emailInput, passInput, submitAction);
<<<<<<< HEAD
<<<<<<< HEAD
  submitAction.addEventListener('click', () => {
    onNavigate('/');
=======
  
  //////// INTERACCION FIRESTORE Y AUTH ////////
  submitAction.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#log_name');
    const email = document.querySelector('#log_email');
    const password = document.querySelector('#log_password');
    console.log(name.value, email.value, password.value);
    function holi() {
      console.log('registrado');
      // const name = document.querySelector('#log_name').value;
      const email_auth = document.querySelector('#log_email').value;
      const pass_auth = document.querySelector('#log_password').value;
      console.log(email_auth, pass_auth);
      signInFunct(email_auth, pass_auth);
    }
    holi();
    saveForm(name.value, email.value, password.value);
>>>>>>> ab9e856b46a3e040bde09982f047b58ef1fa1122
  });

=======

  /// ///// INTERACCION FIRESTORE Y AUTH ////////
  submitAction.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#log_name').value;
    const email = document.querySelector('#log_email').value;
    const password = document.querySelector('#log_password').value;

    signInFunct(email, password);

    saveForm(name, email, password);
  });
  const footerImg = document.createElement('img');
  footerImg.src = 'imagenes/perrito1.jpg';
  document.body.appendChild(footerImg);
  footerImg.setAttribute('id', 'footer_img');
>>>>>>> 90a61ca893edddae2f281a84972736e9c52306bc
  SignInDiv.append(
    headerImg,
    signH1,
    signInInputs,
    footerImg,
  );
  return SignInDiv;
};

// export const signIn = `
// <div id="task-form">
//   <input type="text" class="mailAndPass" id = 'email' name = 'email' placeholder="E-mail">
//   <input type="password" class="mailAndPass" id = 'password' name="password" placeholder="Password">
//   <input type="submit" id = 'sign_up' name = 'sign_up_submit' value="Crear cuenta">
//  </div>
//  <script>const taskForm = document.querySelector('#task-form');
//  console.log ('holiiiii');</script>
// `;
// function holi() {
//   const taskForm = document.querySelector('#task-form');
//   taskForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('registrado');
//     const email = document.querySelector('#email').value;
//     const pass = document.querySelector('#password').value;
//     console.log(email, pass);
//     signInFunct(email, pass);
//   });
// }
