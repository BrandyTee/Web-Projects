
//DOM INTRO


//ELEMENTS SELECTION

let h1 = document.getElementById("hie")
//Single element by ID

let h2 = document.getElementsByClassName("js")
//HTMLCollection by class

let body = document.getElementsByTagName("body")
//HTML Collection by tag

let btn = document.querySelector("#myBtn")
//First match(.class, #id)

document.querySelectorAll("selector")
//All matches (NodeList)



//Changing Content or Style
h1.textContent = "Hello Azania";
//Change text

h2[0].innerHTML = "<strong>I love JS DOM</strong>"
//Insert HTML

body[0].style.backgroundColor = "grey";
//Change CSS style fontSize, backgroundColor

btn.style.fontSize = "20px";

//Create 
const newDiv = document.createElement("div");
newDiv.textContent = "I was added";
document.body.appendChild(newDiv);

//Remove 
const removeMe = document.getElementById("hie");
removeMe.remove();

//Events
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button clickes");
});





