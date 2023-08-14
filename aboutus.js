
// JavaScript to add "loaded" class when the page is fully loaded
window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});


const nav_hamburger = document.getElementById('nav_hamburger')
const nav_hamburger_menu = document.getElementById("nav_hamburger_menu")

nav_hamburger.addEventListener("click", () =>{
  if (nav_hamburger_menu.style.display == "block")
  {
    nav_hamburger_menu.style.display = "none"
  }
  else{
    nav_hamburger_menu.style.display = "block"
  }
})