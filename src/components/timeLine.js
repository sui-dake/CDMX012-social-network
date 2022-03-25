// import { async } from 'regenerator-runtime';
import { onNavigate } from '../app.js';

import {
  logOutFunct, dataCall, savePost, unsubscribe,
} from '../firebase.js';

// window.addEventListener('DOMContentLoaded', async () => {
//   const querySnapshot = await getTaks();

//   querySnapshot.forEach(doc => {
//     console.log(doc);
//   });
// });

export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  // const headerImg = document.createElement('img');
  // headerImg.src = 'imagenes/logo_small.png';
  // headerImg.setAttribute('id', 'logo_hex');
  // document.body.appendChild(headerImg);

  /* Boton de cerrar sesión */
  const logOutAction = document.createElement('input');
  Object.assign(logOutAction, {
    id: 'logOutAct',
    type: 'submit',
    class: 'loggedIn',
    value: 'Cerrar sesión',
  });
  document.body.appendChild(logOutAction);

  /* Div de las publicaciones */

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'postContainer');
  document.body.appendChild(postContainer);

  logOutAction.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#logOutAct');
    onNavigate('/');
    logOutFunct();
  });

  const setUpPost = (posts) => {
    while (setUpPost.firstChild) {
      setUpPost.removeChild(setUpPost.firstChild);
    }
    const newPost = document.createElement('textarea');
    Object.assign(newPost, {
      name: 'post',
      rows: '10',
      cols: '50',
      id: 'newPost',
      class: 'newPost',
      placeholder: '¿Qué estás pensando?',
    });
    // document.body.appendChild(newPost);

    const postButton = document.createElement('input');
    Object.assign(postButton, {
      type: 'submit',
      value: 'Postear',
      id: 'postButton',
    });
    // document.body.appendChild(postButton);

    postButton.addEventListener('click', (e) => {
      e.preventDefault();
      // const postDescription = document.querySelector('#newPost');
      savePost('Publicación', newPost.value, new Date());
    });
    // const postList = document.getElementById('postContainer');
    postContainer.append(newPost, postButton);
    /// ///////////////////////////////////////////////////////////////////////////
    posts.forEach((change) => {
      if (change.type == 'added') {
        console.log(change.doc.data());
        // while (postList.firstChild) {
        //   postList.removeChild(postList.lastChild);
        // }
        const articleContent = document.createElement('article');
        articleContent.setAttribute('id', 'articleContent');

        const titleH3 = document.createElement('h3');
        titleH3.append(change.doc.data().Title);

        const postContent = document.createElement('p');
        Object.assign(postContent, {
          id: 'postContent',
          textContent: change.doc.data().Description,
        });
        // document.body.appendChild(postContent);
        articleContent.append(titleH3, postContent);
        postContainer.append(articleContent);
      }
    });
    /// /////////////////////////////////////////////////////////////
  };
  unsubscribe(setUpPost);

  timeLineDiv.append(logOutAction, postContainer);
  return timeLineDiv;
};

// if (posts.length > 0) {
//   posts.forEach((doc) => {
//     const post = doc.data();
//     const articleContent = document.createElement('article');
//     articleContent.setAttribute('id', 'articleContent');

//     const titleH3 = document.createElement('h3');
//     titleH3.append(post.Title);

//     const postContent = document.createElement('p');
//     Object.assign(postContent, {
//       id: 'postContent',
//       textContent: post.Description,
//     });
//     document.body.appendChild(postContent);
//     articleContent.append(titleH3, postContent);
//     postList.append(newPost, postButton, articleContent);
//   });
// } else {
//  postList.innerHTML = 'Inicia sesión para ver tus posts';

// }
// });

// const loggedOutLinks = document.querySelectorAll(".loggedOut");
// const loggedInLinks = document.querySelectorAll(".loggedIn");

// export const loginCheck = (user) => {
//   if (user) {
//     loggedInLinks.forEach((link) => (link.style.display = 'block'));
//     loggedOutLinks.forEach((link) => (link.style.display = 'none'));
//   } else {
//     loggedInLinks.forEach((link) => (link.style.display = 'none'));
//     loggedOutLinks.forEach((link) => (link.style.display = 'block'));
//   }
// };
