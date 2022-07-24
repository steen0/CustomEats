const usersObject = [
  {
    username: 'tsteen0731',
    password: 'baseball',
  },
  {
    username: 'billybeans',
    password: 'football',
  },
  {
    username: 'admin',
    password: 'password',
  },
];

const ordersObject = [
  {
    id: '000001',
    type: 'Recurring Monthly',
    quantity: 10,
    amountUSD: '$100.00',
    createdDate: '07/18/2022',
  },
  {},
];

// Create users object array if does not exist
!localStorage.getItem('users')
  ? localStorage.setItem('users', JSON.stringify(usersObject))
  : null;

// Create orders object array if does not exist
!localStorage.getItem('orders')
  ? localStorage.setItem('orders', JSON.stringify(ordersObject))
  : null;

const auth = new Auth();

document.querySelector('.logoutBtn').addEventListener('click', () => {
  auth.logOut();
});
