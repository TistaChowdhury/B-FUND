<<<<<<< HEAD
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
  
    const profilePicture = document.getElementById('profilePicture').files[0];
    const investor = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      email: formData.get('email'),
      password: formData.get('password'),
      resume: formData.get('resume'),
      profilePicture: profilePicture ? profilePicture.name : 'default.jpg',
    };
  
    if (profilePicture) {
      const imageUrl = await uploadImage(profilePicture);
      investor.profilePicture = imageUrl;
    }
  
    investors.push(investor);
    // ... rest of the code ...
  });
  
  // ... rest of the code ...
  
  async function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);
  
    const response = await fetch('upload.php', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      const data = await response.json();
      return data.imageUrl;
    } else {
      console.error('Image upload failed.');
      return null;
    }
  }
  
=======
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
>>>>>>> 664f33f1e06f46a27489dbb1a93b37c22c181afb
