const inputField = document.getElementById('input');
const addTaskBtn = document.getElementById('btn');
const pendingTask = document.getElementById('pending-task');
const completedTask = document.getElementById('completed-task');

let isEditing = false;
let taskToEdit = null;

// Add or Edit Task
const addOrEditTaskFn = () => {
  let taskText = inputField.value.trim();

  if (taskText === '') {
    alert('😮 Task cannot be empty');
    return;
  }

  if (taskText.length > 10) {
    alert('😮 Task cannot be more than 10');
    return;
  }

  if (isEditing) {
    // Update the existing task
    const p = taskToEdit.querySelector('p');
    p.textContent = taskText;
    p.className = 'bold';

    // Reset the button and input field
    addTaskBtn.textContent = 'Add Task';

    // Clear the input field
    inputField.value = '';
    isEditing = false;
    taskToEdit = null;
  } else {
    // Add a task in the pending list
    // <li>
    //   <input type="checkbox" />
    //   <p>Task 1</p>
    //   <button class="edit">✏️</button>
    // </li>

    // element create
    const li = document.createElement('li');
    const input = document.createElement('input');
    const p = document.createElement('p');
    const button = document.createElement('button');

    // add attribute in the respective element
    input.type = 'checkbox';
    // input.setAttribute("type","checkbox")
    p.innerHTML = taskText;
    button.className = 'edit';
    button.innerHTML = '✏️';

    li.appendChild(input); // <li><input /></li>
    li.appendChild(p); //
    li.appendChild(button); //

    // console.log(li);
    // console.dir(li);

    // Alternatives
    // Add a task in the pending list
    // const li = document.createElement('li');
    // li.innerHTML = `
    //   <input type="checkbox" />
    //   <p>${taskText}</p>
    //   <button class="edit">✏️</button>
    // `;
    pendingTask.appendChild(li);

    // Clear the input field
    inputField.value = '';
  }

  // Save tasks to localStorage
  saveTasksToLocalStorage();
};

// Move task to Completed Tasks
const moveToCompleted = (taskItem) => {
  const p = taskItem.querySelector('p');

  const li = document.createElement('li');
  const button = document.createElement('button');
  button.id = 'btn-del';
  button.textContent = '🗑️';

  li.appendChild(p);
  li.appendChild(button);
  completedTask.appendChild(li);

  taskItem.remove();

  // Save tasks to localStorage
  saveTasksToLocalStorage();
};

addTaskBtn.addEventListener('click', addOrEditTaskFn);

// Event Delegation for Pending Tasks
pendingTask.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const li = event.target.parentNode;
    moveToCompleted(li);
  }
});

// Event Delegation for Completed Tasks
completedTask.addEventListener('click', (event) => {
  if (event.target.id === 'btn-del') {
    const li = event.target.parentNode;
    li.remove(); // Directly remove the task
  }

  // Save tasks to localStorage
  saveTasksToLocalStorage();
});

// Event Delegation for Edit Button Click
pendingTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const button = event.target;
    const parent = button.parentNode;
    const p = parent.querySelector('p');

    if (p && parent) {
      inputField.value = p.textContent;

      // Change the button text to "Edit Task"
      addTaskBtn.textContent = 'Edit Task';

      // Set editing state
      isEditing = true;
      taskToEdit = parent;
    }
  }
});

// Load tasks from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  loadTasksFromLocalStorage();
});

// Save tasks to localStorage
const saveTasksToLocalStorage = () => {
  const pendingTasks = [];
  const completedTasks = [];

  // Get all pending tasks
  pendingTask.querySelectorAll('li').forEach((li) => {
    const p = li.querySelector('p');
    pendingTasks.push({
      id: Date.now(),
      value: p.textContent,
      isEdited: p.className === 'bold',
    });
  });

  // Get all completed tasks
  completedTask.querySelectorAll('li').forEach((li) => {
    const p = li.querySelector('p');
    completedTasks.push({
      id: Date.now(),
      value: p.textContent,
      isEdited: p.className === 'bold',
    });
  });

  // Save to localStorage
  localStorage.setItem('pendingTasks', JSON.stringify(pendingTasks));
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
};

// Load tasks from localStorage
const loadTasksFromLocalStorage = () => {
  const pendingTasks = JSON.parse(localStorage.getItem('pendingTasks')) || [];
  const completedTasks =
    JSON.parse(localStorage.getItem('completedTasks')) || [];

  // Load pending tasks
  pendingTasks.forEach((item) => {
    const li = document.createElement('li');
    console.log('loading.');
    li.innerHTML = `
      <input type="checkbox" />
      <p class=${item.isEdited ? 'bold' : ''}>${item.value}</p>
      <button class="edit">✏️</button>
    `;
    pendingTask.appendChild(li);
  });

  // Load completed tasks
  completedTasks.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p class=${item.isEdited ? 'bold' : ''}>${item.value}</p>
      <button id="btn-del">🗑️</button>
    `;
    completedTask.appendChild(li);
  });
};
