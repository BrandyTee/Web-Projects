//Password Toggler

let myCheck = document.getElementById("myCheck");
let passwordInput = document.getElementById("passwordInput");


myCheck.addEventListener("click", togglePassword);

function togglePassword(e) {
    let value = myCheck.value;
    if (value === "off") {
        passwordInput.type = "text"; 
        myCheck.value = "on";
    } else if (value === "on") {
        passwordInput.type = "password";
        myCheck.value = "off";
    }
    
}


