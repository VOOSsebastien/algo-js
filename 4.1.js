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
console.log(random);
}
///expl///
let random=0;
rand10();



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

/**
 * [calcDistance description]
 * @param  {[Number]}  [//coordonates first point]
 * @param  {[Number]}  [//coordonates first point]
 * @param  {[Number]}  [//coordonates second point]
 * @param  {[Number]}  [//coordonates second point]
 * @return {[Number]}      [distance between]
 */
function calcDistance(x1, y1, x2, y2) {
    console.log( Math.hypot(x2-x1, y2-y1));
    }
    let x1 = readlineSync.question('x coordonates first point ');
    let y1 = readlineSync.question('y coordonates first point ');
    let x2 = readlineSync.question('x coordonates second point ');
    let y2 = readlineSync.question('y coordonates second point ');
 calcDistance(x1,y1,x2,y2);

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

/**
 * [elevator description]
 * @param  {[Number]} left [left floor elevator]
 * @param  {[Number]} call [current floor elevator]
 * @param  {[Number]} right [right floor elevator]
 * @return {[Number]}      [nearer elevator]
 */
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

/**
 * [totalTime description]
 * @param  {[Number]} n [number of tills]
 * @param  {[Number]} arr [time in queue]
 * @return {[Number]}    [total time]
 */

function totalTime(n,arr){
    var sum=0;
    let count=0;
    if(n==0){
        console.log("NO TILL AVALAIBLE!!! ");
    }else if(n==1){
        for(i=0;i<arr.length;i++){
            sum=(1*sum)+(1*arr[i]);
        }
        console.log(`array sum : ${sum}`);
    }else{
        count=arr[0];
        for(i=0;i<arr.length;i++){
        if(count>arr[i+1]){
            count=count-arr[i+1];
            sum=sum+arr[i+1];
        }else{
            petit=count;
            count=arr[i+1];
            count=count-petit;
            sum=sum+petit;
        }
    }

    }
    totaltime=sum;
    console.log(totaltime);
}
numbers=[10,5,8,2,10,8,10];
totalTime(2,numbers);