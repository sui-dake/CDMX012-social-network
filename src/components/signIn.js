/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
import { onNavigate } from '../app.js';
import { saveForm, signInFunct } from '../firebase.js';

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
  const submitAction = document.createElement('input');
  Object.assign(submitAction, {
    id: 'login',
    type: 'submit',
    value: 'Crear cuenta',
  });

  document.body.appendChild(submitAction);
  signInInputs.append(nameInput, emailInput, passInput, submitAction);
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
