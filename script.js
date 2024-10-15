const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")
const characterImg = document.getElementById("character-img")

const imageOne = "assets/charzard.png";
const imageTwo = "assets/bulbasaur.png";
const imageThree = "assets/squirtle.png";

const altOne = "Charzard";
const altTwo = "Bulbasaur";
const altThree = "Squirtle";

const nameOne = "Charzard";
const nameTwo = "Bulbasaur";
const nameThree = "Squirtle";

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
        characterImg.src = imageOne;
        characterImg.alt = altOne;
        myParagraph.innerHTML = nameOne
        return;
    }

    if(characterCounter === 2) {
        characterImg.src = imageTwo;
        characterImg.alt = altTwo;
        myParagraph.innerHTML = nameTwo
        return;
    }

    if(characterCounter === 3) {
        characterImg.src = imageThree;
        characterImg.alt = altThree;
        myParagraph.innerHTML = nameThree
        return;
    }
    
    
    // characterImg.src = "assets/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-1713906417665.webp"
    
}

