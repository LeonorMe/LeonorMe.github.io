const { error } = require("console");

const form = document.getElementById('login-form');
const name_input = document.getElementById('login-name');
const password_input = document.getElementById('login-password');
const error_message = document.getElementById("login-error-message");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = getLoginFormErrors(name_input.ariaValueMax, password_input.value);
    if(errors.length > 0){
        e.preventDefault();
        error_message.innerText = error.join(". ");
    }
    else{
        error_message.innerText = "";
    }
})

function getLoginFormErrors(name, pass){
    let errors = []
    if(name === '' || name == null){
        error.push('Name is required')
        name.parentElement.classList.add('incorrect')
    }
    if(pass === '' || pass == null){
        error.push('Password is required')
        pass.parentElement.classList.add('incorrect');
    }
    return errors;
}