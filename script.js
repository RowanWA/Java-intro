
// document.getElementById("my-paragraph").innerHTML = "test";


{/* <button onclick= "document.getElementById('button').innerHTML"> thx</button>; */ }

document.getElementById('button').addEventListener("click", clickFunction);

function clickFunction() {
    document.getElementById("my-paragraph").innerHTML = "test";
}