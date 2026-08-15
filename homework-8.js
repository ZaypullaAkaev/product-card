// 3 - created my user info object
const myUserInfo = {
  name: 'Zaypulla',
  age: 26,
  city: 'Makhachkala',
  country: 'Russia',
  maritalStatus: 'married',
  education: 'higher legal',
  nickName: 'BaD News',
  email: 'badnews717@mail.ru',
  job: 'woodworker',
};

console.log(myUserInfo);

// 4- created car data object
const carData = {
  make: 'Mercedes-Benz',
  model: 'E500(W124)',
  yearOfManufacture: 1992,
  color: 'black',
  engine: 'V8, naturally aspirated, M119',
  power: '326 hp',
  torque: '480 Nm',
  typeOfTransmission: '5-speed automatic',
  drive: 'rear',
};

carData.owner = myUserInfo;

console.log(carData);

// 5 - added function topSpeed
function checkTopSpeed(carData) {
  if ('topSpeed' in carData) {
    return;
  } else {
    carData.topSpeed = '250 km/h (electronically limited)';
  }
}

checkTopSpeed(carData);

// 6 - added the function showProperty
function showProperty(carData, any) {
  console.log(carData[any]);
}

showProperty(carData, 'make');

// 7 - created arrays with product names
const winnersLC = ['Real Madrid', 'PSG', 'Chelsea', 'Manchester City', 'Liverpool'];
const mostVenomousSnakes = ['Inland taipan', 'Belchers sea snake', 'Black mamba', 'King cobra'];

console.log(winnersLC);
console.log(mostVenomousSnakes);

// 8 - created array consisting of objects
const samsung = {
  model: 'Galaxy S26 Ultra',
  screen: '6.9 AMOLED, 120Hz',
  processor: 'Snapdragon 8 Elite',
  rearCamera: '200 + 50 + 10 + 12 MP',
  battery: 5000,
  charging: 45,
};

const iPhone = {
  model: '17 Pro Max',
  screen: '6.9 OLED, 120Hz',
  processor: 'Apple A19 Pro',
  rearCamera: '48 + 48 + 48 Мп',
  battery: 4800,
  charging: 40,
};

const vivo = {
  model: 'iQOO 15 Ultra',
  screen: '6.82 AMOLED, 144Hz',
  processor: 'Snapdragon 8 Elite',
  rearCamera: '50 + 50 + 200 MP',
  battery: 6000,
  charging: 100,
};

const honor = {
  model: 'Magic8 Pro',
  screen: '6.8 OLED, 120Hz',
  processor: 'Snapdragon 8 Elite',
  rearCamera: '50 + 50 + 200 MP',
  battery: 5500,
  charging: 80,
};

const bestPhones = [samsung, iPhone, vivo, honor];

console.log(bestPhones);

// 9 - created a specific array
const chinesePhones = [vivo, honor];
const allPhones = [...bestPhones, ...chinesePhones];

console.log(allPhones);

// 10 - created with the array method — map
const newMethod = allPhones.map(function isTopBattery(allPhones) {
  return {
    ...allPhones,
    isTopBattery: allPhones.battery > 5400,
  };
});
