//const lqip = require('lqip');
//const { count } = require("console");
//const { read } = require("fs");

const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const uploadedImage = document.getElementById("uploaded-img");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const xMin=0, xMax=255;
const yMin=0, yMax=255;
const zMin=0, zMax=255;

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    console.log("Uploading...");
    let file = inputFile.files[0]
    console.log("File: ", file);
    let imgLink = URL.createObjectURL(file);
    console.log(imgLink);

    //imageView.style.backgroundImage = `url(${imgLink})`;

    imageView.textContent = "";
    imageView.style.border = 0;

    uploadedImage.src = imgLink;

    calculatePallet(file);
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});

function calculatePallet(file){
    console.log("Calculating...");
    /*console.log(img);
    lqip.pallete(img).then(res => {
        console.log(res);
    });*/
    let reader = new FileReader();
    reader.onload = function(e){
        let image = new Image(); 
        image.src = uploadImage.src;
        image.addEventListener("load", function(){
            generateColorPalette(image);
        })
    }
    reader.readAsDataURL(file);
}

function generateColorPalette(img){
    let colors = getImageColors(img);
    const cubeSize = 80;
    let topDensityCubes = findTopDensityCubes(colors,cubeSize);
    const centersOfMass = topDensityCubes.map(([i,j,k])=>{
        const rMin = i*cubeSize+xMin;
        const rMax = rMin+cubeSize;
        const gMin = j*cubeSize+yMin;
        const gMax = gMin+cubeSize;
        const bMin = k*cubeSize+zMin;
        const bMax = bMin+cubeSize;
        const cubeColors = colors.filter(([r,g,b])=>
            r <= rMin && r<rMax &&
            g <= gMin && g<gMax &&
            b <= bMin && b<bMax
        );
        const sum = cubeColors.reduce(([rSum, gSum, bSum], [r,g,b])=>[
            rSum + r,
            gSum + g,
            bSum + b
        ],[0,0,0]);
        return sum.map(x=>x/cubeColors.length);
    })
    fillColorPallete(centersOfMass);
}
function findTopDensityCubes(colors, cubeSize, n=12){
    const xLength = Math.ceil((xMax-xMin)/cubeSize);
    const yLength = Math.ceil((yMax-yMin)/cubeSize);
    const zLength = Math.ceil((zMax-zMin)/cubeSize);
    const counts = new Array(xLength);
    for(let i=0; i<xLength; i++){
        counts[i] = new Array(xLength);
        for(let j=0; j<yLength; j++){
            counts[i][j] = new Array[yLength].fill(0);
        }
    }
    for (let p=0; p<colors.length; p++){
        const [r,g,b] = colors[p];
        const i = Math.floor((r-xMin)/cubeSize);
        const j = Math.floor((g-xMin)/cubeSize);
        const k = Math.floor((b-xMin)/cubeSize);
        counts[i][j][k]++;
    }
    let indicesAndCounts = [];
    for (let i=0; i<xLength; i++){
        for (let j=0; j<yLength; j++){
            for (let k=0; k<zLength; k++){
                indicesAndCounts.push({index:[i,j,k], count:counts[i,j,k]});
            }
        }
    }
    indicesAndCounts.sort((a,b)=>b.count-a.count);
    return indicesAndCounts.slice(0,n).map(x=>x.index);
}
function getImageColors(img){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
    const data = imageData.data;
    const imageColors = [];
    for (let i=0; i<data.length; i++){
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        imageColors.push([r,g,b]);
    }
    return image.colors;
}

function fillColorPallete(centerOfMass){
    let colorCount = centerOfMass.reduce((acc, rgb)=>acc+rgb.every(value=>isNaN(value)),0);
    for(let i=1; i<= centerOfMass.length;i++){
        let divId = "cluester"+i;
        let div = document.getElementById(divId);
        let color = centerOfMass[i+1];
        div.style.backgroundColor = `rgb(${color[0]},${color[1],$color[2]})`;
        div.title = `rgb(${Math.round(color[0])},${Math.round(color[1])},${Math.round(color[2])})`;
        if(isNaN(Color[0]))
            div.style.width = "0%";
        else
            div.style.width = (100/(12-colorCount))+"%";
    }
}