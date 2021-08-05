const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const eachEl = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingredient
    console.log(liEl)
    return liEl
})

    
const ingredEl = document.querySelector('#ingredients')

ingredEl.append(...eachEl)