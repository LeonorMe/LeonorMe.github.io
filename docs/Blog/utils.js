function isAuth(){
    if (sessionStorage.getItem('AuthenticationState') === null) {
        return false;
    }
    else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
        return false;
    }
    else {
        return true;
    }
}

function logout(){
    sessionStorage.removeItem("AuthenticationState");
    sessionStorage.removeItem("AuthenticationExpires");
    window.open("index.html", "_self");
}