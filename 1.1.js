const readlineSync = require("readline-sync");
////////////////////////Exercise 1.0 - Interactive Mode///////////////////////////

let number1= readlineSync.question('Can you give me two numbers you want to add .first one please?');
let number2 = readlineSync.question('second?');
console.log(Number(number1)+Number(number2));
console.log(Number(number1)-Number(number2));
console.log(Number(number1)*Number(number2));
console.log(Number(number1)/Number(number2));
console.log(Number(number1)%Number(number2));
console.log(Number(number1)**Number(number2));


//////////////////////////////////////////////////////
////////////////////Exercise 1.1
////////////////////////////////////////////////

let vitesse="le hérisson le plus rapide de tout les temps !";
let piece=25487;
console.log(`Sonic est ${vitesse} et il a ${piece}pièces dans ses chaussures`);

//////////////////////////////////
///////////Exercise 1.2
////////////////////////5.2//////
let name="Lambert",firstname="Gerard ",city="Paris";
console.log(`Your name is ${firstname}${name} and you live in ${city}.`)
///////////////////////
//////Exercise 1.3
//////////////////////
let firstnameuser=readlineSync.question('enter your first name :');
console.log(`Hello ${firstnameuser}`);

/////////////////////////////////
/////////Exercise 1.4
//////////////////////////////////
let nameex4=readlineSync.question('enter your  name :');
let firstnameex4=readlineSync.question('enter your first name :');
let cityex4=readlineSync.question('enter your city :');
console.log(`Your name is ${firstnameex4} ${nameex4} and you live in ${cityex4}.`)

/////////////////////////////////
/////////Exercise 1.5
//////////////////////////////////
let num1=readlineSync.question('first decimal number :');
let num2=readlineSync.question(' second ');
num1=Math.trunc(num1);
console.log(num1*num2);

/////////////////////////////////
////////Exercise 1.6
//////////////////////////////////
let num1ex6=readlineSync.question('first integer number :');
let num2ex6=readlineSync.question(' second ');
console.log(Number(num1ex6)%Number(num2ex6));
