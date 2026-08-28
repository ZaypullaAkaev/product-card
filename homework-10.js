import {products} from './products.js';

console.log(products);

const productTemplate = document.querySelector('.product-template');
const productList = document.querySelector('.products');

function createCard(product) {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.card__image').src = product.image;
  productClone.querySelector('.card__image').alt = product.name;
  productClone.querySelector('.card__category').textContent = product.category;
  productClone.querySelector('.card__name').textContent = product.name;
  productClone.querySelector('.card__description p').textContent = product.description;
  productClone.querySelector('.compound__list').innerHTML = product.compound.map((element) => `<li>${element}</li>`).join('');
  productClone.querySelector('.card__price span').innerHTML = product.price;
  return productClone;
}

function getCardsCount() {
  while (true) {
    const userInput = Number(prompt('Сколько карточек отобразить? От 1 до 5'));
    if (userInput === 0) {
      return 0;
    } else if (!isNaN(userInput) && userInput >= 1 && userInput <= 5) {
      return userInput;
    } else {
      alert('Что попало не прокатит! Будь внимательней! Введи ЦЕЛОЕ число от 1 до 5');
    }
  }
}

function renderProducts(productsArray, count) {
  productList.innerHTML = '';
  const slicedProducts = productsArray.slice(0, count);
  slicedProducts.forEach((product) => {
    const fullCard = createCard(product);
    productList.appendChild(fullCard);
  });
}

function init() {
  const countToDisplay = getCardsCount();
  if (countToDisplay === 0) {
    return;
  }
  renderProducts(products, countToDisplay);
}

init();

const showByMethodReduce = products.reduce((acc, product) => {
  const partProducts = {[product.name]: product.description};
  acc.push(partProducts);
  return acc;
}, []);

console.log(showByMethodReduce);
