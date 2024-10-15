// setting my constants based on element ids in my html doc
const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")
const characterImg = document.getElementById("character-img")
const customName = document.getElementById("name")
const nameButton = document.getElementById("nameButton")

// setting up arrays to store images and text for cycling of character
const imageSources = ["assets/charzard.png", "assets/bulbasaur.png", "assets/squirtle.png"]
const altSources = ["Charzard", "Bulbasaur", "Squirtle"]
const nameSources = ["Charzard", "Bulbasaur", "Squirtle"]


// assigning function to nameButton 
nameButton.onclick = nameChangeFunction
// replacing current text with inputted custom name 
function nameChangeFunction() {
    myParagraph.innerHTML = customName.value
}



// setting default counter score 
let characterCounter = 1;
// assigning function to myButton
myButton.onclick = clickFunction
// making button cycle through the images and names in the arrays we set up
function clickFunction() {
    // increases character counter to keep score of current character
    characterCounter = characterCounter + 1;
    // resets counter once array has reached limit
    if (characterCounter > 3) {
        characterCounter = 1;
    }
    // defines sources and names to use from the array
    characterImg.src = imageSources[characterCounter - 1];
    characterImg.alt = altSources[characterCounter - 1];
    myParagraph.innerHTML = nameSources[characterCounter - 1];
}

const fancyHat = document.getElementById("complement-one");
const dropZone = document.getElementById ("character-img");

function onDrop(event) { 
    fancyHat.style.left = event.clientX - offsetX + "px";
    fancyHat.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault ();
    console.log("Something is being dragged over me!");
}

let offsetX = 0;
let offsetY = 0;

function onDragStart(event) {

    const style = window.getComputedStyle(fancyHat, null)

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY- parseInt(style.top);
    console.log ("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
fancyHat.ondragstart = onDragStart;
