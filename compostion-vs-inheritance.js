/* class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
  sleep() {
    return name + " is sleaping";
  }
}

class Elf extends Character {
  constructor() {
    super(name, weapon);
  }
} */

// keeping the function pure
function getAttacked(character) {
  return { ...character, attack: () => character.name + " is attacking" };
}

function Elf(name, weapon, type) {
  let elf = {
    name,
    weapon,
    type
  };
  // doing this we can add ability to Elf of what he can do
  // like he can sleep, run, and attach and etc.
  return getAttacked(elf);
}

// using the composition, we can do like this
const Elf = attack() + sleep();
const Ogre = attack() + sleep() + running();
