
const emailInput = document.querySelector('#email');
const emailFeedback = document.querySelector('#email-feedback');

emailInput.addEventListener('input', function() {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity('Email is required');
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    emailInput.setCustomValidity('');
  }
  
  emailFeedback.innerText = emailInput.validationMessage;
  
  if (emailInput.validity.valid) {
    emailFeedback.style.display = "block!impotant";
    emailFeedback.style.display = "none";
  } else {  
    emailFeedback.style.display = "none";
    emailFeedback.style.display = "block";
  }
});

const passwordInput = document.querySelector('#password');
const passwordFeedback = document.querySelector('#password-feedback');
const passwordRequiredFeedback = document.querySelector('#password-required-feedback');

passwordInput.addEventListener('input', function(event) {
  if (passwordInput.validity.valid) {
    passwordFeedback.classList.remove('d-block');
    passwordFeedback.classList.add('d-none');
    passwordRequiredFeedback.classList.remove('d-block');
    passwordRequiredFeedback.classList.add('d-none');
  } else if (passwordInput.value.length === 0) {
    passwordFeedback.classList.remove('d-block');
    passwordFeedback.classList.add('d-none');
    passwordRequiredFeedback.classList.remove('d-none');
    passwordRequiredFeedback.classList.add('d-block');
  } else {
    passwordFeedback.classList.remove('d-none');
    passwordFeedback.classList.add('d-block');
    passwordRequiredFeedback.classList.remove('d-block');
    passwordRequiredFeedback.classList.add('d-none');
  }
});

