class Users {
  constructor(img, name, title, company) {
    this.img = img;
    this.name = name;
    this.title = title;
    this.company = company;
  }
}

const users = [
  {
    img: './images/img1.jpeg',
    name: 'Sarah Freeman',
    title: 'Frontend Developer',
    company: './images/google.png'
  },
  {
    img: './images/img2.jpeg',
    name: 'Clark Westmoore',
    title: 'Products Manager',
    company: './images/amazon.png'
  },
  {
    img: './images/img3.jpeg',
    name: 'Craig Highman',
    title: 'Software Engineer',
    company: './images/samsung.png'
  }
];

const userCard = (img, name, title, logo) => {
  return `
    <div class="user-card">
      <img class="user-img" src="${img}" alt="">
      <div class="user-details">
        <h3 class="user-name">${name}</h3>
        <p class="user-title">${title}</p>
        <img class="company-logo" src="${logo}" alt="">
      </div>
    </div>
  `;
}

const userDisplay = document.getElementById('user-display');

const updateUserDisplay = (img, name, title, logo) => {
  userDisplay.innerHTML += userCard(img, name, title, logo);
}

// Display existing users
users.forEach(user => {
  const newUser = new Users(user.img, user.name, user.title, user.company);
  updateUserDisplay(newUser.img, newUser.name, newUser.title, newUser.company);
});

// Modal handling
const openUserModal = document.getElementById('create-user-btn');
const closeUserModal = document.getElementById('close-user-modal');
const createNewUserBtn = document.getElementById('add-user-btn');
const userModal = document.getElementById('create-user-modal');

openUserModal.addEventListener('click', () => {
  userModal.classList.remove('hidden');
});

closeUserModal.addEventListener('click', () => {
  userModal.classList.add('hidden');
});

createNewUserBtn.addEventListener('click', () => createNewUser());

const createNewUser = () => {
  // Collect form values
  const imgValue = document.getElementById('img-value').files[0]; // Fix reference to files
  const nameValue = document.getElementById('name-value').value;
  const titleValue = document.getElementById('title-value').value;
  const logoValue = document.getElementById('logo-value').value;
  
  // Create new user object (assuming the Users constructor exists)
  const newUser = new Users(imgValue, nameValue, titleValue, logoValue);
  
  // Add new user to the beginning of the users array
  users.unshift(newUser);
  
  // Update display with the new user's data (assuming updateUserDisplay is defined)
  updateUserDisplay(newUser.img, newUser.name, newUser.title, newUser.company);
  
  // Hide the modal (assuming userModal is a defined element)
  userModal.classList.add('hidden');
};
