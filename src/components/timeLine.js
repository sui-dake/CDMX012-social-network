import { onNavigate } from '../app.js';
import { logOutFunct, validacion, usuario } from '../firebase.js';


export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  /*Boton de cerrar sesión*/
  const logOutAction = document.createElement('input');
  Object.assign(logOutAction, {
    id: 'logOutAct',
    type: 'submit',
    value: 'Cerrar sesión',
  });
  document.body.appendChild(logOutAction);

  /*Div de las publicaciones*/
  const containerPost = document.createElement('div');
  containerPost.setAttribute('id', 'postcontainer')
  document.body.appendChild(containerPost);

  const ulPost = document.createElement('ul');
  ulPost.setAttribute('class', 'ulpost')
  document.body.appendChild(ulPost);

  const liPost = document.createElement('li');
  liPost.setAttribute('class', 'lipost')
  document.body.appendChild(liPost);

  const titleH3 = document.createElement('h3');

  const description1 = document.createElement('p');

  containerPost.append(ulPost, liPost,);

  logOutAction.addEventListener('click', (e) => {
    e.preventDefault();
    const logout = document.querySelector('#logOutAct');
    logOutFunct();
  });

  /*const setUpPost = data => {
    if(data.length){
      let html = '';
      data.forEach(doc =>{
        const titleH3 = document.createElement('h3');
  titleH3.textContent = `${doc.data.title}`;

  const description1 = document.createElement('p');
  description1.textContent = `${doc.data.description}`;
        const post = doc.data();
        const li = containerPost;
        html += li;
      })
      containerPost.append(html); 
    }else{
    containerPost.append('No hay post');
    }
  }*/
 validacion();
 
containerPost.innerHTML=validacion(usuario);

timeLineDiv.append(
  logOutAction,
  containerPost,
  
);
return timeLineDiv;
}
