document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  const list = document.querySelector("#tasks");

  form.addEventListener('submit', (event) => {

    event.preventDefault();

    if (event.target[0].value !== ''){
      addNewTask(event.target[0].value);
      event.target[0].value = null;
    }
  })

  function addNewTask(element){

    const task = document.createElement("p");
    let important = document.createElement("text");
    const priority = document.createElement("select");
    const status = document.createElement("select");
    let defaultStatus = document.createElement("text");
    const space = document.createElement("text");

    task.textContent = `${element} - `;
    const btn = document.createElement("button");
    btn.textContent = 'Remove Task';
    btn.addEventListener("click", (e) => deleteTask(e));

    important.textContent = "\tPriority:\t";

    priority.innerHTML = `
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>`;

    defaultStatus.textContent = "\tStatus:\t";

    status.innerHTML = `
    <option>Not Started</option>
    <option>In Progress</option>
    <option>Completed</option>`;

    space.textContext = "\t";

    task.appendChild(important);
    task.appendChild(space);
    task.appendChild(priority);
    task.appendChild(space);
    task.appendChild(defaultStatus);
    task.appendChild(space);
    task.appendChild(status);
    task.appendChild(space);
    task.appendChild(btn);
    task.appendChild(space);
    
    list.appendChild(task);
  }

  function deleteTask(element){
    element.target.parentNode.remove();
  }
});
