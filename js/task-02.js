const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector(`ul`);

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement(`li`);
  ingredientItemEl.textContent = (ingredient);
  return ingredientItemEl
})
console.log(ingredientsList);


ingredientsContainerEl.append(...ingredientsList);

console.log(ingredientsContainerEl);