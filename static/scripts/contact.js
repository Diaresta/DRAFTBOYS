const SUBMIT_BUTTON = document.getElementById('contact-submit');
const FIRST_NAME = document.getElementById('first-name');
const LAST_NAME = document.getElementById('last-name');
const EMAIL = document.getElementById('form-email');
const MESSAGE = document.getElementById('form-message');
const API_ALERT = document.getElementById('contact-alert');

SUBMIT_BUTTON.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    FIRST_NAME.value !== '' &&
    LAST_NAME.value !== '' &&
    EMAIL.value !== '' &&
    MESSAGE.value !== ''
  ) {
    messageSent();
    sendMessage();
    buttonEnable();
  } else {
    messageAlert('Please fill all form info', 'red');
    return;
  }
});

const sendMessage = () => {
  axios
    .post('https://draftboys.herokuapp.com/api/contact/create', {
      firstName: FIRST_NAME.value,
      lastName: LAST_NAME.value,
      email: EMAIL.value,
      message: MESSAGE.value,
      contactDate: new Date().toLocaleDateString(),
    })
    .then((response) => {
      messageAlert('Message Submitted!', 'green');
    })
    .catch((err) => {
      if (!err.response.data.error) {
        console.error(err.response.data);
        if (err.response.data.errors.email) {
          messageAlert('Please enter a valid email, 10- 40 characters', 'red');
        } else {
          return;
        }
      } else {
        console.error(err.response.data.error);
        messageAlert(err.response.data.error, 'red');
      }
    });
};

const messageSent = () => {
  SUBMIT_BUTTON.value = 'Message Sent!';
};

const messageAlert = (res, color) => {
  API_ALERT.innerHTML = res;
  API_ALERT.style.display = 'initial';
  API_ALERT.style.opacity = 1;
  API_ALERT.style.backgroundColor = color;

  setTimeout(() => {
    API_ALERT.style.transition = '2s';
    API_ALERT.style.opacity = 0;
  }, 750);

  setTimeout(() => {
    API_ALERT.style.display = 'none';
  }, 1500);
};

const buttonEnable = () => {
  SUBMIT_BUTTON.disabled = true;

  setTimeout(() => {
    SUBMIT_BUTTON.disabled = false;
  }, 3500);
};
