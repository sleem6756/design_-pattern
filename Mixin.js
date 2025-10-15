const canMove = {
  move() {
    console.log(`${this.name} is moving...`);
  },
};

const canAttack = {
  attack() {
    console.log(`${this.name} attacks the enemy!`);
  },
};

class Hero {
  constructor(name) {
    this.name = name;
  }
}

class Monster {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Hero.prototype, canMove, canAttack);
Object.assign(Monster.prototype, canMove, canAttack);

const hero1 = new Hero("Sleem");
hero1.move();
hero1.attack();

const monster1 = new Monster("Dragon");
monster1.move();
monster1.attack();
