export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.classList.add('login-page');
  loginSection.innerHTML = ` 
  <section class="hu-1">
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
        </form>      
      </main>
    </section> 
  </section> 
    `;
  const Register = document.createElement('div');
  Register.classList.add('Registro');
  loginSection.appendChild(Register);
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

  const buttonWall = document.createElement('button');
  buttonWall.id = 'startSesion';
  buttonWall.textContent = 'Iniciar sesión';
  loginSection.appendChild(buttonWall);

  return loginSection
  /*return null
  return { loginSection, loginForm: loginSection.querySelector('#login-form') };*/
  
};

/*const { loginSection, loginForm } = login();
const loginFormValues = loginForm.value;
console.log(loginFormValues)¨*/
