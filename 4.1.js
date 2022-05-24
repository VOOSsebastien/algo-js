const readlineSync = require("readline-sync");

//////////////////////////////////////
///////////Exercise 4.1//////////////
////////////////////////////////////

//////////////////////////////
////////DOCUMENTATION/////////
/**
 * [calcSurface description]
 * @param  {[Number]} a [Length]
 * @param  {[Nummber]} b [width]
 * @return {[Number]}[SurfaceRectangle]
 */
////////////////////////////////////
function calcSurface(a,b){

    surface = (1*a)*(1*b);
}
let surface=0;
let x= readlineSync.question('length of your rectangle ');
let y= readlineSync.question('width of your rectangle  ');
calcSurface(x,y);
console.log(surface);

//////////////////////////////////////
///////////Exercise 4.2//////////////
////////////////////////////////////
/**
 * [rand10 description]
 * @return {[Number]}   [RandomNumber]
 */
function rand10(){
    random=Math.floor(Math.random() * 10 ) + 1;
    return(random);
}
///expl///
let random=0;
rand10();
console.log(random);



//////////////////////////////////////
///////////Exercise 4.3//////////////
////////////////////////////////////
/**
 * [multiRand description]
 * @param  {[Number]} n [iteration]
 * @return {[Number]}   [randomNumber]
 */

function multiRand(n){
    numbers =[Number];
    for(i=0;i<n;i++){
        numbers[i]=rand10();
    }
}
let n= readlineSync.question('how many numbers do you wnt ?  ');

multiRand(n);
console.log(numbers);

//////////////////////////////////////
///////////Exercise 4.4//////////////
////////////////////////////////////
/**
 * [average description]
 * @param  {[arr]} numbers [numbers]
 * @return {[Number]}      [average]
 */
/**
 * [min description]
 * @param  {[arr]} numbers [numbers]
 * @return {[Number]}      [min]
 */
/**
 * [max description]
 * @param  {[arr]} numbers [numbers]
 * @return {[Number]}      [max]
 */

function average(arr){
let result=0;
for (let i = 0; i < arr.length; i ++) {
    result=(1*result)+(1*arr[i])
}
console.log(`array average : ${result/arr.length}`);
}

function min(arr){
    console.log("Min:", Math.min(...numbers));
}
function max(arr){
    console.log("Max:", Math.max(...numbers));
}

let s = readlineSync.question('how many numbers do you wnt ?  ');
multiRand(s);
console.log(numbers);
average(numbers);
min(numbers);
max(numbers);

//////////////////////////////////////
///////////Exercise 4.5//////////////
////////////////////////////////////

//////////////////////////////////////
///////////Exercise 4.6//////////////
////////////////////////////////////

/**
 * [factorial description]
 * @param  {[Number]} n [number]
 * @return {[Number]}      [factorial]
 */

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let t = readlineSync.question('how many numbers do you wnt ?  ');

answer = factorial(t)
console.log("The factorial of " + t + " is " + answer);

//////////////////////////////////////
///////////Exercise 4.7//////////////
////////////////////////////////////
function elevator(left,call,right){
    let x = left-call;
    let y = right-call;
    s=Math.abs(x);
    v=Math.abs(y);
    if(s>=v){
        console.log("right");
    }else{
        console.log("left");
    }
}
let a = readlineSync.question('where is the left lift ?  ');
let b = readlineSync.question('where are you ?  ');
let c = readlineSync.question('where is the right lift ?  ');
elevator(a, b, c); 


//////////////////////////////////////
///////////Exercise 4.8//////////////
////////////////////////////////////

