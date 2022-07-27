import Auth from './auth';

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

const ordersObject = [
  {
    id: '000001',
    type: 'One-Time',
    quantity: 1,
    totalAmount: '$10.00',
    createdDate: '07/03/2021',
  },
  {
    id: '000002',
    type: 'Recurring Monthly',
    quantity: 10,
    totalAmount: '$100.00',
    createdDate: '02/09/2021',
  },
  {
    id: '000003',
    type: 'One-Time',
    quantity: 5,
    totalAmount: '$50.00',
    createdDate: '01/22/2022',
  },
  {
    id: '000004',
    type: 'One-Time',
    quantity: 3,
    totalAmount: '$30.00',
    createdDate: '08/05/2021',
  },
  {
    id: '000005',
    type: 'One-Time',
    quantity: 1,
    totalAmount: '$10.00',
    createdDate: '05/19/2021',
  },
  {
    id: '000006',
    type: 'One-Time',
    quantity: 25,
    totalAmount: '$180.00',
    createdDate: '04/09/2021',
  },
  {
    id: '000007',
    type: 'One-Time',
    quantity: 1,
    totalAmount: '$10.00',
    createdDate: '05/19/2021',
  },
  {
    id: '000008',
    type: 'One-Time',
    quantity: 25,
    totalAmount: '$180.00',
    createdDate: '04/09/2021',
  },
];

// Create users object array if does not exist
!localStorage.getItem('users')
  ? localStorage.setItem('users', JSON.stringify(usersObject))
  : null;

!localStorage.getItem('orders')
  ? localStorage.setItem('orders', JSON.stringify(ordersObject))
  : null;

const auth = new Auth();

document.querySelector('.logoutBtn').addEventListener('click', () => {
  auth.logOut();
});
