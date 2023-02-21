const inputEl = document.querySelector('input');
// const numberOfLength = document.querySelector('[data-length="6"]');
const numberOfLength = inputEl.getAttribute('data-length')
console.log(Number(numberOfLength));

inputEl.addEventListener("blur", symbolLengthCheck);
function symbolLengthCheck() {

    if (inputEl.value.length === Number(numberOfLength)) {
         inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
        
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}
