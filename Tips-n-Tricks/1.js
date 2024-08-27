const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
  console.log(event.target.value);

  if (event.target.matches('li')) {
    if (event.target.innerText === 'Javascript') {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'yellow';
    }
  }
});

const addNodeJS = () => {
  const newElement = document.createElement('li');
  newElement.innerText = 'Node JS';
  ul.appendChild(newElement);
};
