
const itemsListEl = document.querySelectorAll(`.item`)
console.log('Number of categories:', itemsListEl.length);
itemsListEl.forEach(el => {
    const tittleTextEl = el.querySelector(`.item h2`)
    console.log('Category:', tittleTextEl.textContent);
    const numberOfEl = el.querySelectorAll(`li`)
console.log(`Elements:`, numberOfEl.length);
})


