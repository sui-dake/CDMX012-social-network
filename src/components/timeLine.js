import { onNavigate } from '../app.js';
import {
  editP,
  likeArray,
  logOutFunct, removing, savePost, unsubscribe,
} from '../firebase.js';

export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  // /////////////////////// HEADER /////////////////////////
  const header = document.createElement('header');
  header.setAttribute('id', 'tlHeader');
  const headerLogo = document.createElement('img');
  headerLogo.src = 'imagenes/logo_small.png';
  headerLogo.setAttribute('id', 'logo_hexagonal2');
  document.body.appendChild(headerLogo);
  const headerInbox = document.createElement('img');
  headerInbox.src = 'imagenes/inbox.png';
  headerInbox.setAttribute('id', 'inbox');
  document.body.appendChild(headerInbox);
  const headerProfile = document.createElement('img');
  headerProfile.setAttribute('class', 'modal');
  Object.assign(headerProfile, {
    id: 'profile',
    type: 'button',
    src: 'imagenes/proto_profile.png',
  });
  document.body.appendChild(headerProfile);
  headerProfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  header.append(headerProfile, headerLogo, headerInbox);
  const wraper = document.createElement('div');
  wraper.setAttribute('id', 'wraper');

  /* Div de las publicaciones */
  const inputs = document.createElement('section');
  inputs.setAttribute('id', 'inputSection');

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'postContainer');
  document.body.appendChild(postContainer);
  const newPost = document.createElement('textarea');
  Object.assign(newPost, {
    name: 'post',
    rows: '10',
    cols: '50',
    id: 'newPost',
    class: 'newPost',
    placeholder: '¿Qué estás pensando?',
  });

  const postButton = document.createElement('input');
  Object.assign(postButton, {
    type: 'submit',
    value: 'Postear',
    id: 'postButton',
  });

  inputs.append(newPost, postButton);

  const setUpPost = (posts) => {
    console.log('set_pre_4each');

    posts.forEach((change) => {
      if (change.type == 'added') {
        console.log('set_post_4each');
        const articleContent = document.createElement('article');
        articleContent.setAttribute('id', change.doc.id);
        Object.assign(articleContent, {
          classList: 'articleContent',
        });

        const titleH3 = document.createElement('h3');
        titleH3.append(change.doc.data().email);

        const postContent = document.createElement('p');
        Object.assign(postContent, {
          id: 'postContent',
          textContent: change.doc.data().Description,
        });
        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('id', 'likeDiv');
        const likeB = document.createElement('img');
        Object.assign(likeB, {
          id: 'likeB',
          type: 'button',
          src: 'imagenes/paw.png',
        });

        const editSection = document.createElement('section');
        editSection.setAttribute('id', 'editSection');
        const editB = document.createElement('img');
        Object.assign(editB, {
          id: 'editB',
          type: 'button',
          src: 'imagenes/edit.png',
        });

        const eraseSection = document.createElement('section');
        eraseSection.setAttribute('id', 'eraseSection');
        const eraseB = document.createElement('img');
        Object.assign(eraseB, {
          id: 'editB',
          type: 'button',
          src: 'imagenes/eraser.png',
        });

        const uids = change.doc.data().UID;

        likeB.addEventListener('click', (event) => {
          if (likeB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('likeB');
            likeArray(event);
            // postContainer.removeChild(articleContent);
            
          // console.log(likeArray);
          } else {
          }
        // console.log(event);
        });
        const allLikes = change.doc.data().likes;

        // editB.addEventListener('click', (event) => {
        //   if (editB) {
        //     event = change.doc.id;
        //     // console.log(change.doc.id);
        //     console.log('editB');

        //     removing(event);
        //   // console.log(likeArray);
        //   } else {
        //   }
        // // console.log(event);
        // });

        likeDiv.appendChild(likeB);
        editSection.appendChild(editB);
        eraseSection.appendChild(eraseB);
        articleContent.append(titleH3, postContent, likeDiv, editSection, eraseSection);
        postContainer.insertBefore(articleContent, postContainer.firstChild);
        eraseB.addEventListener('click', (event) => {
          if (eraseB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('editB');

            removing(event);
            postContainer.removeChild(articleContent);
          // console.log(likeArray);
          } else {
          }
        // console.log(event);
        });
        /// /////////////////////////////////////////////
        editB.addEventListener('click', (event) => {
          if (editB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('editB');
            const editContent = document.createElement('textarea');
            Object.assign(editContent, {
              id: 'editContent',
              placeholder: change.doc.data().Description,
            });
            // postContent.innerHTML = 'textarea';
            // Object.assign(postContent, {
            //   id: 'postContent',
            //   placeholder: change.doc.data().Description,
            // });
            const saveEdit = document.createElement('button');
            Object.assign(saveEdit, {
              id: 'saveEdit',
              value: 'guardar',
            });
            articleContent.append(saveEdit, editContent);
            saveEdit.addEventListener('click', () => {
              // if (editContent.value != []) {
              //   savePost(editContent.value, new Date());
              // } else {
              //   alert('No escribiste nada!');
              // }
              const edited = editContent.value;
              console.log(edited);
              articleContent.append(saveEdit, editContent);
              editP(event, edited);
              postContainer.removeChild(articleContent);
              // postContainer.append(articleContent);
              // console.log(likeArray);
            });
            // console.log(event);
          }
        });
        // /////////// MODIFIED /////////////////
      } else if (change.type == 'modified') {
        console.log('set_post_4each');
        const articleContent = document.createElement('article');
        articleContent.setAttribute('id', change.doc.id);
        Object.assign(articleContent, {
          classList: 'articleContent',
        });

        const titleH3 = document.createElement('h3');
        titleH3.append(change.doc.data().email);

        const postContent = document.createElement('p');
        Object.assign(postContent, {
          id: 'postContent',
          textContent: change.doc.data().Description,
        });
        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('id', 'likeDiv');
        const likeB = document.createElement('img');
        Object.assign(likeB, {
          id: 'likeB',
          type: 'button',
          src: 'imagenes/paw.png',
        });

        const editSection = document.createElement('section');
        editSection.setAttribute('id', 'editSection');
        const editB = document.createElement('img');
        Object.assign(editB, {
          id: 'editB',
          type: 'button',
          src: 'imagenes/edit.png',
        });

        const eraseSection = document.createElement('section');
        eraseSection.setAttribute('id', 'eraseSection');
        const eraseB = document.createElement('img');
        Object.assign(eraseB, {
          id: 'editB',
          type: 'button',
          src: 'imagenes/eraser.png',
        });

        const uids = change.doc.data().UID;

        likeB.addEventListener('click', (event) => {
          if (likeB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('likeB');
            likeArray(event);
            //postContainer.removeChild(articleContent);
          // console.log(likeArray);
          } else {
          }
        // console.log(event);
        });

        // editB.addEventListener('click', (event) => {
        //   if (editB) {
        //     event = change.doc.id;
        //     // console.log(change.doc.id);
        //     console.log('editB');

        //     removing(event);
        //   // console.log(likeArray);
        //   } else {
        //   }
        // // console.log(event);
        // });

        likeDiv.appendChild(likeB);
        editSection.appendChild(editB);
        eraseSection.appendChild(eraseB);
        articleContent.append(titleH3, postContent, likeDiv, editSection, eraseSection);
        postContainer.insertBefore(articleContent, postContainer.firstChild);
        eraseB.addEventListener('click', (event) => {
          if (eraseB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('editB');

            removing(event);
            postContainer.removeChild(articleContent);
          // console.log(likeArray);
          } else {
          }
        // console.log(event);
        });
        /// /////////////////////////////////////////////
        editB.addEventListener('click', (event) => {
          if (editB) {
            event = change.doc.id;
            // console.log(change.doc.id);
            console.log('editB');
            const editContent = document.createElement('textarea');
            Object.assign(editContent, {
              id: 'editContent',
              placeholder: change.doc.data().Description,
            });
            // postContent.innerHTML = 'textarea';
            // Object.assign(postContent, {
            //   id: 'postContent',
            //   placeholder: change.doc.data().Description,
            // });
            const saveEdit = document.createElement('button');
            Object.assign(saveEdit, {
              id: 'saveEdit',
              value: 'guardar',
            });
            articleContent.append(saveEdit, editContent);
            saveEdit.addEventListener('click', () => {
              // if (editContent.value != []) {
              //   savePost(editContent.value, new Date());
              // } else {
              //   alert('No escribiste nada!');
              // }
              const edited = editContent.value;
              console.log(edited);
              articleContent.append(saveEdit, editContent);
              editP(event, edited);
              postContainer.removeChild(articleContent);
              // console.log(likeArray);
            });
            // console.log(event);
          }
        });
      }
    });
  };

  unsubscribe(setUpPost);
  wraper.append(inputs, postContainer);

  postButton.addEventListener('click', () => {
    if (newPost.value != []) {
      savePost(newPost.value, new Date());
      newPost.value = '';
    } else {
      alert('No escribiste nada!');
    }
  });

  // ///////// FOOTER ////////////////////
  const footer = document.createElement('footer');
  Object.assign(footer, {
    id: 'mainFooter',
  });
  const homeFooter = document.createElement('img');
  Object.assign(homeFooter, {
    id: 'homeFooter',
    type: 'button',
    src: 'imagenes/home2.png',
  });
  homeFooter.addEventListener('click', () => {
    onNavigate('/timeLine');
  });
  const searchFooter = document.createElement('img');
  Object.assign(searchFooter, {
    id: 'searchFooter',
    type: 'button',
    src: 'imagenes/lupa.png',
  });
  footer.append(homeFooter, searchFooter);
  document.body.appendChild(footer);
  timeLineDiv.append(header, wraper, footer);
  return timeLineDiv;
};
