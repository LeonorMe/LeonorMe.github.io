
function update(e){
    if (e.key === "Enter" || e.keyCode === 13) {
        const savedSVG = document.getElementById("saved-img");
        
        console.log("entered new value")
        var value = getPercentage()
        console.log("new percentage: " + value);
        savedSVG.style.clipPath = `inset(0% ${value}% 0% 0%)`;
    }
}

function getPercentage(){
    const goalValue = document.getElementById("goal");
    const savedValue = document.getElementById("saved");
    console.log(goalValue)

    var perct = savedValue.value * 100 / goalValue.value;
    return perct
}

