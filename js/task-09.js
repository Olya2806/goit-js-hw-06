const changeColorButton = document.querySelector('button');
const nameOfColor = document.querySelector('span');
const body = document.querySelector('body');

changeColorButton.addEventListener('click', getRandomHexColor);

// 1 варіант

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  nameOfColor.textContent = color;
  body.style.backgroundColor = color;
  console.log(color);
}

// 2 варіант
// changeColorButton.addEventListener('click', changeColorOnClick);
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// function changeColorOnClick() {
//   const color = getRandomHexColor();
//   nameOfColor.textContent = color;
//   body.style.backgroundColor = color;
//   console.log(color);
// }