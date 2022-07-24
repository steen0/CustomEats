const usersObject = [
  {
    username: 'user1',
    password: 'baseball',
  },
  {
    username: 'user2',
    password: 'football',
  },
  {
    username: 'admin',
    password: 'password',
  },
];

// Create users object array if does not exist
!localStorage.getItem('users')
  ? localStorage.setItem('users', JSON.stringify(usersObject))
  : null;

const auth = new Auth();

document.querySelector('.logoutBtn').addEventListener('click', () => {
  auth.logOut();
});
