const decrementButtonEl = document.querySelector(`[data-action="decrement"]`);
const incrementButtonEl = document.querySelector(`[data-action="increment"]`);
const numberEl = document.querySelector(`span`);

decrementButtonEl.addEventListener("click", decrementNumberOnClick);
incrementButtonEl.addEventListener("click", incrementNumberOnClick);
let value = 0;
function decrementNumberOnClick() {
  numberEl.textContent = value -= 1;
}
function incrementNumberOnClick() {
  numberEl.textContent = value += 1;
}
