class Person{

    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    get name(){
        console.log(this.name);
    }


    displayInfo(){
        console.log("name:" + this.name);
        console.log("age:" + this.age);
        console.log("occupation:" + this.occupation);
        console.log("---------------");
    }
}

const person1 = new Person("Coco Martin",24,"Masahista" );
const person2= new Person("Tanggol",29,"Ex Mayor" );

person1.getname();
person1.displayInfo();
