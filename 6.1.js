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
let y =new Cat("Pixel","5 years");
console.log(x,y);

//////////////////////////////////////
///////////Exercise 6.2//////////////
////////////////////////////////////

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

//////////////////////////////////////
///////////Exercise 6.3//////////////
////////////////////////////////////


class Animal  { 
    constructor(name){
        this.name=name;
    }
    sayHello() {
        console.log(  `${this.greeting}! I'm ${this.name}!`);
        }
}
class Cat2  extends Animal{
    constructor(name, age){
        super(name);
        this.age=age;
    }
    static greeting="miaou";

}
class Dog extends Animal {
    static greeting="woufwouf";
}
//Object.setPrototypeOf(Cat2.prototype, Animal);
let c = new Cat2("billy",3);
//Object.setPrototypeOf(Dog.prototype, Animal);
let d = new Dog('rex');
c.sayHello();
d.sayHello();


//////////////////////////////////////
///////////Exercise 6.4//////////////
////////////////////////////////////

class Person1 {
    constructor(firstName, lastname) {
      this.firstName = firstName;
      this.lastname = lastname;
    }
    get getname() {
      return this.firstName+"/" +this.lastname;
    }
    set setname(val) {
      console.log("new NAME " +this.firstName + " " + this.lastname);
    }   
  }
  let obj1 = new Person1("Clark", "kent");
  console.log(obj1.getname);  
  obj1.setname = ("clark","kent"); 
  
