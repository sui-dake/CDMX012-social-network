import { Home } from './components/Home.js';
// import { about } from './components/about.js';
// eslint-disable-next-line import/no-cycle
import { SignIn } from './components/SignIn.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/signIn': SignIn,
  // '/about': about,
};

export const onNavigate = (pathname) => {
  console.log(pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  // if con pathname para saber si existe dentro de routes
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  if (routes[window.location.pathname]()) {
    console.log(rootDiv);
  }
  // rootDiv.appendChild(routes[window.location.pathname]());
};
// console.log(window.location.pathname);

rootDiv.appendChild(component());
