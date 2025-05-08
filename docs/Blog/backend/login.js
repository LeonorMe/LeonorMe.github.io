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
            sessionStorage.setItem("AuthenticationState", "Authenticated");
            //This authentication key will expire in 1 hour.
            //sessionStorage.setItem("AuthenticationExpires", Date.now.addHours(1));
            sessionStorage.setItem("AuthenticationExpires", 1*60*60*1000 + Date.now());
            //Push the user over to the next page.
            window.open('manage.html','_self');

            //window.location.href = "manage.html";
        }
        else{
            error_message.innerHTML =
                "<i>⚠️Invalid username or password.</i>";
            error_message.style.color = "var(--secondary)";

            sessionStorage.removeItem("AuthenticationState");
            sessionStorage.removeItem("AuthenticationExpires");

            return;
        }
    }
    
});

/*
Date.prototype.addHours = function(h) {    
    this.setTime(this.getTime() + (h*60*60*1000)); 
    return this;   
}*/