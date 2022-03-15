// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../app.js';

export const Home = () => {
  // const homeLogo = document.createElement('header');
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_large.png';
  document.body.appendChild(headerImg);
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('id', 'welcomeText');
  const homeH1 = document.createElement('h1');
  homeH1.textContent = '¡Bienvenidx a la comunidad amante de las mascotas!';

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
    onNavigate('/signIn');
  });

  HomeDiv.append(
    headerImg,
    homeH1,
    loginInputs,
    emailInput,
    passInput,
    submitAction,
    googleBtnLogin,
  );
  return HomeDiv;
};

// revisar si está loggeada,mostrar timeline, else manda login
// hacer de home y todas las js una function

// tag for img is 'figure'
