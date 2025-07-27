//FormTrue

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let inputBtn = document.getElementById("submitBtn");
let myForm = document.getElementById("myForm");
let nameLabel = document.getElementById("nameLabel");
let emailLabel = document.getElementById("emailLabel");


inputBtn.addEventListener("click", checkValid);

function checkValid(e) {
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    
    if (nameValue === "" && emailValue === "") {
        nameLabel.innerHTML = "<p>Please Enter Your Name</p>";
        emailLabel.innerHTML = "<p>Please Enter Your Email</p>";
    } else if (nameValue === "") {
        nameLabel.innerHTML = "<p>Please Enter Your Name</p>";
    } else if (emailValue === "") {
        emailLabel.innerHTML = "<p>Please Enter Your Email</p>";
    }
    
}



