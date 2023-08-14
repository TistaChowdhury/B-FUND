document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // You can implement the sending of the form data to a server here.
    // For this example, we'll just display a response message.
    const responseMessage = `Thank you, ${name}! Your message has been received.`;
    document.getElementById("response").textContent = responseMessage;
    
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
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