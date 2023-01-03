import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../lib/firebase.js";

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
          <div class="registrate"></div>
        </form>      
      </main>
    </section>`;

  const Register = document.createElement('div');
  Register.classList.add('Registro');
  const parrafo = document.createElement('p');
  parrafo.classList.add('border');
  parrafo.textContent = '¿No tienes una cuenta?';
  const aRegister = document.createElement('a');
  aRegister.setAttribute('href', '#signUp');
  aRegister.classList.add('go-pageRegister');
  aRegister.textContent = 'Registrate';
  loginSection.appendChild(Register);
  Register.appendChild(parrafo);
  parrafo.appendChild(aRegister);

  const buttonWall = document.createElement("button");
  buttonWall.id = "startSesion";
  buttonWall.textContent = "Iniciar sesión";
  loginSection.appendChild(buttonWall);
  loginSection.querySelector("#startSesion").addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginSection.querySelector(".email").value;
    const password = loginSection.querySelector(".password").value;
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(function (user) {
        console.log("Logueo exitoso:", user);
        window.location.hash = '#wall';
      })
      .catch(function (error) {
        console.error("Logueo incorrecto:", error);
        if (error.code === "auth/wrong-password") {
          console.error("Contraseña incorrecta");
        } else if (error.code === "auth/user-not-found") {
          console.error("Usuario invalido");
        }
      });
  });
  return loginSection;
};
