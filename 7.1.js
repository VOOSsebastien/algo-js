const readlineSync = require("readline-sync");
//////////////////////////////////////
///////////Exercise 7.1//////////////
///////////////////////////////////////////////
/**
 * [rand10 description]
 * @return {[Number]}   [RandomNumber]
 */
 function rand100(){
    random=Math.floor(Math.random() * 100 ) + 1;
console.log(random);
}
let random=0,ok=0;
rand100();
while(ok==0){
    guess= readlineSync.question('guess my number  : ');
    if(random>guess){
    console.log("TOO LOW!!");
    }else if(random<guess){
        console.log("TOO High!!");
    }else
    ok=1;
    }
    console.log("WELL GUESSED");
///////////////////////////
///////////Exercise 7.2//////////////
///////////////////////////////////////////////
let fibolist=[0,1,];
let sum=0;
let n= readlineSync.question('how much fibonacci numbes do you want ? : ');
for(i=0;i<n-2;i++){
    sum=fibolist[i]+fibolist[i+1];
    fibolist.push(sum);
}
console.log(fibolist);
///////////////////////////
///////////Exercise 7.3//////////////
///////////////////////////////////////////////
let count=0;
let b= readlineSync.question('number to divide ? : ');
for(i=0;i<b;i++){
    if((b%i)==0){
        console.log(i);
        count++;
    }
}
if(count<2){
    console.log("PRIMER NUMBER");
}
console.log(b);
///////////////////////////
///////////Exercise 7.4//////////////
///////////////////////////////////////////////
function remove(value) {
    var index = listPizza.indexOf(value);
    if (index > -1) {
      listPizza.splice(index, 1);
    }
    return listPizza;
  }
/*
  async function x(){
    require('fs').writeFile(

        './my.json',
    
        JSON.stringify(myArray),
    
        function (err) {
            if (err) {
                console.error('Crap happens');
            }
        }
    );
}
*/
function demandeClient(){
 clientChoice= readlineSync.question(`Hello! Welcome to the Pizza Flavors Manager.

    Please choose your actions:

    1 - List all the pizza flavors
    2 - Add a new pizza flavor
    3 - Remove a pizza flavor
    4 - Exit this program
    5 - File Mode

    Enter your action's number: `);
    return clientChoice;
}
let listPizza=[];
let newPizza=0,rmvPizza=0,s=0,clientChoice;
while(s==0){
    demandeClient();
    switch(clientChoice){
        case '1':
            console.log(listPizza);
            break;
        case '2':
            newPizza= readlineSync.question('Enter the new pizza right here :  ');
            listPizza.push(newPizza);
            console.log(listPizza);
            
            //x;
            break;
        case '3':
            rmvPizza= readlineSync.question('Enter the pizza you want to remove right here :  ');
            remove(rmvPizza);
            console.log(listPizza);
            //x;
            break;
        case '4':
            console.log("EXIT");
            s++;
            break;
        case '5':
            fs
            .readFile('menupizza.txt', function read(err, data) {
                if (err) {
                    throw err;
                }
                var content = data;
              
                console.log(content);  
               
            });
        default: console.log("PFFF");
    }
}
//x;

///////////////////////////
///////////Exercise 7.5//////////////
///////////////////////////////////////////////

function main() 
{
    let arr = [ 5, 4, 3, 8, 32, 768, 564, 95, 172, 1500, 859, 754 ];
    let arr2 =[1,30,2,29,3,28,4,27,5,26,6,25,7,24,8,23,9,22,10,21,11,20,12,19,12,18,13,17,14,16,15];
    for ( i = 0; i < arr2.length; i++) 
    {      
        for (j = i + 1; j < arr2.length; j++) 
        {  
            let tmp = 0;                           
            if (arr2[i] > arr2[j]) 
            {           
                tmp = arr2[i];               
                arr2[i] = arr2[j];            
                arr2[j] = tmp;
            }
        }
    }
           for ( i = 0; i < arr2.length; i++) 
           {     
              console.log(arr2[i]);  
           }
}
main();
///////////////////////////
///////////Exercise 7.6//////////////
///////////////////////////////////////////////
/*
class Circle{ 
    constructor(xPos,yPos,radius){
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
    }
    get{
        
    }

}
*/
///////////////////////////
///////////Exercise 7.7//////////////
///////////////////////////////////////////////

///////////////////////////
///////////Exercise 7.8//////////////
////////////////////////////////////