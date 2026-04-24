function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.querySelector('#controls');
let input;
let createBtn;
let destroyBtn;
let boxes;
if (controls) {
  input = controls.querySelector('input');
  createBtn = controls.querySelector('[data-create]');
  destroyBtn = controls.querySelector('[data-destroy]');
  boxes = document.querySelector('#boxes');
}

function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = '8px';
    elements.push(div);
    size += 10;
  }
  boxes.innerHTML = '';
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);

if (createBtn && input && boxes) {
  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });
}

if (destroyBtn && boxes) {
  destroyBtn.addEventListener('click', destroyBoxes);
}
