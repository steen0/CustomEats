class Login {
  constructor(form, ...fields) {
    this.form = form;

    // fieldNames
    this.fields = fields;

    // validate fieldsn and either display errors or allow redirect
    this.validateSubmission();
  }

  validateSubmission() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent default submit\

      let error = false;

      this.fields.forEach((fieldName) => {
        const field = document.getElementById(fieldName);
        if (this.validateField(field) == false) {
          error = true;
        }
      });

      if (error == false) {
        // && this.checkIfUserExists()
        localStorage.setItem('auth', true);
        window.location.href = 'landing.html';
      }
    });
  }

  validateField(field) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // check if no spaces for field, else check specific criteria per field
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
    } else {
      errorMessageElement.classList.remove('active');
    }
  }

  checkIfUserExists() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const users = JSON.parse(localStorage.getItem('users'));
    users.filter(
      (user) =>
        user.username === username.value && user.password === password.value
    ).length === 0;
  }
}
// initialize login
const loginForm = document.querySelector('.login');
if (loginForm) {
  const loginValidator = new Login(loginForm, 'username', 'password'); // additional fields can be added here
}
