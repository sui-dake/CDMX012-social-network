/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
import { onNavigate } from '../app.js';
import { saveForm, signInFunct } from '../firebase.js';

//////  VISTA CREACION DE CUENTA ////////////
export const SignIn = () => {
  //// LOGO E INTRODUCCION /////////////
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_small.png';
  headerImg.setAttribute('id', 'logo_hexagonal');
  document.body.appendChild(headerImg);
  const SignInDiv = document.createElement('div');
  SignInDiv.setAttribute('id', 'welcomeText2');
  const signH1 = document.createElement('h1');
  signH1.textContent = '¡Estás a punto de comenzar! Introduce tus datos';
/////// FORMULARIO PARA CREAR CUENTA/////////////
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
    id: 'login',
    type: 'submit',
    value: 'Crear cuenta',
  });
  document.body.appendChild(submitAction);

  //////// PINTAR NODOS EN HTML ////////
  signInInputs.append(nameInput, emailInput, passInput, submitAction);
  
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
  });
  SignInDiv.append(
    headerImg,
    signH1,
    signInInputs,
  );
  return SignInDiv;
};
  // FALTA OPCION PARA RESETEAR FORMULARIO !!!! ////
// export const signIn =
