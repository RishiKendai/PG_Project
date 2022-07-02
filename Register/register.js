const userName = document.querySelector('[name="userName"]');
const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirmPassword"]');
const mailId = document.querySelector('[name="mail_id"]');
const mobileNumber = document.querySelector('[name="Mobile_number"]');
const inputs = document.querySelectorAll('.text_div_input');
const dropdownText = document.querySelector('.dropdownText');
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
  if (validateUserName())
    if (validatePassword())
      if (validateConfirmPassword())
        if (validateDropDown())
          if (validateEmail())
            if (validateMobileNumber()) alert('Registered Successfully');
});
// Validate Username
function validateUserName() {
  if (userName.value.length < 3)
    return displayError(
      userName,
      'User name must contain minimum 3 characters'
    );
  if (userName.value.length > 20)
    return displayError(userName, 'User name is too long');
  userName.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}
// Validate Password
function validatePassword() {
  if (password.value.length < 8)
    return displayError(password, 'Password must contain minimum 8 characters');
  if (password.value.length > 25)
    return displayError(password, 'Password is too long');
  password.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}
// Validate ConfirmPassword
function validateConfirmPassword() {
  if (password.value !== confirmPassword.value)
    return displayError(confirmPassword, "Password Doesn't Match");
  confirmPassword.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}

// Validate Dropdown
function validateDropDown() {
  if (dropdownText.value === '')
    return displayError(dropdownText, 'Select your Department');
  dropdownText.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}

// Validate Email
function validateEmail() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailId.value))
    return displayError(mailId, 'Enter Valid Email ID');
  mailId.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}
// Validate Mobile Number
function validateMobileNumber() {
  if (!mobileNumber.value.match(/^\d{10}$/))
    return displayError(mobileNumber, 'Enter Valid Mobile Number');
  mobileNumber.style.borderColor = 'rgb(0 0 255 /22%)';
  document.querySelector('.error_div').textContent = '';
  return true;
}

// Display Error Message
function displayError(currentBox, msge) {
  currentBox.style.borderColor = 'rgb(255 0 0 / 35%)';
  currentBox.focus();
  document.querySelector('.error_div').textContent = msge;
  return false;
}

// Dropdown Code
function calculateHeight(drops) {
  if (!drops.classList.contains('show')) return;
  const dd = document.querySelector('.show').offsetHeight;
  const ddo = document.querySelector('.show').querySelector('.options_list');
  const ddt = document.querySelector('.show').getBoundingClientRect().top;
  dd + ddo.offsetHeight + ddt > window.innerHeight
    ? (ddo.style.bottom = '70px')
    : (ddo.style.top = '70px');
}
document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('option') ||
    e.target.className.includes('dropdownText', 'option')
  )
    return;
  dropDown.classList.remove('show');
});
const dropDown = document.querySelector('.dropdown');
dropDown.addEventListener('click', () => {
  dropDown.classList.toggle('show');
  calculateHeight(dropDown);
});
// Set Value
function value(value, field_name) {
  const options = document.querySelectorAll('.option');
  options.forEach((option) => option.classList.remove('active'));
  document.querySelector(`.${field_name}`).value = value.textContent;
  value.classList.add('active');
}
