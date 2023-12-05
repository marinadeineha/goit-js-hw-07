function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxesEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);
  if (amount >=1 && amount <= 100) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }

    boxesEl.append(...boxes);
    inputEl.value = '';
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}