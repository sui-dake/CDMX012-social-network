/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
import { onNavigate } from '../app.js';

export const SignIn = () => {
  // const homeLogo = document.createElement('header');
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_small.png';
  document.body.appendChild(headerImg);
  const SignInDiv = document.createElement('div');
  SignInDiv.setAttribute('id', 'welcomeText');
  const signH1 = document.createElement('h1');
  signH1.textContent = 'prueba 1 de xxxxxx';

  const signInInputs = document.createElement('div');
  signInInputs.setAttribute('id', 'container1');
  const nameInput = document.createElement('input');
  Object.assign(nameInput, {
    id: 'log_name',
    class: 'mailAndPass',
    type: 'text',
    placeholder: 'Nombre',
  });
  document.body.appendChild(nameInput);

  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    id: 'log_email',
    class: 'mailAndPass',
    type: 'text',
    placeholder: 'Correo Electrónico',
  });
  document.body.appendChild(emailInput);
  const passInput = document.createElement('input');
  Object.assign(passInput, {
    id: 'log_password',
    class: 'mailAndPass',
    type: 'password',
    placeholder: 'Contraseña',
  });
  document.body.appendChild(passInput);
<<<<<<< HEAD
=======

  // Boton crear cuenta
>>>>>>> 64b2e5e10a5f662376c1f18c3da50fc3fd822601
  const submitAction = document.createElement('input');
  Object.assign(submitAction, {
    id: 'login',
    type: 'submit',
    value: 'Crear cuenta',
  });
  document.body.appendChild(submitAction);
  signInInputs.append(nameInput, emailInput, passInput, submitAction);
  submitAction.addEventListener('click', () => {
    onNavigate('/');
  });

  SignInDiv.append(
    headerImg,
    signH1,
    signInInputs,
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
