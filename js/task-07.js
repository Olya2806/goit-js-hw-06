const inputEl = document.querySelector('input');
const contentEl = document.querySelector('span')

inputEl.addEventListener('input', fontSizeControler);

function fontSizeControler() {
    const inputValue = inputEl.value;
    console.log(inputValue);

    let contentFontSize = contentEl.style.fontSize = inputValue + "px";
    console.log(contentFontSize);

    };




    

