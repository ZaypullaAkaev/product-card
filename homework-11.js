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

const modal = document.getElementById('registrationModal');
const openBtn = document.getElementById('registrationBtn');
const closeBtn = document.getElementById('closeModalBtn');

const registrForm = document.querySelector('.registration-form');

openBtn.addEventListener('click', function () {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('modal-showed');
});

registrForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const pass = document.getElementById('userPassword').value;
  const confirmPass = document.getElementById('userConfirmPassword').value;

  if (!registrForm.checkValidity() || pass !== confirmPass) {
    console.log('Регистрация отклонена!');
    alert('Ошибка! Проверьте правильность заполнения полей.');
    return;
  }

  const newUser = {
    userName: document.getElementById('userName').value,
    userSurname: document.getElementById('userSurname').value,
    userAge: document.getElementById('userAge').value,
    userBirthday: document.getElementById('userBirthday').value,
    userLogin: document.getElementById('userLogin').value,
    createOn: new Date(),
  };

  user = newUser;

  console.log('Вы зарегистрировались!', user);

  modal.classList.remove('modal-showed');

  registrForm.reset();
});
