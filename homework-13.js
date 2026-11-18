class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error('У нас брат только свои напитки, других Drink нам ненадо');
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
    this.sugar = 0;
  }

  getInfoDrink() {
    return `Напиток: ${this.name} (${this.size}), цена: ${this.price}₽, температура: ${this.#temperature}`;
  }

  getTempDrink() {
    return this.#temperature;
  }

  setTempDrink(temp) {
    if (temp < -5 || temp > 100) {
      console.error('Недопустимая температура напитка!');
      return;
    }
    this.#temperature = temp;
  }

  #prepareDrink() {
    console.log(`[Кухня]: Готовиться напиток: ${this.name}...`);
  }

  serveDrink() {
    this.#prepareDrink();
    const currentTemp = this.getTempDrink();
    this.setTempDrink(currentTemp - 3);
    console.log(`${this.name} подан! Температура напитка: ${this.getTempDrink()}°C`);
  }

  addSugar(spoons = 1) {
    if (spoons < 0 || spoons > 5) {
      console.error('Недопустимое количество ложек сахара');
      return;
    }
    this.sugar += spoons;
    console.log(`В ${this.name} добавлено ${spoons} ложек сахара.`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, bean, milk, roast) {
    super(name, size, price, temperature);
    this.beanType = bean;
    this.milkType = milk;
    this.roastLevel = roast;
    this.syrup = [];
  }

  changeMilk(newMilkType) {
    this.milkType = newMilkType;
    console.log(`Молоко изменено на: ${this.milkType}`);
  }

  addSyrup(syrup) {
    this.syrup.push(syrup);
    this.price += 50;
    console.log(`Добавлен сироп: ${syrup}`);
  }

  serveDrink() {
    console.log(`Перемалываем зерна ${this.beanType} (обжарка: ${this.roastLevel})...`);
    if (this.milkType !== 'none') {
      console.log(`Взбиваем молоко (${this.milkType})...`);
    }
    super.serveDrink();
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, tea, time) {
    super(name, size, price, temperature);
    this.teaType = tea;
    this.brewTime = time;
    this.hasLemon = false;
  }

  serveDrink() {
    console.log(`Завариваем ${this.teaType} чай в течение ${this.brewTime} мин...`);
    super.serveDrink();
  }

  addLemon() {
    this.hasLemon = true;
    this.price += 15;
    console.log(`В ${this.name} добавлен лимон.`);
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, citrus, spark) {
    super(name, size, price, temperature);
    this.citrusBase = citrus;
    this.sparklingLevel = spark;
    this.hasIce = false;
  }

  addIce() {
    this.hasIce = true;
    this.price += 10;
    this.setTempDrink(this.getTempDrink() - 5);
    console.log(`В ${this.name} добавлен лед. Напиток охладился до ${this.getTempDrink()}°C.`);
  }

  serveDrink() {
    console.log(`Разминаем ${this.citrusBase} и заливаем газированной водой (${this.sparklingLevel})...`);
    super.serveDrink();
  }
}

class Smoothie extends Drink {
  constructor(name, size, price, temperature, fruit, liquid) {
    super(name, size, price, temperature);
    this.fruitBase = fruit;
    this.liquidBase = liquid;
    this.hasProtein = false;
  }

  addSugar() {
    console.log(`В смузи ${this.name} сахар не добавляется!`);
  }

  addProteinScoop() {
    this.hasProtein = true;
    this.price += 80;
    console.log(`В ${this.name} добавлен протеин.`);
  }

  serveDrink() {
    console.log(`Смешиваем ${this.fruitBase} с ${this.liquidBase} в блендере...`);
    super.serveDrink();
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfoCafe() {
    return `Добро пожаловать в кафе ${this.name} (г. ${this.location})!`;
  }

  orderDrink(drink) {
    console.log(`Напиток ${drink.name} заказан. Скоро его вам подадут!`);
    drink.serveDrink();
  }
}

const cafe = new Cafe('Бриз', 'Каспийск');
// console.log(cafe.getInfoCafe());

const coffee = new Coffee('Айс-Латте', 400, 300, 7, 'Арабика Эфиопия', 'Овсяное молоко', 'Средняя');

// coffee.addSyrup('Карамель');
// coffee.addSugar(2);
// cafe.orderDrink(coffee);
// console.log(coffee.getInfoDrink());
