class Fighter {
  constructor({ name, damage, hp, strength, agility }) {
    this.myName = name;
    this.myDamage = damage;
    this.myHp = hp;
    this.myStrength = strength;
    this.myAgility = agility;
    this.maxHp = hp;
    this.loss = 0;
    this.win = 0;
  }
  getName() {
    return this.myName;
  }
  getDamage() {
    return this.myDamage;
  }
  getStrength() {
    return this.myStrength;
  }
  getAgility() {
    return this.myAgility;
  }
  getHealth() {
    return this.myHp;
  }
  attack(Fighter) {
    let multiply = 100;
    let chance = multiply - (Fighter.getStrength() + Fighter.getAgility());
    let random = Math.floor(Math.random() * multiply);
    if (random>chance) {
      Fighter.dealDamage(this.myDamage);
      console.log(
        `${this.myName} makes ${this.getDamage()} damage to ${Fighter.myName}`
      );
    } else {
      console.log(`${this.myName} attack missed`);
    }
  }
  logCombatHistory() {
    console.log(`Name: ${this.myName} Wins: ${this.win} Losses: ${this.loss}`);
  }
  heal(hp) {
    this.myHp += hp;
    if (this.myHp > this.maxHp) {
      this.myHp = this.maxHp;
      return this.myHp;
    }
    return this.myHp;
  }
  dealDamage(damage) {
    let zero = 0;
    this.myHp -= damage;
    if (this.myHp < zero) {
      this.myHp = zero;
      return this.myHp;
    }
    return this.myHp;
  }
  addWin() {
    this.win++;
  }
  addLoss() {
    this.loss++;
  }
}
function battle(fighter1, fighter2) {
  if (fighter1.getHealth() && fighter2.getHealth()) {
    for (;;) {
      fighter1.attack(fighter2);
      if (!fighter2.getHealth()) {
        fighter1.addWin();
        fighter2.addLoss();
        console.log(`${fighter1.getName()} has won!`);
        return;
      }
      fighter2.attack(fighter1);
      if (!fighter1.getHealth()) {
        fighter2.addWin();
        fighter1.addLoss();
        console.log(`${fighter2.getName()} has won!`);
        return;
      }
    }
  } else if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  }
}