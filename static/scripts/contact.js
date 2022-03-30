const SUBMIT_BUTTON = document.getElementById('contact-submit');
const FIRST_NAME = document.getElementById('first-name');
const LAST_NAME = document.getElementById('last-name');
const EMAIL = document.getElementById('form-email');
const MESSAGE = document.getElementById('form-message');

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
  } else {
    return;
  }
});

const sendMessage = () => {
  axios
    .post('http://localhost:8000/api/contact/create', {
      firstName: FIRST_NAME.value,
      lastName: LAST_NAME.value,
      email: EMAIL.value,
      message: MESSAGE.value,
      contactDate: new Date().toLocaleDateString(),
    })
    .then((response) => {
      // Add success alert
      console.log('Message Submitted');
    })
    .catch((err) => {
      // Add failure alert
      console.error(err);
    });
};

const messageSent = () => {
  SUBMIT_BUTTON.value = 'Message Sent!';
};
