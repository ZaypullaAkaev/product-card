const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showWeather('Makhachkala', 32);

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(400000000);

checkSpeed(200000000);

checkSpeed(299792458);

const nameProduct = 'FC Barcelona';
const priceProduct = 6650000000;

function checkBalance(balance) {
  if (balance >= priceProduct) {
    console.log(`${nameProduct} приобретен. Спасибо за покупку!`);
  } else {
    const insufficientFunds = priceProduct - balance;
    console.log(`Вам не хватает ${insufficientFunds} $, пополните баланс`);
  }
}

checkBalance(8000000000);

checkBalance(1650000000);

function discriminant(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  return d;
}

console.log(discriminant(-8, 30, 11.5));

const homework7Test = 57;

function checkHomework7Test(score) {
  if (score >= 50 && score <= 57) {
    console.log('Материал усвоен отлично! Двигайтесь дальше!');
  } else if (score >= 35 && score < 50) {
    console.log('Материал усвоен хорошо, но есть над чем поработать.');
  } else {
    console.log('Результат удовлетворительный. Необходимо пересмотреть лекцию.');
  }
}

checkHomework7Test(51);

checkHomework7Test(40);

checkHomework7Test(30);

const user = {name: 'Zaypulla', age: 26, city: 'Makhachkala', country: 'Russia'};

console.log(user);

let isOnline = true;

console.log(isOnline);
