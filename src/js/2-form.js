let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  emailInput.value = '';
  messageInput.value = '';
});
const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedState) {
  emailInput.value = savedState.email;
  messageInput.value = savedState.message;
  formData.email = savedState.email;
  formData.message = savedState.message;
}
