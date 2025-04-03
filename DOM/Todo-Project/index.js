const newTask = document.querySelector('#new-task');

const form = document.querySelector('.new-task-container');
const addTaskBtn = document.querySelector('#addTask');
const editTaskBtn = document.querySelector('#editTask');

const pendingTask = document.querySelector('#items');
const completedTask = document.querySelector('#complete-list');

const editBtn = document.querySelector('li .edit img');

let isEditMode = false;
let currentTask = null;

const preparePendingTask = (taskValue) => {
  const li = document.createElement('li');
  li.className = 'item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => moveToCompleted(li));

  const label = document.createElement('label');
  label.textContent = taskValue;

  const editButton = document.createElement('button');
  editButton.className = 'edit';
  const editImg = document.createElement('img');
  editImg.src = 'icons/edit.png';
  editImg.alt = 'edit';
  editButton.appendChild(editImg);
  editButton.addEventListener('click', () => editTask(li));

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(editButton);

  pendingTask.appendChild(li);
};

const moveToCompleted = (taskItem) => {
  taskItem.querySelector('input[type="checkbox"]').remove();
  taskItem.querySelector('.edit').remove();

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  const deleteImg = document.createElement('img');
  deleteImg.src = 'icons/delete.png';
  deleteImg.alt = 'delete';
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener('click', () => taskItem.remove());

  taskItem.appendChild(deleteButton);
  completedTask.appendChild(taskItem);
};

document.querySelectorAll('.complete-list .delete').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.closest('li').remove();
  });
});

// Alternate way to find the task item
// document.querySelectorAll('.complete-list .delete').forEach((button) => {
//   button.addEventListener('click', (event) => {
//     let taskItem = button.parentNode; // Start with the button's parent
//     while (taskItem && taskItem.tagName !== 'LI') {
//       taskItem = taskItem.parentNode; // Traverse up until the <li> element is found
//     }
//     if (taskItem) {
//       taskItem.remove();
//     }
//   });
// });

document
  .querySelectorAll('.todo-list .item input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const taskItem = event.target.closest('li');
      moveToCompleted(taskItem);
    });
  });

document.querySelectorAll('.todo-list .item .edit').forEach((button) => {
  button.addEventListener('click', (event) => {
    const taskItem = event.target.closest('li');
    editTask(taskItem);
  });
});

// Alternate way to find the task item
// document.querySelectorAll('.todo-list .item .edit').forEach((button) => {
//   button.addEventListener('click', (event) => {
//     let taskItem = button.parentNode; // Start with the button's parent
//     while (taskItem && taskItem.tagName !== 'LI') {
//       taskItem = taskItem.parentNode; // Traverse up until the <li> element is found
//     }
//     if (taskItem) {
//       editTask(taskItem);
//     }
//   });
// });

const editTask = (taskItem) => {
  isEditMode = true;
  currentTask = taskItem;
  newTask.value = taskItem
    .querySelector('label')
    .textContent.replace(' (edited)', '');
  addTaskBtn.value = 'Edit Task';
};

const updateTask = () => {
  if (currentTask) {
    currentTask.querySelector('label').textContent =
      newTask.value + ' (edited)';
    resetForm();
  }
};

const resetForm = () => {
  newTask.value = '';
  addTaskBtn.value = 'Add Task';
  isEditMode = false;
  currentTask = null;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (newTask.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }
  if (isEditMode) {
    updateTask();
  } else {
    preparePendingTask(newTask.value);
  }
  resetForm();
});

editTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  updateTask();
});
