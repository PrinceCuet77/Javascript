const newTask = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#addTask');
const form = document.querySelector('.new-task-container');
const pendingTask = document.querySelector('#items');
const completedTask = document.querySelector('#complete-list');
const editBtn = document.querySelector('li .edit img');
console.log(editBtn);

const preparePendingTask = (newTask) => {
  // Create the list item element
  const li = document.createElement('li');
  li.className = 'item';

  // Create the checkbox input element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create the label element
  const label = document.createElement('label');
  label.textContent = newTask.value;

  // Create the button element
  const button = document.createElement('button');
  button.className = 'edit';

  // Create the img element
  const img = document.createElement('img');
  img.src = 'icons/edit.png';
  img.alt = 'edit';

  // Append the img to the button
  button.appendChild(img);

  // Append the checkbox and label to the list item
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  // Now find the parent element and append the newly created li
  const ul = document.querySelector('ul'); // Change this selector to target your specific ul
  ul.appendChild(li);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form Submitted.', newTask.value);
  const newTaskItem = preparePendingTask(newTask);
  newTask.value = '';
});


