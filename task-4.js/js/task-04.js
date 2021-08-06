const incrementButn = document.querySelector('[data-action = "increment"]')
const valueEl = document.querySelector('#value')
const decrementButn = document.querySelector('[data-action = "decrement"]')

console.log(valueEl.textContent)

decrementButn.addEventListener('click', onDecrementBtn)
incrementButn.addEventListener('click', onIncrementBtn)

function onIncrementBtn() {
    valueEl.textContent = Number(valueEl.textContent) + 1;
}
function onDecrementBtn() {
    valueEl.textContent -= 1;
}

