//const form = document.getElementById("colors-form");
const c1 = document.getElementById("in-color1");
const c2 = document.getElementById("in-color2");
const c3 = document.getElementById("in-color3");
const c4 = document.getElementById("in-color4");
const c5 = document.getElementById("in-color5");
var box = document.getElementById("preview-img");
var box2 = document.getElementById("preview-img2");

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
    /*
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
    }*/

    box.innerHTML = draw(c1.value, c2.value, c3.value, c4.value, c5.value);
    box2.innerHTML = draw2(c1.value, c2.value, c3.value, c4.value, c5.value);
}

copyBtn.addEventListener("click", () => {
    const textToCopy = colors;
    console.log(textToCopy);

    navigator.clipboard.writeText(textToCopy).then(() => {
        //alert("Copied!");
    });
});

// dark, ligth, blue, red, yellow
function draw(cl1, cl2, cl3, cl4, cl5){
    image = `
    <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2010_35)">
    <rect width="158" height="37" fill="${cl2}"/>
    <rect x="168" y="220" width="110" height="164" fill="${cl2}"/>
    <rect x="287" y="220" width="106" height="164" fill="${cl2}"/>
    <rect x="403" y="305" width="225" height="79" fill="${cl2}"/>
    <rect x="638" y="305" width="162" height="79" fill="${cl2}"/>
    <rect x="638" y="220" width="162" height="77" fill="${cl2}"/>
    <rect x="168" y="394" width="225" height="76" fill="${cl2}"/>
    <rect y="394" width="158" height="76" fill="${cl2}"/>
    <rect y="479" width="158" height="76" fill="${cl2}"/>
    <rect x="82" y="653" width="76" height="147" fill="${cl2}"/>
    <rect x="403" y="394" width="108" height="162" fill="${cl2}"/>
    <rect x="520" y="394" width="108" height="162" fill="${cl2}"/>
    <rect x="403" y="739" width="108" height="61" fill="${cl2}"/>
    <rect x="638" y="737" width="162" height="63" fill="${cl2}"/>
    <rect y="47" width="158" height="337" fill="${cl4}"/>
    <rect x="403" y="133" width="225" height="164" fill="${cl4}"/>
    <rect x="168" y="653" width="225" height="147" fill="${cl4}"/>
    <rect x="403" width="225" height="126" fill="${cl3}"/>
    <rect x="168" y="479" width="225" height="165" fill="${cl3}"/>
    <rect x="638" y="394" width="162" height="336" fill="${cl3}"/>
    <rect x="403" y="562" width="225" height="168" fill="${cl5}"/>
    <rect y="653" width="73" height="147" fill="${cl5}"/>
    <rect x="168" y="47" width="225" height="164" fill="${cl5}"/>
    <rect x="168" width="225" height="37" fill="${cl5}"/>
    <rect x="638" y="47" width="162" height="79" fill="${cl5}"/>
    <rect x="638" width="76" height="37" fill="${cl5}"/>
    <rect y="564" width="160" height="82" fill="${cl1}"/>
    <rect x="637" y="132" width="163" height="79" fill="${cl1}"/>
    <rect x="723" width="77" height="39" fill="${cl1}"/>
    <rect x="520" y="737" width="110" height="63" fill="${cl1}"/>
    <line x1="163.053" y1="0.000331004" x2="163" y2="800.001" stroke="${cl1}" stroke-width="10"/>
    <line x1="398.053" y1="-5.99967" x2="398" y2="800" stroke="${cl1}" stroke-width="10"/>
    <line x1="633.053" y1="-5.99967" x2="632.999" y2="808" stroke="${cl1}" stroke-width="10"/>
    <line y1="389" x2="800" y2="389" stroke="${cl1}" stroke-width="10"/>
    <line x1="399.999" y1="301.5" x2="800.001" y2="301.5" stroke="${cl1}" stroke-width="10"/>
    <line x1="400" y1="128" x2="800.002" y2="128" stroke="${cl1}" stroke-width="10"/>
    <line y1="42" x2="400.002" y2="42" stroke="${cl1}" stroke-width="10"/>
    <line x1="-7" y1="474" x2="393.002" y2="474" stroke="${cl1}" stroke-width="10"/>
    <line x1="399.999" y1="559.5" x2="628.003" y2="559.5" stroke="${cl1}" stroke-width="10"/>
    <line x1="515" y1="556" x2="515" y2="394" stroke="${cl1}" stroke-width="10"/>
    <line x1="77.5" y1="800.002" x2="77.5" y2="643.998" stroke="${cl1}" stroke-width="10"/>
    <line x1="282" y1="387" x2="282" y2="220" stroke="${cl1}" stroke-width="10"/>
    <line x1="719" y1="47" x2="719" stroke="${cl1}" stroke-width="10"/>
    <line x1="165" y1="648" x2="393.004" y2="648" stroke="${cl1}" stroke-width="10"/>
    <line x1="165" y1="215" x2="393.004" y2="215" stroke="${cl1}" stroke-width="10"/>
    <line x1="638" y1="42" x2="800" y2="42" stroke="${cl1}" stroke-width="10"/>
    <line x1="638" y1="215" x2="800" y2="215" stroke="${cl1}" stroke-width="10"/>
    <path d="M0 560H160" stroke="${cl1}" stroke-width="10"/>
    <line x1="-2" y1="648" x2="160" y2="648" stroke="${cl1}" stroke-width="10"/>
    <line x1="400" y1="734" x2="800.002" y2="734" stroke="${cl1}" stroke-width="10"/>
    <line x1="515.5" y1="800.004" x2="515.5" y2="734.996" stroke="${cl1}" stroke-width="10"/>
    </g>
    </svg>
    `

    return image;
}

// dark, ligth, blue, red, yellow
function draw2(cl1, cl2, cl3, cl4, cl5){
    image=`
    <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2015_35)">
    <path d="M433.932 784H634.056L522.601 523.668C450.119 553.241 328.598 623.39 275.418 671.356C346.254 695.469 406.687 735.438 433.932 784Z" fill="${cl3}" stroke="${cl1}" stroke-width="5"/>
    <path d="M555.789 0H422.539C397.383 50.9225 382.507 83.7864 350.712 123.658L391.331 203.259L441.362 323.413L549.845 244.812C532.257 175.784 524.424 86.5016 555.789 0Z" fill="${cl3}" stroke="${cl1}" stroke-width="5"/>
    <path d="M176.347 0C142.167 77.0983 49.0709 98.2838 0 123.658V535.683C91.1455 355.453 232.774 271.552 350.712 123.658C340.31 100.128 314.056 57.0728 302.663 0H176.347Z" fill="${cl2}" stroke="${cl1}" stroke-width="5"/>
    <path d="M186.749 784H433.932C406.687 735.438 346.254 695.47 275.418 671.356C226.378 715.588 213.003 733.436 186.749 784Z" fill="${cl2}" stroke="${cl1}" stroke-width="5"/>
    <path d="M800 330.356C725.154 398.02 695.48 389.997 570.65 407.019C570.65 350.948 560.886 288.143 549.845 244.812L441.362 323.413L522.601 523.668C522.601 523.668 696.966 437.129 800 523.668V330.356Z" fill="${cl2}" stroke="${cl1}" stroke-width="5"/>
    <path d="M800 330.356C725.154 398.02 695.48 389.997 570.65 407.019C570.65 350.948 560.886 288.143 549.845 244.812C642.902 175.648 738.576 76.7983 800 0V330.356Z" fill="${cl4}" stroke="${cl1}" stroke-width="5"/>
    <path d="M350.712 123.658C232.774 271.552 91.1455 355.453 0 535.683L441.362 323.413L391.331 203.259L350.712 123.658Z" fill="${cl4}" stroke="${cl1}" stroke-width="5"/>
    <path d="M0 535.683V784H186.749C213.003 733.436 226.378 715.588 275.418 671.356C176.347 637.632 106.502 633.308 0 535.683Z" fill="${cl4}" stroke="${cl1}" stroke-width="5"/>
    <path d="M176.347 0C142.167 77.0983 49.0709 98.2838 0 123.658V0H176.347Z" fill="${cl5}" stroke="${cl1}" stroke-width="5"/>
    <path d="M422.539 0H302.663C314.056 57.0728 340.31 100.128 350.712 123.658C382.507 83.7864 397.383 50.9225 422.539 0Z" fill="${cl5}" stroke="${cl1}" stroke-width="5"/>
    <path d="M634.056 784H800V523.668C696.966 437.129 522.601 523.668 522.601 523.668L634.056 784Z" fill="${cl5}" stroke="${cl1}" stroke-width="5"/>
    <path d="M800 0H555.789C524.424 86.5016 532.257 175.784 549.845 244.812C642.902 175.648 738.576 76.7983 800 0Z" fill="${cl5}" stroke="${cl1}" stroke-width="5"/>
    <path d="M275.418 671.356C176.347 637.632 106.502 633.308 0 535.683L441.362 323.413L522.601 523.668C450.119 553.241 328.598 623.39 275.418 671.356Z" fill="${cl5}" stroke="${cl1}" stroke-width="5"/>
    <path d="M0 535.683V123.658M0 535.683V784H186.749M0 535.683C91.1455 355.453 232.774 271.552 350.712 123.658M0 535.683C106.502 633.308 176.347 637.632 275.418 671.356M0 535.683L441.362 323.412M422.539 0H302.663M422.539 0H555.789M422.539 0C397.383 50.9225 382.507 83.7864 350.712 123.658M800 0H555.789M800 0V330.356M800 0C738.576 76.7983 642.902 175.648 549.845 244.812M634.056 784H800C800 784 800 601.339 800 523.668M634.056 784H433.932M634.056 784L522.601 523.668M302.663 0H176.347M302.663 0C314.056 57.0728 340.31 100.128 350.712 123.658M800
        330.356C725.154 398.02 695.48 389.997 570.65 407.019C570.65 350.948 560.886 288.143 549.845 244.812M800 330.356V523.668M555.789 0C524.424 86.5016 532.257 175.784 549.845 244.812M433.932 784H186.749M433.932 784C406.687 735.438 346.254 695.469 275.418 671.356M186.749 784C213.003 733.435 226.378 715.588 275.418 671.356M0 123.658C49.0709 98.2837 142.167 77.0983 176.347 0M0 123.658V0H176.347M350.712 123.658L391.331 203.259L441.362 323.412M549.845 244.812L441.362 323.412M522.601 523.668C450.119 553.241 328.598 623.39 275.418 671.356M522.601 523.668C522.601 523.668 696.966 437.129 800 523.668M522.601 523.668L441.362 323.412" 
        stroke="${cl1}" stroke-width="10"/>
    </g>
    </svg>
    `;

    return image;
}
