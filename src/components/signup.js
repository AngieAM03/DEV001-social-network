import { createEmail } from '../lib/functionFirebase.js';

export const signUp = () => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUp-page');
  signUpSection.innerHTML = `
        <figure class="img-hu2">
            <img class="cat-hu2" src="images/cat-hu2.png" alt="Imagen de un gatito">
        </figure>
        <section class="info-hu2">
         <header>  
            <h1>Registrar</h1>
            <button type="button" class="registerGoogle"><img class="icon-Google" src="images/icon-Google.png" alt="Icono de Google" />Registro con Google</button>
            <hr width="100%">
         </header>
         <main>
            <form class="singUp-form">
                  <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" >
                  <input type="date" class="dateBorn" name="dateBorn" placeholder="Fecha de nacimiento/adopción">
                  <input type="email" class="email" name="email" placeholder="Correo electrónico" >
                  <input type="password" class="password" name="password" placeholder="Contraseña" >
                  <input type="password" class="passwordVerified" name="passwordVerified" placeholder="Verificar Contraseña" >
                  <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href="" class="go-pagePoliticPrivacity">Politica de privacidad</a> y la <a href="" class="go-pagePoliticCookies">Politica de cookies</a></h3>
                  <h3>¿Ya tienes una cuenta?<span class="login">Inicia Sesión</span></h3>
                  <button id="acept" type="submit">Aceptar</button>
            </form>
        </main>
      </section>`;

  const p = signUpSection.querySelector('.login');
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  a.textContent = p.textContent;
  p.parentNode.replaceChild(a, p);

  const form = signUpSection.querySelector('.singUp-form');
  form.querySelector('#acept').addEventListener('click', (e) => {
    e.preventDefault();
    const email = form.querySelector('.email').value;
    const password = form.querySelector('.password').value;
    createEmail(email, password).then(() => {
      alert('Usuario creado');
    })
      .catch((error) => {
        console.error('Error al crear usuario:', error);
        if (error.code === 'auth/email-already-in-use') {
          console.error('El correo ya está en uso');
          alert('La dirección de correo electrónico que ingresaste ya se encuentra en uso en otra cuenta de PetBook');
        } if (error.code === 'auth/weak-password') {
          console.error('Contraseña con caracteres insuficientes');
          alert('La contraseña debe tener al menos 6 caracteres.');
        }
      });
  });
  return signUpSection;
};
