//Change Text to Goodbye
let button = document.querySelector("#myBtn");
let textH1 = document.getElementsByClassName("myH1");
let colorBtn = document.getElementById("colorBtn");
let body = document.getElementsByTagName("body");

button.style.backgroundColor = "rgb(90, 90, 255)"
button.style.color = "white";

colorBtn.style.backgroundColor = "rgb(60, 255, 70)";
colorBtn.style.color = "white";

let textArray = ["Goodbye", "Hello People"];
let arrayVar = 0;

//Change text
document.getElementById("myBtn").addEventListener("click", changeText); 
function changeText(e) {
    
    let textH1 = document.getElementsByClassName("myH1");
    textH1[0].textContent = textArray[arrayVar];
    arrayVar = 1 - arrayVar;
}


//Change Color
colorBtn.addEventListener("click", changeColor);
function changeColor(e) {
    //Change Color 
    red = Math.round((Math.random(0, 1) * 255), 0);
    green = Math.round((Math.random(0, 1) * 255), 0);
    blue = Math.round((Math.random(0, 1) * 255), 0);
    
    body[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}



