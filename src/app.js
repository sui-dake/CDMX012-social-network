import { Home } from './components/Home.js';
// import { about } from './components/about.js';
// eslint-disable-next-line import/no-cycle
import { SignIn } from './components/SignIn.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/SignIn': SignIn,
  // '/about': about,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.innerHTML(routes[window.location.pathname]);
};

// const component = routes[window.location.pathname];

// rootDiv.appendChild(component());
