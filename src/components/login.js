/* eslint-disable no-unused-vars */
import { singInEmail } from '../lib/functionFirebase.js';

export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
    <figure class="img-hu1">
      <img class="puppy-hu1" src="images/puppy-hu1.png" alt="Imagen de cachorritos">
    </figure>
    <section class="info-hu1">
      <header>
        <img class="logo-hu1" src="images/logo-huella.png" alt="Logo de la aplicacion"/>
        <h1>PetsPerfect</h1>
        <h2>¡Ingresa y deja tus huellitas!</h2>
      </header>
      <main>
        <form class="login-form" id="login-form">
          <input type="email" class="email" name="email" placeholder="Correo electrónico" required >
          <input type="password" class="password" name="password" placeholder="Contraseña" required >
          <button type= "button" class="startGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Iniciar Sesión con Google</button>
          <h3 class="go-register">¿No tienes una cuenta?<span class="register">Registrate</span></h3>
          <button type="button" class="startSesion" id="startSesion">Iniciar sesión</button>
          <div class="registrate"></div>
        </form>      
      </main>
    </section>`;

  const p = loginSection.querySelector('.register');
  const a = document.createElement('a');
  a.setAttribute('href', '#signUp');
  a.textContent = p.textContent;
  p.parentNode.replaceChild(a, p);

  loginSection.querySelector('#startSesion').addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginSection.querySelector('.email').value;
    const password = loginSection.querySelector('.password').value;
    singInEmail(email, password).then((user) => {
      window.location.hash = '#wall';
    })
      .catch((error) => {
        console.error('Logueo incorrecto:', error);
        if (error.code === 'auth/wrong-password') {
          console.error('Contraseña incorrecta');
          alert('Contraseña incorrecta');
        } else if (error.code === 'auth/user-not-found') {
          console.error('Usuario invalido');
          alert('Usuario invalido');
        }
      });
  });
  return loginSection;
};
