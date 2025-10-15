class Stock {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
    console.log(`${observer.name} بدأ يتابع سهم ${this.name}`);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((sub) => sub !== observer);
    console.log(`${observer.name} بطل يتابع سهم ${this.name}`);
  }

  setPrice(newPrice) {
    this.price = newPrice;
    console.log(`📈 سعر سهم ${this.name} بقى ${this.price}$`);
    this.notify();
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(stock) {
    console.log(`🔔 ${this.name} تم تحديث سعر ${stock.name}: ${stock.price}$`);
  }
}

const stock = new Stock("Apple", 150);

const salim = new User("sleem");
const nour = new User("Ahmed");
const omar = new User("Mohamed");

stock.subscribe(sleem);
stock.subscribe(Ahmed);

stock.setPrice(155);

stock.subscribe(Mohamed);

stock.setPrice(160);

stock.unsubscribe(Ahmed);

stock.setPrice(170);
