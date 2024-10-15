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

