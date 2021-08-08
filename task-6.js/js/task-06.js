const inputEl = document.querySelector('#validation-input')
console.dir(inputEl)



function onInputValidation(event) {
    const validNumber = Number(inputEl.dataset.length);
    const enderedNum = event.currentTarget.value.length
 
    if (validNumber === enderedNum) {
         console.log('all good')
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    }
        
    else {
        event.currentTarget.classList.add("invalid")
        event.currentTarget.classList.remove("valid")

}

}

inputEl.addEventListener('blur', onInputValidation)
