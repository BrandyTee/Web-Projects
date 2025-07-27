//Count characters
let myInput = document.getElementById("inputId")
//let delBtn = document.getElementById("delBtn")
let addBtn = document.getElementById("addBtn")
let h1 = document.getElementsByTagName("h1");
let p = document.getElementById("myP");
let body = document.getElementsByTagName("body")

myInput.addEventListener("input", countChar)

function countChar(e) {
    let inputChar = myInput.value;
    p.textContent = `You typed: ${inputChar.length} words`;
}



//Add To List
addBtn.addEventListener("click", addList)

function addList(e) {
    let inputChar = myInput.value;
    let inputList = [];
    inputList.push(inputChar);
    
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginBottom = "20px";
    
    li.innerHTML = inputList[inputList.length - 1];
    ul.appendChild(li);
    ul.appendChild(delBtn);
    
    
    delBtn.addEventListener("click", function() {
        ul.removeChild(li)
        ul.removeChild(delBtn);
    })
    
    //p.textContent = `You typed: ${inputChar.length} words`;
}





