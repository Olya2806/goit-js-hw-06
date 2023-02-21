const inputEl = document.querySelector(`input`);
const titleEl = document.querySelector(`h1`);
const nameLabelEl = document.querySelector(`h1 > span`);

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    inputEl.value.trim() !== '' ? nameLabelEl.textContent = event.currentTarget.value : nameLabelEl.textContent = 'Anonymous';
    
}
