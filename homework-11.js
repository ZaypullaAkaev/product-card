import {Modal} from './modal.js';
import {Form} from './form.js';

const footerForm = document.querySelector('.footer-form');
footerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = document.querySelector('#user-email').value;
  const result = {
    email: emailValue,
  };
  console.log(result);
  footerForm.reset();
});

let user = null;

const registrationModal = new Modal('registrationModal');
const registrationForm = new Form('registrationForm');

const openBtn = document.getElementById('registrationBtn');

openBtn.addEventListener('click', function () {
  registrationModal.open();
});

if (registrationForm.form) {
  registrationForm.form.addEventListener('submit', function (event) {
    event.preventDefault();
    const values = registrationForm.getValues();
    const isPasswordMatch = values.userPassword === values.userConfirmPassword;

    if (!registrationForm.isValid() || !isPasswordMatch) {
      console.log('Регистрация отклонена!');
      alert('Ошибка! Проверьте правильность заполнения полей.');
      return;
    }

    user = {
      userName: values.userName,
      userSurname: values.userSurname,
      userAge: values.userAge,
      userBirthday: values.userBirthday,
      userLogin: values.userLogin,
      createOn: new Date(),
    };

    console.log('Вы зарегистрировались!', user);

    registrationModal.close();

    registrationForm.reset();
  });
}
