const users = JSON.parse(localStorage.getItem('users') || '[]');
const userCardsContainer = document.getElementById('userCards');

for (const user of users) {
  const userCard = createUserCard(user);
  userCardsContainer.appendChild(userCard);
}

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  const nameElement = document.createElement('h3');
  nameElement.textContent = user.name;

  const startupIdeaElement = document.createElement('p');
  startupIdeaElement.textContent = `Startup Idea: ${user.startupIdea}`;

  const emailElement = document.createElement('p');
  emailElement.textContent = `Email: ${user.email}`;

  const findAskLink = document.createElement('a');
  findAskLink.href = '#'; // Replace '#' with the actual link URL
  findAskLink.textContent = 'Find their ask >>';

  userCard.appendChild(nameElement);
  userCard.appendChild(startupIdeaElement);
  userCard.appendChild(emailElement);
  userCard.appendChild(findAskLink);

  return userCard;
}
  