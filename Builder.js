class Car {
  constructor(brand, model, color, year, automatic) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.automatic = automatic;
  }

  showDetails() {
    console.log(`${this.brand} ${this.model} (${this.year}), Color: ${this.color}, Automatic: ${this.automatic}`);
  }
}

class CarBuilder {
  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setAutomatic(automatic) {
    this.automatic = automatic;
    return this;
  }

  build() {
    return new Car(this.brand, this.model, this.color, this.year, this.automatic);
  }
}

const car1 = new CarBuilder()
  .setBrand("Toyota")
  .setModel("Corolla")
  .setColor("Black")
  .setYear(2022)
  .setAutomatic(true)
  .build();

console.log("Car created by Sleem:");
car1.showDetails();
