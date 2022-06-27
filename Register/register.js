const userName = document.querySelector('[name="userName"]');
const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirmPassword"]');
const mailId = document.querySelector('[name="mail_id"]');
const mobileNumber = document.querySelector('[name="Mobile_number"]');
const inputs = document.querySelectorAll('.text_div_input');

const signUpButton = document.querySelector('.form_footer_sign_up');
const eyeOff = document.querySelectorAll("[name='eye-off-outline']");
const eyeOn = document.querySelectorAll("[name='eye-outline']");

// password show and hide
eyeOff.forEach((eye) => {
  eye.addEventListener('click', (e) => {
    const eOn = eye.nextElementSibling;
    const firstChild = eye.parentNode.firstElementChild;
    firstChild.setAttribute('type', 'text');
    eye.classList.add('hide');
    eOn.classList.add('show');
  });
});
eyeOn.forEach((eye) => {
  eye.addEventListener('click', (e) => {
    const eOff = eye.previousElementSibling;
    const firstChild = eye.parentNode.firstElementChild;
    firstChild.setAttribute('type', 'password');
    eOff.classList.remove('hide');
    eye.classList.remove('show');
  });
});
// Enable Sign up button
inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    if (
      userName.value === '' ||
      password.value === '' ||
      password.value === '' ||
      confirmPassword.value === '' ||
      mailId.value === '' ||
      mobileNumber.value === ''
    ) {
      signUpButton.setAttribute('disabled', 'true');
    } else {
      signUpButton.removeAttribute('disabled', 'false');
    }
  });
});
// Validate Register form
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
});
// Validate Username
function validateUserName() {
  if (userName.value.length < 3)
    return displayError('User name must contain minimum 3 characters');
  if (userName.value.length > 20) return displayError('User name is too long');
  return true;
}
// Validate Password
function validatePassword() {
  if (password.value.length < 8)
    return displayError('Password must contain minimum 8 characters');
  if (password.value.length > 25) return displayError('Password is too long');
  return true;
}
// Validate ConfirmPassword
function validateConfirmPassword() {
  return password.value === confirmPassword.value
    ? true
    : displayError("Password Doesn't Match");
}

// Display Error Message
function displayError(msge) {
  document.querySelector('.error_div').textContent = msge;
  return false;
}
