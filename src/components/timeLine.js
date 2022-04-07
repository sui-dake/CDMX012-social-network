import { onNavigate } from '../app.js';
import {
  currUser,
  editP,
  likeArray,
  logOutFunct, removing, savePost, totalLikes, userLikes, unsubscribe, dislike,
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
    while (postContainer.firstChild) {
      postContainer.removeChild(postContainer.firstChild);
    }
    posts.forEach((doc) => {
      // const allLikes = doc.doc.data().likes;
      const likesUno = totalLikes(doc);
      console.log({ likesUno });
      const idPost = (doc.id);
      console.log(idPost);
      if (doc/* .type == 'added' */) {
        console.log('set_post_4each');
        const articleContent = document.createElement('article');
        articleContent.setAttribute('id', doc.id);
        Object.assign(articleContent, {
          classList: 'articleContent',
        });

        const titleH3 = document.createElement('h3');
        titleH3.append(doc.email);

        const postContent = document.createElement('p');
        Object.assign(postContent, {
          id: 'postContent',
          textContent: doc.Description,
        });
        const likeContainer = document.createElement('div');
        likeContainer.setAttribute('id', 'likeContainer');
        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('id', 'likeDiv');
        const likeB = document.createElement('img');
        Object.assign(likeB, {
          id: 'likeB',
          type: 'button',
          classList: 'patas',
          src: 'imagenes/pataContorno.png',
        });
        const dislikeB = document.createElement('img');
        Object.assign(dislikeB, {
          id: 'dislikeB',
          type: 'button',
          classList: 'patas',
          src: 'imagenes/paw colrd.png',
        });
        const likeCount = document.createElement('p');
        Object.assign(likeCount, {
          id: 'likeCount',
          textContent: likesUno,
        });

        const editSection = document.createElement('section');
        editSection.setAttribute('id', 'editSection');
        const editB = document.createElement('img');
        Object.assign(editB, {
          id: 'editB',
          type: 'button',
          classList: 'patas',
          src: 'imagenes/edit3.png',
        });

        const eraseSection = document.createElement('section');
        eraseSection.setAttribute('id', 'eraseSection');
        const eraseB = document.createElement('img');
        Object.assign(eraseB, {
          id: 'editB',
          type: 'button',
          classList: 'patas',
          src: 'imagenes/eraser.png',
        });

        // const uids = doc.UID;
        // ///////// LIKE & DISLIKE FUNC /////
        likeB.addEventListener('click', () => {
          if (likeB) {
            console.log('likeB');
            likeArray(doc.id);
            // postContainer.removeChild(articleContent);
          } else {
          }
        // console.log(event);
        });
        dislikeB.addEventListener('click', () => {
          console.log('dislikeB');
          dislike(doc.id);
          postContainer.removeChild(articleContent);
        // console.log(event);
        });
        likeDiv.append(likeB, likeCount);
        // ///////// USER AND ALREADY LIKED POSTS /////
        const valid = userLikes(doc);
        // console.log(valid);
        const coincidence = valid.find((e) => e === currUser());
        // console.log(coincidence);

        if (currUser() === coincidence) {
          console.log('si esta P:');
          likeDiv.removeChild(likeB);
          likeDiv.appendChild(dislikeB);
        } else if (currUser() !== coincidence) {
          likeDiv.appendChild(likeB);
          console.log('no esta');
        }

        editSection.appendChild(editB);
        eraseSection.appendChild(eraseB);
        likeContainer.append(likeDiv, editSection, eraseSection);
        articleContent.append(titleH3, postContent, likeContainer);
        postContainer.insertBefore(articleContent, postContainer.firstChild);
        eraseB.addEventListener('click', () => {
        // abra un modal o ponga una linea con la advertencia
          // si acepta entonces entra al if, si no, se cierra modal
          const warnSection = document.createElement('section');
          warnSection.setAttribute('id', 'warnSection');
          const warning = document.createElement('p');
          Object.assign(warning, {
            id: 'warning',
            textContent: '¿Segurx que deseas eliminar esta publicación?',
          });
          const yesNo = document.createElement('section');
          yesNo.setAttribute('id', 'yesNoSection');
          const yesB = document.createElement('button');
          Object.assign(yesB, {
            id: 'yesB',
            textContent: 'Eliminar',
          });
          const noB = document.createElement('button');
          Object.assign(noB, {
            id: 'noB',
            textContent: 'Cancelar',
          });
          yesNo.append(yesB, noB);
          warnSection.append(warning, yesNo);
          articleContent.append(warnSection);
          yesB.addEventListener('click', () => {
            console.log('entr[o a borrar');
            removing(doc.id);
            //postContainer.removeChild(articleContent);
          });

          noB.addEventListener('click', () => {
            console.log('entro a cancel');
            articleContent.removeChild(warnSection);
          });
          eraseB.addEventListener('click', () => {
            articleContent.removeChild(warnSection);
          });
        });
        /// /////////////////////////////////////////////
        editB.addEventListener('click', () => {
          if (editB) {
            console.log('editB');
            articleContent.removeChild(postContent);
            const editConteiner = document.createElement('div');
            editConteiner.setAttribute('id', 'editConteiner');
            const editContent = document.createElement('input');
            Object.assign(editContent, {
              id: 'editContent',
              type: 'text',
              placeholder: doc.Description,
            });
            const saveEdit = document.createElement('button');
            Object.assign(saveEdit, {
              id: 'saveEdit',
              value: 'guardar',
              textContent: 'Guardar',
            });
            editConteiner.append(editContent, saveEdit);
            articleContent.appendChild(editConteiner);

            saveEdit.addEventListener('click', () => {
              const edited = editContent.value;
              console.log(edited);
              articleContent.append(editConteiner);
              editP(doc.id, edited);
              //postContainer.removeChild(articleContent);
            });
          }
        });
        // /////////// MODIFIED /////////////////
        // } else if (change.type === 'modified') {
        //   console.log('set_post_4each');
        //   const articleContent = document.createElement('article');
        //   articleContent.setAttribute('id', change.doc.id);
        //   Object.assign(articleContent, {
        //     classList: 'articleContent',
        //   });

        //   const titleH3 = document.createElement('h3');
        //   titleH3.append(change.doc.data().email);

        //   const postContent = document.createElement('p');
        //   Object.assign(postContent, {
        //     id: 'postContent',
        //     textContent: change.doc.data().Description,
        //   });
        //   const likeContainer = document.createElement('div');
        //   likeContainer.setAttribute('id', 'likeContainer');
        //   const likeDiv = document.createElement('div');
        //   likeDiv.setAttribute('id', 'likeDiv');
        //   const likeB = document.createElement('img');
        //   Object.assign(likeB, {
        //     id: 'likeB',
        //     type: 'button',
        //     classList: 'patas',
        //     src: 'imagenes/pataContorno.png',
        //   });
        //   const dislikeB = document.createElement('img');
        //   Object.assign(dislikeB, {
        //     id: 'dislikeB',
        //     type: 'button',
        //     classList: 'patas',
        //     src: 'imagenes/paw colrd.png',
        //   });
        //   const likeCount = document.createElement('p');
        //   Object.assign(likeCount, {
        //     id: 'likeCount',
        //     textContent: likesUno,
        //   });

        //   const editSection = document.createElement('section');
        //   editSection.setAttribute('id', 'editSection');
        //   const editB = document.createElement('img');
        //   Object.assign(editB, {
        //     id: 'editB',
        //     type: 'button',
        //     classList: 'patas',
        //     src: 'imagenes/edit3.png',
        //   });

        //   const eraseSection = document.createElement('section');
        //   eraseSection.setAttribute('id', 'eraseSection');
        //   const eraseB = document.createElement('img');
        //   Object.assign(eraseB, {
        //     id: 'editB',
        //     type: 'button',
        //     classList: 'patas',
        //     src: 'imagenes/eraser.png',
        //   });

        //   const uids = change.doc.data().UID;
        //   // /////////////// LIKE & DISLIKE FUNC /////////

        //   likeB.addEventListener('click', () => {
        //     console.log('likeB');
        //     likeArray(change.doc.id);
        //     postContainer.removeChild(articleContent);
        //   });

        //   dislikeB.addEventListener('click', () => {
        //     console.log('dislikeB');
        //     dislike(change.doc.id);
        //     postContainer.removeChild(articleContent);
        //   // console.log(event);
        //   });
        //   likeDiv.append(likeB, likeCount);
        //   /// /////////// COINCIDENCE BETWEEN USER AND ALREADY LIKED POSTS /////////////
        //   const valid = userLikes(idPost);
        //   const coincidence = valid.find((e) => e === currUser());
        //   console.log(coincidence);

        //   if (currUser() === coincidence) {
        //     console.log('si esta P:');
        //     likeDiv.removeChild(likeB);
        //     likeDiv.appendChild(dislikeB);
        //   } else if (currUser() !== coincidence) {
        //     likeDiv.appendChild(likeB);
        //     console.log('no esta');
        //   }
        //   /// /////////////

        //   editSection.appendChild(editB);
        //   eraseSection.appendChild(eraseB);
        //   likeContainer.append(likeDiv, editSection, eraseSection);
        //   articleContent.append(titleH3, postContent, likeContainer);
        //   postContainer.insertBefore(articleContent, postContainer.firstChild);
        //   eraseB.addEventListener('click', () => {
        //     // abra un modal o ponga una linea con la advertencia
        //     // si acepta entonces entra al if, si no, se cierra modal
        //     const warnSection = document.createElement('section');
        //     warnSection.setAttribute('id', 'warnSection');
        //     const warning = document.createElement('p');
        //     Object.assign(warning, {
        //       id: 'warning',
        //       textContent: '¿Segurx que deseas eliminar esta publicación?',
        //     });
        //     const yesNo = document.createElement('section');
        //     yesNo.setAttribute('id', 'yesNoSection');
        //     const yesB = document.createElement('button');
        //     Object.assign(yesB, {
        //       id: 'yesB',
        //       textContent: 'Eliminar',
        //     });
        //     const noB = document.createElement('button');
        //     Object.assign(noB, {
        //       id: 'noB',
        //       textContent: 'Cancelar',
        //     });
        //     yesNo.append(yesB, noB);
        //     warnSection.append(warning, yesNo);
        //     articleContent.append(warnSection);
        //     yesB.addEventListener('click', () => {
        //       console.log('entr[o a borrar');
        //       removing(change.doc.id);
        //       postContainer.removeChild(articleContent);
        //     });

        //     noB.addEventListener('click', () => {
        //       console.log('entro a cancel');
        //       articleContent.removeChild(warnSection);
        //     });
        //   });

        //   /// /////////////////////////////////////////////
        //   editB.addEventListener('click', () => {
        //     if (editB) {
        //       postContainer.removeChild(articleContent);
        //       const editConteiner = document.createElement('div');
        //       editConteiner.setAttribute('id', 'editConteiner');
        //       const editContent = document.createElement('input');
        //       Object.assign(editContent, {
        //         id: 'editContent',
        //         type: 'text',
        //         placeholder: change.doc.data().Description,
        //       });

      //       const saveEdit = document.createElement('button');
      //       Object.assign(saveEdit, {
      //         id: 'saveEdit',
      //         value: 'guardar',
      //         textContent: 'Guardar',
      //       });
      //       editConteiner.append(editContent, saveEdit);
      //       articleContent.appendChild(editConteiner);
      //       saveEdit.addEventListener('click', () => {
      //         const edited = editContent.value;
      //         console.log(edited);
      //         articleContent.append(editConteiner);
      //         editP(change.doc.id, edited);
      //         postContainer.removeChild(articleContent);
      //       });
      //     }
      //   });
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
