function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

if (btn && colorSpan) {
  btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorSpan.textContent = color;
  });
}
