class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health = this.#health;
    }

    getStats(){
        console.log("name: " + this.name);
        console.log("health: " + this.health);
        console.log("attack: " + this.attack);
    }
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);

    }
}
class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts Fireball!`);

    }
}

const Thorin = new Warrior("Thorin",100,10);
//Thorin.useAbility()
Thorin.getStats();

const Gandal = new Mage("Gandal",80,8,50);
//Gandal.useAbility();
Gandal.getStats();

function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}

performAbility(Thorin);
performAbility(Gandal);