const imageSources = ["assets/charzard.png", "assets/bulbasaur.png", "assets/squirtle.png"]

const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")
const characterImg = document.getElementById("character-img")

// const imageOne = "assets/charzard.png";
// const imageTwo = "assets/bulbasaur.png";
// const imageThree = "assets/squirtle.png";

const altSources = ["Charzard", "Bulbasaur", "Squirtle"]

// const altOne = "Charzard";
// const altTwo = "Bulbasaur";
// const altThree = "Squirtle";

const nameSources = ["Charzard", "Bulbasaur", "Squirtle"]

// const nameOne = "Charzard";
// const nameTwo = "Bulbasaur";
// const nameThree = "Squirtle";

let characterCounter = 1;

myButton.onclick = clickFunction

myParagraph.innerHTML = nameOne

function clickFunction() {
    characterCounter = characterCounter + 1;

    console.log("The button has been clicked");
    
    if(characterCounter > 3) {
        characterCounter =1;
    }

    myParagraph.innerHTML = "I am on character " + characterCounter;

    if(characterCounter === 1) {
        characterImg.src = imageSources [characterCounter - 1];
        characterImg.alt = altSources [characterCounter - 1];
        myParagraph.innerHTML = nameSources [characterCounter - 1];
        return;
    }

    if(characterCounter === 2) {
        characterImg.src = imageSources [1];
        characterImg.alt = altSources [1];
        myParagraph.innerHTML = nameSources [1];
        return;
    }

    if(characterCounter === 3) {
        characterImg.src = imageSources [2];
        characterImg.alt = altSources [2];
        myParagraph.innerHTML = nameSources [2];
        return;
    }
    
    
    // characterImg.src = "assets/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-1713906417665.webp"
    
}

