// Assuming you have an array of user objects with profile picture paths
const users = [
    { name: "User 1", profilePicture: "path_to_image/user1.jpg" },
    { name: "User 2", profilePicture: "path_to_image/user2.jpg" },
    // ... other user objects
  ];
  
  // Assuming you have a <div> with class "user-cards" to display user cards
  const userCardsContainer = document.querySelector(".user-cards");
  
  // Loop through the array of users and create user cards
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
  
    const profilePicture = document.createElement("img");
    profilePicture.src = user.profilePicture;
    profilePicture.alt = user.name + "'s Profile Picture";
    card.appendChild(profilePicture);
  
    const userName = document.createElement("p");
    userName.textContent = user.name;
    card.appendChild(userName);
  
    userCardsContainer.appendChild(card);
  });
  