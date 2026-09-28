// Gotham City
class GothamCitizen {
  constructor(name, outfit) {
    this.name = name;
    this.outfit = outfit;
  }

  dramaticEntrance() {
    console.log(`Из зловещего готэмского тумана резко появляется ${this.name} в костюме: ${this.outfit}!`);
  }

  deliverMonologue(text) {
    console.log(`[${this.name} встает на край крыши и пафосно лечит]: '${text}!'`);
  }
}

class Batman extends GothamCitizen {
  constructor() {
    const batmanName = 'Бэтмен (Брюс Уэйн)';
    const batmanOutfit = 'Черные бэт-шмотки с плащом стиля угольной летучей мышки';
    super(batmanName, batmanOutfit);
    this.stealthLevel = 90;
  }

  hideInShadows() {
    console.log(`Бэтмен бесшумно пикирует и растворяется в кромешной тьме. Скрытность: ${this.stealthLevel}%`);
  }

  callAlfred() {
    console.log('Бэтмен: "Альфред, подготовь бэтмобиль и завари чай каркаде. Сегодня была суета."');
  }
}

class Joker extends GothamCitizen {
  constructor() {
    const jokerName = 'Джокер';
    const jokerOutfit = 'Фиолетовый театральный костюм и жуткий клоунский грим';
    super(jokerName, jokerOutfit);
    this.insanityLevel = 90;
  }

  createChaos() {
    console.log('Джокер дико хохочет и нажимает кнопку детонатора, устраивая гробовой бабах!');
  }

  tellJoke() {
    console.log('Джокер: "Заменил кардиостимулятор мэра детонатором. Его сердце бьется в безумном ритме"');
  }
}

class TwoFace extends GothamCitizen {
  constructor() {
    const twoFaceName = 'Двуликий (Харви Дент)';
    const twoFaceOutfit = 'Строгий деловой костюм с уникальной 50% скидкой от пожарной службы Готэма';
    super(twoFaceName, twoFaceOutfit);
    this.luckyCoin = {heads: 'живи дальше', tails: 'сдохни прямо сейчас'};
  }

  bribingJudge() {
    console.log('Харви подкупил судью. 50% взятки - наличными, 50% - динамитом');
  }

  flipCoin() {
    console.log('Двуликий подбрасывает монетку и решает судьбу судьи:');
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    if (result === 'heads') {
      console.log('живи дальше, но твоя мантия теперь пойдет на саван!');
    } else {
      console.log('твой жизненный путь объявляю официально завершенным. Очищение Готэма началось!');
    }
  }
}

const batman = new Batman();
const joker = new Joker();
const harvey = new TwoFace();

batman.dramaticEntrance();
joker.dramaticEntrance();
harvey.dramaticEntrance();

batman.deliverMonologue('Вернуть порядок в этом прогнившем городе легче, чем понять, как надо делать дз');
joker.deliverMonologue('Навести суету в Готэме намного проще чем сделать мучительно-сложное дз');
harvey.deliverMonologue('Слушай меня, Готэм: наши дз наполовину сложные, наполовину труднодогоняемые');

batman.hideInShadows();
batman.callAlfred();

joker.createChaos();
joker.tellJoke();

harvey.bribingJudge();
harvey.flipCoin();
