document.querySelectorAll(".copy").forEach((copyButton) => {
    copyButton.addEventListener("click", () => {
        
        const targetElement = document.getElementById(copyButton.dataset.copy);
        //console.log(targetElement);

        const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();
        console.log(textToCopy);

        navigator.clipboard.writeText(textToCopy).then(() => {
        //alert("Copied!");
        });
    });
});

document.querySelectorAll(".copy-css").forEach((copyButton) => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.getElementById(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();

        //const varNames = ["primary", "secondary", "tertiary", "quaternary", ...]
        var textToCopyCss = ":root{";
        var i=0;
        textToCopy.split(" ").forEach((color) => {
            textToCopyCss += "\n\t--c" + i + ": " + color + ";";
            i++;
        });
        textToCopyCss += "\n}"

        console.log(textToCopyCss);

        navigator.clipboard.writeText(textToCopyCss).then(() => {
        //alert("Copied!");
        });
    });
});