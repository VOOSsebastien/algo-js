const readlineSync = require("readline-sync");


//////////////////////////////////////////////////
////////Exercise 2.1
/////////////////
let age= readlineSync.question('Can you give me your age please? ');

if(age>=18){
    console.log("You're an adult");
}else{
    console.log("You are not yet an adult");
}
//////////////////////////////////////////////////
////////Exercise 2.2
/////////////////
let minAge= readlineSync.question('Can you give me the min age ? ');
let maxAge= readlineSync.question('Can you give me the max age ? ');
let currentAge=readlineSync.question('Can you give me yr age please? ');
if(minAge>=maxAge){
    console.log("ERROR!!!!!!!!! DID YOU UNDERSTAND THE EXERCICE?")
}
else if((minAge<currentAge)&&(currentAge<maxAge)){
    console.log("you are in the good tier , Come in ")

}else{
    console.log("GET OUT !!!")
}

//////////////////////////////////////////////////
////////Exercise 2.3
/////////////////

//////////////////////////////////////////////////
////////Exercise 2.4
/////////////////

//////////////////////////////////////////////////
////////Exercise 2.5
/////////////////


//////////////////////////////////////////////////
////////Exercise 2.6
/////////////////


//////////////////////////////////////////////////
////////Exercise 2.7
/////////////////