const myButton = document.getElementById("button")
const myParagraph = document.getElementById("my-paragraph")

let clickCounter = 0;

myButton.onclick = clickFunction

function clickFunction() {

clickCounter = clickCounter + 1;

    myParagraph.innerHTML = "I have been clicked " + clickCounter + " times"
}
