import { onNavigate } from '../app.js';
import { logOutFunct } from '../firebase.js';

export const Profile = () => {
  const ProfileDiv = document.createElement('div');
  ProfileDiv.setAttribute('id', 'ProfileDiv');

  const profileHolder = document.createElement('h3');
  Object.assign(profileHolder, {
    id: 'profileHolder',
    textContent: 'Este es tu perfil :) ',
  });
  const logOutAction = document.createElement('input');
  Object.assign(logOutAction, {
    id: 'logOutAct',
    type: 'submit',
    class: 'loggedIn',
    value: 'Cerrar sesión',
  });
  document.body.appendChild(logOutAction);

  logOutAction.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#logOutAct');
    onNavigate('/');
    logOutFunct();
  });
  ProfileDiv.append(profileHolder, logOutAction);
  return ProfileDiv;
};
