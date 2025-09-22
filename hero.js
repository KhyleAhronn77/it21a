class Hero{
   
    #health;
    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.Items =[];
    }

   getHealth(){
        return this.#health;
    }

    getAttack(){

        console.log(this.attack);
    }

    getName(){
        console.log(this.name);

    }
    getStats(){
        console.log("/n");
        console.log("Name:" + this.name);
        console.log("Health:" + this.#health);
        console.log("Attack:" + this.attack);
    }
    addItem(item){
        this.Items.push(item);
    }

    totalAttack(){
        return this.attack + this.Items.reduce((sum,i)=>sum + i.bonusAttack,0);
    }
}
class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses Power Strike!`);
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



class Item{
    constructor(name,bonusAttack){
        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}

function performAbility(hero){
    console.log("/n");
    hero.useAbility();
}

const sword = new Item("Sword",5);
const staff = new Item("staff",3);



const Thorin = new Warrior("Thorin",100,10);
//Thorin.useAbility();
//Thorin.getStats();
//Thorin.getAttack();
Thorin.getName();
Thorin.getAttack();
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
console.log(Thorin.totalAttack());


//const Gandal = new Mage("Gandal",80,8,50);
//Gandal.useAbility();
//Gandal.getStats();

//performAbility(Thorin);
//performAbility(Gandal);