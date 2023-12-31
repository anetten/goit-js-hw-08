import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function handleInputChange() {
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  const formData = {
    email: emailValue,
    message: messageValue,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

emailInput.addEventListener('input', throttle(handleInputChange, 500));
messageInput.addEventListener('input', handleInputChange);

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  emailInput.value = parsedData.email;
  messageInput.value = parsedData.message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
});
