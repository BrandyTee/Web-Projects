//Image Slider

let images = [
    "images/bugatti1.jpg",
    "images/bugatti3.jpg",
    "images/rolls1.jpg",
    "images/rolls2.jpg",
    "images/maybach1.jpg",
    "images/maybach2.jpg",
]

let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("forwardBtn");
let imageDiv = document.getElementById("imageID");

let counter = 0;

let image = document.createElement("img");
image.src = images[counter];
image.style.height = "300px";
image.style.width = "300px";
image.style.borderRadius = "5px";
imageDiv.appendChild(image);

forwardBtn.addEventListener("click", forwardFunc);

function forwardFunc(e) {
    if (counter < images.length -1) {
        counter += 1;
        image.src = images[counter];
    } else if (counter === images.length - 1) {
        counter = 0;
        image.src = images[counter];
    }
}


backBtn.addEventListener("click", backFunc);

function backFunc(e) {
    if (counter > 0) {
        counter -= 1;
        image.src = images[counter];
    } else if (counter === 0) {
        counter = images.length - 1;
        image.src = images[counter];
    }
}



