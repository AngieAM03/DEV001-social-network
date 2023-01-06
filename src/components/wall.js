import { saveTask, listenerTask } from "../lib/functionFirebase";

export const wall = () => {
  const wallSection = document.createElement('section');
  wallSection.classList.add('wall-page');
  wallSection.innerHTML = ` 
  <form id="publication">
    <textarea id="task-publication" rows="3" class="task-publication"  placeholder="En que estas pensando"></textarea>
    <button class="btn-publication" id="btn-publication">Publicar</button>
  </form>
  <textarea class="wall-publication"></textarea>`;

  const publication = wallSection.querySelector('#publication')
  publication.addEventListener ('submit', (e) => {
    e.preventDefault()
    const textPublication = publication['task-publication'].value
    saveTask(textPublication)
    console.log (textPublication)
    publication.reset()
   })

   listenerTask((querySnapshot) => {
    const publicationSection = wallSection.querySelector('.wall-publication')
    console.log (querySnapshot)
    let html = "";
    querySnapshot.forEach((doc) => {
      const taskRpta = doc.data();
      console.log(doc.data());
      html += 
      `<div>
      <p>${taskRpta.textPublication}</p>
      </div>`;
      publicationSection.innerHTML=html
    });
  })
  
    return wallSection;
}
