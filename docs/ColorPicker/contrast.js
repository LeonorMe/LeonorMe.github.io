//const form = document.getElementById("colors-form");
const c1 = document.getElementById("in-color1");
const c2 = document.getElementById("in-color2");
const c3 = document.getElementById("in-color3");
const c4 = document.getElementById("in-color4");
const c5 = document.getElementById("in-color5");
var box = document.getElementById("contrast-tests")

var colors = [];

window.addEventListener("load", updateColors);

const copyBtn = document.getElementById("copy-input");

c1.addEventListener("change", updateColors, false);
c2.addEventListener("change", updateColors, false);
c3.addEventListener("change", updateColors, false);
c4.addEventListener("change", updateColors, false);
c5.addEventListener("change", updateColors, false);

function updateColors(e){
    //console.log("Updating...")
    colors = [c1.value, c2.value, c3.value, c4.value, c5.value]
    console.log(colors);
    //console.log(e.target.value);
    //colors.join(e.target.value);

    const text = "Lorem ipsum";
    var newString = "";
    for(var i=0; i<5; i++){
        newString += `<div class="row">`;
        for (var j=4; j>=0; j--){
            if(j != i){

                newString += `<div class="contrast-test" \
                style="background:${colors[i]}; \
                color:${colors[j]};"> \
                ${text}</div>`;
            }
        }
        newString += `</div> <br>`;
    }

    box.innerHTML = newString;
}

copyBtn.addEventListener("click", () => {
    const textToCopy = colors;
    console.log(textToCopy);

    navigator.clipboard.writeText(textToCopy).then(() => {
        //alert("Copied!");
    });
});
