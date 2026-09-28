// Gotham City
class GothamCitizen {
  constructor(name, outfit) {
    this.name = name;
    this.outfit = outfit;
  }

  dramaticEntrance() {
    return `Из зловещего готэмского тумана резко появляется ${this.name} в костюме: ${this.outfit}!`;
  }

  deliverMonologue(text) {
    return `[${this.name} встает на край крыши и пафосно лечит]: '${text}!'`;
  }
}

// class Batman extends GothamCitizen {
//   constructor() {
//     super('Бэтмен (Брюс Уэйн)', 'Черныe бэт-шмотки с плащом стиля угольной летучей мыши');
//     this.stealthLevel = 90;
//   }

//   hideInShadows() {
//     return `${this.name} бесшумно пикирует и растворяется в кромешной тьме. Скрытность: ${this.stealthLevel}%`;
//   }

//   callAlfred() {
//     return `${this.name}: "Альфред, подготовь бэтмобиль и завари чай каркаде. Сегодня была суета."`;
//   }
// }

class Joker extends GothamCitizen {
  constructor() {
    super('Джокер', 'Фиолетовый театральный костюм и жуткий клоунский грим');
    this.insanityLevel = 90;
  }

  createChaos() {
    return `${this.name} дико хохочет и нажимает кнопку детонатора, устраивая гробовой бабах!`;
  }

  tellJoke() {
    return `${this.name}: "Заменил кардиостимулятор мэра детонатором. Его сердце бьется в безумном ритме"`;
  }
}

class TwoFace extends GothamCitizen {
  constructor() {
    super('Двуликий (Харви Дент)', 'Строгий деловой костюм с уникальной 50% скидкой от пожарной службы Готэма');
    this.luckyCoin = {heads: 'живи дальше', tails: 'сдохни прямо сейчас'};
  }

  bribingJudge() {
    return `${this.name} подкупил судью. 50% взятки - наличными, 50% - динамитом`;
  }

  flipCoin() {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    let coinPhrase = '';
    if (result === 'heads') {
      coinPhrase = 'живи дальше, но твоя мантия теперь пойдет на саван!';
    } else {
      coinPhrase = 'твой жизненный путь объявляю официально завершенным. Очищение Готэма началось!';
    }
    return `${this.name} подбрасывает монетку и решает судьбу судьи: выпало [${this.luckyCoin[result]}]. Исход: '${coinPhrase}'`;
  }
}

const batman = new Batman();
const joker = new Joker();
const harvey = new TwoFace();

console.log(batman.dramaticEntrance());
console.log(joker.dramaticEntrance());
console.log(harvey.dramaticEntrance());

console.log(batman.deliverMonologue('Вернуть порядок в этом прогнившем городе легче, чем понять, как надо делать дз'));
console.log(joker.deliverMonologue('Навести суету в Готэме намного проще чем сделать мучительно-сложное дз'));
console.log(harvey.deliverMonologue('Слушай меня, Готэм: наши дз наполовину сложные, наполовину труднодогоняемые'));

console.log(batman.hideInShadows());
console.log(batman.callAlfred());

console.log(joker.createChaos());
console.log(joker.tellJoke());

console.log(harvey.bribingJudge());
console.log(harvey.flipCoin());
