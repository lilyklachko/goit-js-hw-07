
const countCategories = document.querySelector('#categories')
console.log(`В списке ${countCategories.childElementCount} категории.`)


const allElem = document.querySelectorAll('.item')

allElem.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${elem.lastElementChild.childElementCount}`)

})
   
// const firstCategory = document.querySelector('.item')
// console.log(`Категория: ${firstCategory.firstElementChild.textContent}`)
// console.log(`Количество элементов: ${firstCategory.lastElementChild.childElementCount}`)

    
// const secondCategory = document.querySelector('#categories')
// console.log(`Категория: ${secondCategory.forEach}.textContent`)
// console.log(`Количество элементов: ${secondCategory.lastElementChild.childElementCount}`)

// const thirdCategory = document.querySelector('#categories')
// console.log(`Категория: ${thirdCategory.lastElementChild.firstElementChild.textContent}`)
// console.log(`Количество элементов: ${thirdCategory.lastElementChild.childElementCount}`)


