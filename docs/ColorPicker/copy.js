/*document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent
            .replace(/\s+/g, " ")
            .trim();

        console.log(targetElement);
        console.log(textToCopy);

        navigator.clipboard.writeText(textToCopy).then(() => {
            //alert("Copied!");
        })
    })
})*/

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

        // #ffffff =>
        // --primary: #ffffff;
        //const varNames = ["primary", "secondary", "tertiary", "quaternary", ...]
        //const varNames = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"]
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