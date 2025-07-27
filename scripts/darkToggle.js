//darkToggle

let darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", toggleDark);

function toggleDark(e) {
    document.body.classList.toggle("dark");
    //document.body.style.color = "green";
    //alert("Yes");
}



