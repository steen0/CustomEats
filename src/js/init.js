const usersObject = [
  {
    username: 'tsteen0731',
    password: 'baseball',
  },
  {
    username: 'billybeans',
    password: 'football',
  },
];

localStorage.setItem('users', JSON.stringify(usersObject));
