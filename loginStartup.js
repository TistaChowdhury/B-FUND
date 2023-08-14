const users = []; // Array to store user data

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const user = {
    name: formData.get('name'),
    contact: formData.get('contact'),
    email: formData.get('email'),
    password: formData.get('password'),
    resume: formData.get('resume'),
  };
  users.push(user); // Add the user to the array
  console.log("User added:", user);

  // Save the updated user array to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect to the user list page
  window.location.href = "userList.html";
});

const gmailLoginButton = document.querySelector('.gmail-login');
gmailLoginButton.addEventListener('click', function() {
  // Placeholder code for Gmail login
  console.log("Login with Gmail clicked");
});

