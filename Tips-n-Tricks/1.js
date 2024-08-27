const main = document.querySelector('main');
const div = document.querySelector('div');
const button = document.querySelector('button');

const listener = (event) => {
  console.log(event.currentTarget);
};

main.addEventListener('click', listener, { capture: true });
div.addEventListener('click', listener, { capture: true });
button.addEventListener('click', listener, { capture: true });
