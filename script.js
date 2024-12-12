let menubar = document.getElementById("menubar");
let slidebar = document.querySelector(".slidebar");

menubar.addEventListener("click", ()=> {
    slidebar.classList.toggle("show");
    menubar.classList.toggle("menubar-move");
})