const readlineSync = require("readline-sync");

//////////////////////////////////////
///////////Exercise 6.1//////////////
////////////////////////////////////

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let x = new Cat("skitty","9 years");
let y =new Cat("Pixel","6 years");
console.log(x,y);

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


const Animal = { 
    sayHello() {
        console.log(  `${this.greeting}! I'm ${this.name}!`);
        }
}
class Cat2  {
    constructor(name, greeting){
        this.name=name;
        this.greeting=greeting;
    }
}
class Dog  {
    constructor(name, greeting){
        this.name=name;
        this.greeting=greeting;
    }
}
Object.setPrototypeOf(Cat2.prototype, Animal);
let c = new Cat2('LEA','BONJOUR');
Object.setPrototypeOf(Dog.prototype, Animal);
let d = new Dog('AZERTY','SALUT!TOI!');
c.sayHello();
d.sayHello();


//////////////////////////////////////
///////////Exercise 6.4//////////////
////////////////////////////////////

class Person {
    constructor(firstName, lastname) {
      this.firstName = firstName;
      this.lastname = lastname;
    }
    get name() {
      return this.firstName+ this.lastname;
    }
    set name(val) {
      console.log("new NAME " +this.firstName + " " + this.lastname);
    }   
  }
  let obj1 = new Person("Clark", "kent");
  console.log(obj1.name);  
  obj1.name = ("clark","kent");
