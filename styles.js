/*
function bgBtn() {

    let spAn = document.getElementById("spanColor");
    let bTn = document.getElementById("bgButton");
    let buTn = document.getElementById("bgColor");

    
   let colour = ["magenta", "lightblue","grey", "pink", "azure","yellow","orange","black", "blue", "coral", "green", "red", "olive"];
    
let numColour = colour.length;
console.log(numColour);

let ranColor = Math.floor(Math.random() * numColour);
let pickColor = colour[ranColor];

console.log(pickColor )

spAn.innerHTML = pickColor;
buTn.style.backgroundColor  = pickColor;
bg.style.backgroundColor = pickColor;


}

*/

function bgBtn() {

let head = document.getElementById("head");
    let spAn = document.getElementById("spanColor");
    let bTn = document.getElementById("bgButton");
    let bColours = [0, 1,2,3, 4, 5, 6, 7,8, 9, "a", "b", "c", "d", "e", "f"];
    hashTag ="#";



    for(let i = 0; i < 6; i++)
    {    hashTag += bColours[Math.floor(Math.random() * bColours.length)];

    }

spAn.innerHTML = hashTag;
bg.style.backgroundColor = hashTag;
head.style.backgroundColor = hashTag;
}
