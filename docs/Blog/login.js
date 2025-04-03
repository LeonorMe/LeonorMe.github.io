const name_input = document.getElementById('login-name');
const password_input = document.getElementById('login-password');
const error_message = document.getElementById("login-error-message");

const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = name_input.value;
    const password = CryptoJS.MD5(password_input.value).toString();
    
    if(!name || !password) {
        error_message.textContent = "Please fill in all fields.";
        return;
    }else {
        txt = await fetch("/../../file.txt")
            .then((response) => response.text())
            .then((txt) => txt.split("\r\n"));

        if(name===txt[0] && password===txt[1]){
            window.location.href = "manage.html";
        }
        else{
            error_message.innerHTML =
                "<i>⚠️Invalid username or password.</i>";
            error_message.style.color = "var(--secondary)";
            return;
        }
    }
    
});