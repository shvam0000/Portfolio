//Form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

//showError
showError = (input, message) => {
  const formcontroller = input.parentElement;
  formcontroller.className = 'form-controller error';
  const small = formcontroller.querySelector('small');
  small.innerText = message;
};
//showSuccess
showSuccess = (input) => {
  const formcontroller = input.parentElement;
  formcontroller.className = 'form-controller success';
};

//getFieldName
getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

//checkRequired
checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is a required field`);
    } else {
      showSuccess(input);
    }
  });
};

//Check Email
checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Invalid Email');
  }
};

//checkNumber
checkNumber = (input) => {
  const rNo = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  if (rNo.test(input.value.trim())) {
    showSuccess(input);
  } else if (input.value.length != 10) {
    showError(input, 'Invalid Number');
  } else {
    showError(input, 'Invalid Number');
  }
};

//eventlisteners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([name, email, phone, message]);
  checkEmail(email);
  checkNumber(phone);
});
