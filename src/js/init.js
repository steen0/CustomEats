const auth = new Auth();

document.querySelector('.logoutBtn').addEventListener('click', () => {
  auth.logOut();
});
