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

class Login {
  constructor(form, ...fields) {
    this.form = form;

    // fieldNames
    this.fields = fields;

    // validate fieldsn and either display errors or allow redirect
    this.validateLogin();
  }

  validateLogin() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent default submit\

      let error = false;

      this.fields.forEach((fieldName) => {
        const field = document.getElementById(fieldName);
        if (this.validateField(field) == false) {
          error = true;
        }
      });

      if (error == false && this.checkIfUserExists()) {
        // && this.checkIfUserExists()
        localStorage.setItem('auth', true);
        window.location.href = 'landing.html';
      }
    });
  }

  validateField(field) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // check if field is blank, else check specific criteria based on field name
    if (field.value.trim() === '') {
      this.setStatus(
        field,
        `${field.previousElementSibling.previousElementSibling.textContent} cannot be blank.`,
        'error'
      );
      return false;
    } else {
      if (field.name === 'username') {
        if (field.value.indexOf(' ') !== -1) {
          this.setStatus(field, `Username cannot contain spaces.`, 'error');
          return false;
        } else if (specialChars.test(field.value)) {
          this.setStatus(
            field,
            `Username cannot contain special characters.`,
            'error'
          );
          return false;
        } else {
          this.setStatus(field, null, 'success');
          return true;
        }
      } else if (field.name === 'password') {
        if (field.value.length < 8) {
          // set the status based on the field, the field label, and if it is an error message
          this.setStatus(
            field,
            `Password must be at least 8 characters`,
            'error'
          );
          return false;
        } else {
          // set the status based on the field without text and return a success message
          this.setStatus(field, null, 'success');
          return true;
        }
      }
    }
  }

  setStatus(field, errorMessage, status) {
    const errorMessageElement =
      field.parentElement.querySelector('.errorMessage');
    errorMessageElement.innerText = errorMessage;
    if (status === 'error') {
      errorMessageElement.classList.add('active');
    } else if (status === 'doesNotExist') {
      alert(errorMessage);
    } else {
      errorMessageElement.classList.remove('active');
    }
  }

  checkIfUserExists() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const users = JSON.parse(localStorage.getItem('users'));
    if (
      users.filter(
        (user) =>
          user.username === username.value && user.password === password.value
      ).length === 0
    ) {
      this.setStatus(
        username,
        'User does not exist. Please try again or create an account.',
        'doesNotExist'
      );
      username.value = '';
      password.value = '';
      return false;
    } else {
      return true;
    }
  }
}

if (localStorage.getItem('auth') === 'true') {
  window.location.replace('/landing.html');
} else {
  const loginForm = document.querySelector('.login');
  loginForm
    ? (loginValidator = new Login(loginForm, 'username', 'password'))
    : null; // additional fields can be added here
}
