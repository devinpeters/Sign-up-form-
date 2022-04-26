const button = document.querySelector(".button");
const inputs = document.querySelectorAll(".input");

button.addEventListener("click", ()=>{
    inputs.forEach((element)=>{
        element.textContent = "";
    })
});