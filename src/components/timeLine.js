import { onNavigate } from '../app.js';
import {
  logOutFunct, validacion, usuario, getTasks, onGetTasks
} from '../firebase.js';

export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  /* Boton de cerrar sesión */
  const logOutAction = document.createElement('input');
  Object.assign(logOutAction, {
    id: 'logOutAct',
    type: 'submit',
    value: 'Cerrar sesión',
  });
  document.body.appendChild(logOutAction);

  /* Div de las publicaciones */
  const containerPost = document.createElement('div');
  containerPost.setAttribute('id', 'postcontainer');
  document.body.appendChild(containerPost);

  const ulPost = document.createElement('ul');
  ulPost.setAttribute('class', 'ulpost');
  document.body.appendChild(ulPost);

  const liPost = document.createElement('li');
  liPost.setAttribute('class', 'lipost');
  document.body.appendChild(liPost);

  // const titleH3 = document.createElement('h3');

  // const description1 = document.createElement('p');

  containerPost.append(ulPost, liPost);

  logOutAction.addEventListener('click', (e) => {
    e.preventDefault();
    const logout = document.querySelector('#logOutAct');
    logOutFunct();
  });

  const feed = () => {
    console.log('si sirvo');
    onGetTasks((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const allPosts = doc.data();
        html += html.append(allPosts.Title);
      });
      containerPost.innerHTML = html;
    });
  };
  feed();
  console.log(feed());
  // const setUpPost = (data) => {
  //   if (data) {
  //     const queries = () => {
  //       querySnapshot.forEach((doc) => {
  //         const postData = doc.data();
  //         const publicaciones = `${postData.Title} ${postData.Description}`;
  //         return publicaciones;
  //       });
  //     };
  //     // let html = '';
  //     // data.forEach((doc) => {
  //     //   const titleH3 = document.createElement('h3');

  //     //   const description1 = document.createElement('p');
  //     //   // description1.textContent = `${doc.data.Description}`;
  //     //   const post = doc.data();
  //     //   const li = titleH3.validacion() + description1.validacion();
  //     //   html += li;
  //     // });
  //     console.log(queries());
  //     // containerPost.append(queries());
  //     // containerPost.append(html);
  //   } else {
  //     containerPost.append('No hay post');
  //   }
  //   // validacion(setUpPost);
  // };
  // validacion();
  // containerPost.append(setUpPost(querySnapshot));
  // containerPost.append(setUpPost);

  timeLineDiv.append(
    logOutAction,
    containerPost,

  );
  return timeLineDiv;
};
