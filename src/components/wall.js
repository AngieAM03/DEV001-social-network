import { saveTask, listenerTask, deletePublication } from '../lib/functionFirebase';

export const wall = () => {
  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = ` 
  <section class="part1">
    <h1 class="title">PetsPerfect</h1>
    <button class="btn-home"><img class="home" src="images/hogar.png" alt="Logo Inicio"/>Inicio</button>
    <button class="btn-adopt"><img class="huella" src="images/patas.png" alt="Logo Adopción"/>Adopción</button>
  </section>
  <section class="part2">
  <form id="publication">
    <p class="nickName"></p>
    <textarea id="task-publication" rows="3" class="task-publication"  placeholder="En que estas pensando"></textarea>
    <button class="btn-publication" id="btn-publication">Publicar</button>
  </form>
  <p class="wallPublication"></p>
  </section>
  <section class="part3">
    <h1 class="mi-perfil">Mi Perfil</h1>
    <img class="tuerca-configuracion" src="images/configuraciones.png" alt="Logo Configuración"/>
    <h1 class="configuracion">Configuracion</h1>
  </section>`;

  const publication = wallSection.querySelector('#publication');
  publication.addEventListener('submit', (e) => {
    e.preventDefault();
    const textPublication = wallSection.querySelector('.task-publication').value;
    if (textPublication === '' || textPublication === ' ') {
      // eslint-disable-next-line no-alert
      alert('Se necesita texto aquí');
    } else {
      saveTask(textPublication);
      publication.reset();
    }
  });

  const publicationSection = wallSection.querySelector('.wallPublication');
  listenerTask((querySnapshot) => {
    publicationSection.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const taskRpta = doc.data();
      publicationSection.innerHTML += `<div>
      <span class="user">${taskRpta.nickName}</span>
      <textarea>${taskRpta.textPublication}</textarea>
      <button class ="delete" data-id="${doc.id}">Eliminar</button>
      </div>`;
    });
    const eliminar = publicationSection.querySelectorAll('.delete');
    eliminar.forEach((btn) => {
      btn.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmar = confirm('¿Estas seguro de eliminar el comentario?');
        if (confirmar === true) {
          deletePublication(btn.dataset.id)
            .then().catch();
        }
      });
    });
  });
  return wallSection;
};
