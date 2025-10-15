class NoDiscount {
  getDiscount(price) {
    return price;
  }
}

class PercentageDiscount {
  getDiscount(price) {
    return price * 0.9;
  }
}

class FixedDiscount {
  getDiscount(price) {
    return price - 20;
  }
}

class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  setDiscountStrategy(strategy) {
    this.discountStrategy = strategy;
  }

  calculateTotal(price) {
    return this.discountStrategy.getDiscount(price);
  }
}

const cart = new ShoppingCart(new NoDiscount());
console.log(cart.calculateTotal(200));

cart.setDiscountStrategy(new PercentageDiscount());
console.log(cart.calculateTotal(200));

cart.setDiscountStrategy(new FixedDiscount());
console.log(cart.calculateTotal(200));
