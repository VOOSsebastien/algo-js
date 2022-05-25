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
let a=0;
console.log("1_er méthode WHILE");
while(a<=100){
    if((a%2)==0){
        console.log(a);
    }
    a++;
}
console.log("2_er méthode FOR");

for(a=0;a<=100;a++) {
    if((a%2)==0){
        console.log(a);
    }
    a++;
}
//////////////////////////////////////////////////
////////Exercise 2.4
/////////////////
let i=0;
console.log("1_er méthode WHILE EXERCICE 2.4");
while(i<=100){
    if((i%2)==0){
        console.log(i)
        console.log("-->(i/2)")
        console.log(i/2)
    }else{
        console.log(i)
        console.log("-->(i*3)")
        console.log(i*3)
    }
    i++;
}

//////////////////////////////////////////////////
////////Exercise 2.5
/////////////////
let b=0;
while(b!=42){
    let favnum=readlineSync.question('What is your favorite number ? ');
    if(favnum==42){
        b=42;
    }
}
//////////////////////////////////////////////////
////////Exercise 2.6
/////////////////
let day=readlineSync.question('What is number of today ? ');

switch (day){
    case "0":
        console.log("Weeks aren't long enough for you ??!");
        break;
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wegnesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday!!!!");
        break;
    case "6":
        console.log("!!Saturday!!");
        break;
    case "7":
        console.log("!!!Sunday!!!");
        break;        
}



//////////////////////////////////////////////////
////////Exercise 2.7
/////////////////
var fin=0;
let   numero=readlineSync.question('What is number goes? ');
for(i=0;i<numero;i++){
    let addnum=readlineSync.question(`What is the ${i} value ? `)
    fin = (1*fin)+(1*addnum);
}
console.log(fin);
