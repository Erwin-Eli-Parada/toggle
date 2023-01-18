const toggleButton= document.querySelector(".toggle-button");
const container = document.querySelector(".container");

let active=false;

toggleButton.addEventListener("click",()=>{
    active = !active;
    active ? toggleButton.textContent= "-" : toggleButton.textContent= "+";
    container.classList.toggle("active");
});