const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")
const characterImg = document.getElementById("character-img")

const imageOne = "assets/eab8104df5b39b69e868de47675737c1.jpg";
const imageTwo = "assets/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-1713906417665.webp";
const imageThree = "assets/squirtle.jpeg";


let characterCounter = 1;

myButton.onclick = clickFunction

function clickFunction() {
    

    console.log("The button has been clicked")
    
    if(characterCounter > 3) {
        characterCounter =1;
    }

    myParagraph.innerHTML = "I am on character " + characterCounter

    if(characterCounter === 1) {
        characterImg.src = imageOne;
        return;
    }

    if(characterCounter === 2) {
        characterImg.src = imageTwo;
        return;
    }

    if(characterCounter === 3) {
        characterImg.src = imageThree;
        return;
    }
    
    characterCounterCounter = characterCounter + 1;
    
    // characterImg.src = "assets/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-1713906417665.webp"
    
}

