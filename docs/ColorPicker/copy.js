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
        console.log(targetElement);

        const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();
        console.log(textToCopy);

        navigator.clipboard.writeText(textToCopy).then(() => {
        //alert("Copied!");
        });
    });
});