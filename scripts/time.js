//Time Js
let timeText = document.getElementById("timeText");

function setTime() {
    let now = new Date();

    let mySeconds = now.getSeconds().toString().padStart(2, '0');
    let myMinutes = now.getMinutes().toString().padStart(2, '0');
    let myHours = now.getHours().toString().padStart(2, '0');

    let myTime = `${myHours}:${myMinutes}:${mySeconds}`;
    
    timeText.textContent = myTime;

}

setInterval(setTime, 1000);

