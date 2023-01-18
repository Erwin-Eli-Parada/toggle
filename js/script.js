const toggleButton= document.querySelector(".toggle-button");
const container = document.querySelector(".container");

toggleButton.addEventListener("click",()=>{
    toggleButton.textContent= "-";
    container.classList.toggle("active");
});