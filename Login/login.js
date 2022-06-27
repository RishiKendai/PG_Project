const userName = document.querySelector('[name="userName"]');
const password = document.querySelector('[name="password"]');
const inputs = document.querySelectorAll('.text_div_input');
const signinButton = document.querySelector('.form_footer_sign_in');
const eyeOff = document.querySelector("[name='eye-off-outline']");
const eyeOn = document.querySelector("[name='eye-outline']");

let mssge = 'Sorry, your credentials was incorrect. Please try again';

// password show and hide
eyeOff.addEventListener('click', () => {
  password.setAttribute('type', 'text');
  eyeOff.classList.add('hide');
  eyeOn.classList.add('show');
});
eyeOn.addEventListener('click', () => {
  password.setAttribute('type', 'password');
  eyeOff.classList.remove('hide');
  eyeOn.classList.remove('show');
});

// Enable Sign-in button
inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    if (userName.value === '' || password.value === '') {
      signinButton.setAttribute('disabled', 'true');
    } else {
      signinButton.removeAttribute('disabled', 'false');
    }
  });
});

function validateUserName() {
  const user = userName.value;
  if (user.length < 3) {
    displayError('User name must contain minimum 3 characters');
    return false;
  }
  if (user.length > 20) {
    displayError('User name is too long');
    return false;
  }
  return true;
}

function validatePassword() {
  const pass = password.value;
  if (pass.length < 8) {
    displayError('Password must contain minimum 8 characters');
    return false;
  }
  if (pass.length > 25) {
    displayError('Password is too long');
    return false;
  }
  return true;
}

// Validate Inputs
signinButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateUserName()) if (validatePassword()) alert('signed in');
});

// Display Error Message
function displayError(msge) {
  document.querySelector('.error_div').textContent = msge;
}
