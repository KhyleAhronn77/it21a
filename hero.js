class Hero{
   
    #health
    constructor (name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.Item =[];
    }

    getHealth(){
        return this.health;
    
    
    

    }

    getStats(){
        console.log("name: " + this.name);
        console.log("health: " + this.health);
        console.log("attack: " + this.attack);
    }


    getName(){
        console.log(this.name)
    }

    getAttack(){
        console.log(this.attack);
    }

    getItem(Item){
        this.Item.push(Item);
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

const sword = new Item("sword", 5);
const staff = new Item("staff",3);



const Thorin = new Warrior("Thorin",100,10);
//Thorin.useAbility();
//Thorin.getStats();
//Thorin.getAttack();
Thorin.getName();
Thorin.getAttack();
Thorin.getItem(sword);
console.log(Thorin.totalAttack());
Thorin.getItem(sword);
console.log(Thorin.totalAttack());
Thorin.getItem(sword);
console.log(Thorin.totalAttack());
Thorin.getItem(sword);
console.log(Thorin.totalAttack());



//const Gandal = new Mage("Gandal",80,8,50);
//Gandal.useAbility();
//Gandal.getStats();

//performAbility(Thorin);
//performAbility(Gandal);