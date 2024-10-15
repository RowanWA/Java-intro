const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")
const characterImg = document.getElementById("character-img")
const customName = document.getElementById("name")
const nameButton = document.getElementById("nameButton")

const imageSources = ["assets/charzard.png", "assets/bulbasaur.png", "assets/squirtle.png"]

const altSources = ["Charzard", "Bulbasaur", "Squirtle"]

const nameSources = ["Charzard", "Bulbasaur", "Squirtle"]


nameButton.onclick = nameChangeFunction

function nameChangeFunction() {
    myParagraph.innerHTML = customName.value
}

let characterCounter = 1;

myButton.onclick = clickFunction


function clickFunction() {
    characterCounter = characterCounter + 1;

    console.log("The button has been clicked");

    if (characterCounter > 3) {
        characterCounter = 1;
    }

    characterImg.src = imageSources[characterCounter - 1];
    characterImg.alt = altSources[characterCounter - 1];
    myParagraph.innerHTML = nameSources[characterCounter - 1];
}

