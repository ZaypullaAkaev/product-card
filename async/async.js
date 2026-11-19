const deleteAllBtn = document.querySelector('.btn-delete-cards');
const getAllBtn = document.querySelector('.btn-get-cards');
const messageBox = document.querySelector('.message');
const statusMessage = document.getElementById('status-message');
const cardsContainer = document.querySelector('.cards-container');

const STORAGE_KEY = 'users';

const storedUsers = localStorage.getItem(STORAGE_KEY);
let users = storedUsers ? JSON.parse(storedUsers) : [];

function showMessage(text, isCenter = false) {
  statusMessage.textContent = text;
  if (isCenter) {
    messageBox.classList.add('center');
  } else {
    messageBox.classList.remove('center');
  }
}

function renderUsers(usersList) {
  cardsContainer.innerHTML = '';

  usersList.forEach((user) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>id: ${user.id}</p>
      <p>email: ${user.email}</p>
      <p>age: ${user.age}</p>
      <p>universe: ${user.universe}</p>
      <p>weapon: ${user.weapon}</p>
      <button class="btn-delete-card">Удалить карточку</button>
    `;

    const deleteBtn = card.querySelector('.btn-delete-card');
    deleteBtn.addEventListener('click', () => {
      deleteUser(user.id);
    });

    cardsContainer.appendChild(card);
  });
}

async function fetchUsers() {
  cardsContainer.innerHTML = '';
  showMessage('Please wait! Данные загружаются...', true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('users.json');

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();
    users = data.users;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    showMessage('');
    renderUsers(users);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    showMessage('Ошибка при загрузке данных', true);
  }
}

function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  renderUsers(users);

  if (users.length === 0) {
    showMessage('Все карточки удалены');
  } else {
    showMessage('');
  }
}

deleteAllBtn.addEventListener('click', () => {
  if (users.length === 0) {
    showMessage('Карточек и так нет!');
    return;
  }

  users = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  renderUsers(users);
  showMessage('Все карточки удалены');
});

getAllBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error('Не удалось проверить базу данных');
    }
    const data = await response.json();

    if (users.length === data.users.length) {
      showMessage('Все персонажи уже отображены на странице!', false);
      return;
    }

    await fetchUsers();
  } catch (error) {
    console.error(error);
    showMessage('Ошибка при загрузке данных', true);
  }
});

if (storedUsers !== null && users.length > 0) {
  renderUsers(users);
} else {
  fetchUsers();
}
