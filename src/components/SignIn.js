/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
import { onNavigate } from '../app.js';

export const SignIn = () => {
  // const homeLogo = document.createElement('header');
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_large.png';
  document.body.appendChild(headerImg);
  const SignInDiv = document.createElement('div');
  SignInDiv.setAttribute('id', 'welcomeText');
  const homeH1 = document.createElement('h1');
  homeH1.textContent = 'prueba 1 de xxxxxx';

  const loginInputs = document.createComment('div');
  loginInputs.setAttribute('id', 'container1');
  const emailInput = document.createElement('input');
  emailInput.setAttribute(
    'id',
    'log_email',
    'class',
    'mailAndPass',
    'type',
    'text',
    'placeholder',
    'Correo electrónico',
  );
  const passInput = document.createElement('input');
  passInput.setAttribute(
    'id',
    'log_password',
    'class',
    'mailAndPass',
    'type',
    'password',
    'placeholder',
    'Contraseña',
  );
  const submitAction = document.createElement('input');
  submitAction.setAttribute('id', 'login', 'type', 'submit', 'value', 'Iniciar Sesión');
  const googleBtnLogin = document.createElement('button');
  googleBtnLogin.setAttribute('id', 'googleLogin', 'type', 'button', 'class', 'btn btn-secondary btn-block');
  googleBtnLogin.textContent = 'Iniciar Sesión con Google';

  submitAction.addEventListener('submit', () => {
    onNavigate('/');
  });

  SignInDiv.append(
    headerImg,
    homeH1,
    loginInputs,
    emailInput,
    passInput,
    submitAction,
    googleBtnLogin,
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
