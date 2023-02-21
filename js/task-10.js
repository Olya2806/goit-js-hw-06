const containerOfBoxes = document.querySelector('[id="boxes"]');
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');


createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
function createBoxes() {
  const amount = input.value;
  let width = 30;
  let height = 30;
 
for (let i = 0; i < amount; i++) {
 
  const newBox = document.createElement("div");
  newBox.classList.add("box");
 newBox.style.width = width + "px";
    newBox.style.height = height + "px";
  newBox.style.backgroundColor = getRandomHexColor();
  containerOfBoxes.appendChild(newBox);

  width += 10;
    height += 10;
}
}

function destroyBoxes() {
  containerOfBoxes.innerHTML = ''
}

