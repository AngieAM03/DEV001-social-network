import { login } from './login.js';
import { signUp } from './signup.js';
import { wall } from './wall.js';

export const Router = () => {
  const divRoot = document.getElementById('root');
  const hash = window.location.hash;
  divRoot.innerHTML = null;
  if (!hash || hash === '#') {
    divRoot.appendChild(login());
  } else if (hash === '#signUp') {
    divRoot.appendChild(signUp());
  } else if (hash === '#wall') {
    divRoot.appendChild(wall());
  }
};
