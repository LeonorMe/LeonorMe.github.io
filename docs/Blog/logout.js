document.getElementById("logout").onclick = function () {
    sessionStorage.removeItem("AuthenticationState");
    sessionStorage.removeItem("AuthenticationExpires");
    window.open("index.html", "_self");
};
