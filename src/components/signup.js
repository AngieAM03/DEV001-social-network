import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../lib/firebase.js"

export const signUp = () => {
  const signUpSection = document.createElement("section");
  signUpSection.classList.add("signUp-page");
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
            <form class="page-2">
                  <input type="text" class="nickname" name="nickname" placeholder="Nickname y Apellido" >
                  <input type="date" class="dateBorn" name="dateBorn" placeholder="Fecha de nacimiento/adopción">
                  <input type="email" class="email" name="email" placeholder="Correo electrónico" >
                  <input type="password" class="password" name="password" placeholder="Contraseña" >
                  <input type="password" class="passwordVerified" name="passwordVerified" placeholder="Verificar Contraseña" >
                  <h3>Al registrarte, aceptas nuestras <a href="" class="go-pageCondition">condiciones</a>, la <a href="" class="go-pagePoliticPrivacity">Politica de privacidad</a> y la <a href="" class="go-pagePoliticCookies">Politica de cookies</a></h3>
                  <button id="acept" type="submit">Aceptar</button>
            </form>
        </main>
      </section>`;

  const loginSession = document.createElement('div');
  loginSession.classList.add('login-Session');
  const parrafoSession = document.createElement('p');
  parrafoSession.classList.add('parrafoSession');
  parrafoSession.textContent = '¿Ya tienes una cuenta?';
  const aLoginSession = document.createElement('a');
  aLoginSession.setAttribute('href', '#');
  aLoginSession.classList.add('go-pageLoginr');
  aLoginSession.textContent = 'Inicia Sesión';
  signUpSection.appendChild(loginSession);
  loginSession.appendChild(parrafoSession);
  parrafoSession.appendChild(aLoginSession);


  const form = signUpSection.querySelector(".page-2");
  form.querySelector("#acept").addEventListener("click", (e) => {
    e.preventDefault();
    const email = form.querySelector(".email").value;
    const password = form.querySelector(".password").value;
    const nickname = form.querySelector(".nickname").value;
    const passwordVerified = form.querySelector(".passwordVerified").value;
    console.log(nickname, email, password, passwordVerified);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password, passwordVerified)
      .then(function (user) {
        console.log("Usuario creado con éxito:", user);
        alert ('Usuario creado')
      })
      .catch(function (error) {
        console.error("Error al crear usuario:", error);
        if (error.code === 'auth/email-already-in-use') {
          console.error('El correo ya está en uso');
          alert ('La dirección de correo electrónico que ingresaste ya se encuentra en uso en otra cuenta de PetBook')
        } if (error.code === 'auth/weak-password') {
          console.error(error.message);
          alert ('La contraseña debe tener al menos 6 caracteres.')
        } if (!(password.value===passwordVerified.value)){
          console.error(error.message);
          console.error('Las contraseñas no coinciden');
          alert ('La contraseña no coincide')
        }
      });
  });
  return signUpSection;
};