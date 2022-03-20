// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../app.js';

export const Home = () => {
  // const homeLogo = document.createElement('header');
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_large.png';
  document.body.appendChild(headerImg);
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('id', 'welcomeText');
  document.body.appendChild(HomeDiv);
  const homeH1 = document.createElement('h1');
  homeH1.textContent = '¡Bienvenidx a la comunidad amante de las mascotas!';

  const loginInputs = document.createElement('div');
  loginInputs.setAttribute('id', 'container1');
  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    id: 'log_email',
    class: 'mailAndPass',
    type: 'text',
    placeholder: 'Correo electrónico',
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
    value: 'Iniciar Sesión',
  });
  document.body.appendChild(submitAction);
  const createAcc = document.createElement('button');
  Object.assign(createAcc, {
    id: 'acc_creation',
    type: 'button',
    textContent: 'Crear cuenta',
  });
  document.body.appendChild(createAcc);
  loginInputs.append(emailInput, passInput, submitAction, createAcc);
  const googleBtnLogin = document.createElement('button');
  googleBtnLogin.setAttribute('id', 'googleLogin', 'type', 'button', 'class', 'btn btn-secondary btn-block');
  googleBtnLogin.textContent = 'Iniciar Sesión con Google';

  createAcc.addEventListener('click', () => {
    onNavigate('/signIn');
  });

  HomeDiv.append(
    headerImg,
    homeH1,
    loginInputs,
    googleBtnLogin,
  );
  return HomeDiv;
};

// revisar si está loggeada,mostrar timeline, else manda login
// hacer de home y todas las js una function

// tag for img is 'figure'
