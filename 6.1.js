const readlineSync = require("readline-sync");

//////////////////////////////////////
///////////Exercise 6.1//////////////
////////////////////////////////////
/*
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let x = new Cat("skitty","9 years");
let y =new Cat("Pixel","6 years");
console.log(x,y);
*/
//////////////////////////////////////
///////////Exercise 6.2//////////////
////////////////////////////////////
/*
class Person{
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    sayHello(){
        console.log("Hello , " + this.firstname + this.lastname)+"!";
    }
}
new Person("VOOS ","Sebastien").sayHello();
*/
//////////////////////////////////////
///////////Exercise 6.3//////////////
////////////////////////////////////

class Dog{
    constructor(name, greeting){
        this.name=name;
        this.greeting=greeting;
    }
}class Cat{
    constructor(name, greeting){
        this.name=name;
        this.greeting=greeting;
    }
}
class Animal extends Dog { 
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}


console.log(new Dog("Léa","BON"));

console.log(new Animal("BOBO","FN").sayHello);



//////////////////////////////////////
///////////Exercise 6.4//////////////
////////////////////////////////////