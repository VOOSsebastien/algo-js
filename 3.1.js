
const readlineSync = require("readline-sync");

////////////////////////
/////Exercise 3.1///////////
/////////////////////////
let arr = ["1", "2", "3","4","5"];
let result=0;

for (let i = 0; i < arr.length; i ++) {
    result=(1*result)+(1*arr[i])
  
}
console.log(`array sum : ${result}`);
/////////////////////////////////
let arr2 = ["100", "101", "102"];
let result2=0;

for (let i2 = 0; i2 < arr2.length; i2 ++) {
    result2=(1*result2)+(1*arr2[i2])
  
}
console.log(`array sum : ${result2}`);
////////////////////////
/////Exercise 3.2///////////
/////////////////////////

let arr3 = ["1", "2", "3","4","5"];
let result3=0;

for (let i3 = 0; i3 < arr3.length; i3 ++) {
    result3=(1*result3)+(1*arr3[i3])
  
}
console.log(`array moy : ${result3/arr3.length}`);
/////////////////////////////////
let arr4 = ["100", "101", "102"];
let result4=0;

for (let i4 = 0; i4 < arr4.length; i4 ++) {
    result4=(1*result4)+(1*arr4[i4])
  
}

console.log(`array moy : ${result4/arr4.length}`);
////////////////////////
/////Exercise 3.3///////////
/////////////////////////

numbers = [1, 2, 3];
numbersCopy = [];
for (i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
  }
numbersCopy.push(4);
console.log(numbers, 
    numbersCopy);


    ////////////////////
    ///2METHODE/////////
    numbers = [1, 2, 3];
numbersCopy = numbers.filter(() => true);
console.log(numbers,numbersCopy);
////////////////::::
//////////3METHODE
numbers = [1, 2, 3];
double = (x) => x * 2;

numbers.map(double);
console.log(numbers,numbersCopy);

////////////////////////
/////Exercise 3.4///////////
/////////////////////////

////SPREAD OPERATOR////////
numbers = [ 6, 3, 5, 2, 9, 54 ,5 ,4 ,7 ,51 ,0 ,9 ];
 
console.log("Min:", Math.min(...numbers));
console.log("Max:", Math.max(...numbers));

////////////////////////
/////Exercise 3.5///////////
/////////////////////////
numbers =[1,2,3,4,6,7,8,9,2,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-14,-15];
let sum=0;
for(let i=0;i<numbers.length;i++){
    if((numbers[i])>0){
    sum+= numbers[i];
    }   
}
console.log(`array sum : ${sum} `);

////////////////////////
/////Exercise 3.6///////////
/////////////////////////
sentences=['hello', 'world', 'this', 'is', 'great', 'but' ,'sometimes', 'special']
console.log(...sentences);
