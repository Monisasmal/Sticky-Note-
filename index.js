let btn = document.querySelector("button");
let textArea = document.getElementById("area");
let color = document.getElementById("color");
let noteContainer = document.getElementById("notes_container");
let refreshAll = document.getElementById("refresh");
let message = document.getElementById("message");

// Create the right side element to show content
function addNote(){
    if(textArea.value === ""){
        alert("Please write your text");
        return;
    }

let div = document.createElement("div");
div.classList.add("container");
let p = document.createElement("p");
p.classList.add("para");
let cross_btn = document.createElement("button");
cross_btn.classList.add("crossButton");



// For Append Parent with Child
div.appendChild(p);
div.appendChild(cross_btn);

cross_btn.innerText = 'X';
p.innerText = textArea.value;

div.style.backgroundColor = color.value;

noteContainer.appendChild(div);
// console.log(div);
textArea.value = "";

cross_btn.addEventListener("click", function(){
    div.style.display = "none";
})

p.addEventListener("click", () =>{
    copyToClipboard(p);

    let originalText = p.innerText;
            p.innerText = "Copied!";
            p.style.color = "#fff";  // Change text color to white
            setTimeout(() => {
                p.innerText = originalText;  // Revert back to original color code
                p.style.color = "#000";  // Revert text color to black
            }, 1000); // Show "Copied!" for 1 second
        });
}


// show the text in Browser

btn.addEventListener('click', addNote);
btn.addEventListener('click', function(){
    message.innerText = "";
})
refreshAll.addEventListener('click', function(){
    noteContainer.innerHTML = "";
})



