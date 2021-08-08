const rangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

console.dir(rangeEl)

function getValue() {
    
    console.log(rangeEl.value)
    const valueInputed = rangeEl.value
    textEl.style.fontSize = `${rangeEl.value}px`
}
rangeEl.addEventListener('input', getValue)