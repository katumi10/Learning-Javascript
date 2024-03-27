// js Math methods allow you to perform mathematical tasks on numbers

let x= 2.25;
let y = 21;
let z  = 3;
let maximum;
let minimum;

//x = Math.round(x); returns rounded number to nearest integer
// x= Math.floor(x);  returns x rounded "down" to tthe nearest integer
// x= Math.ceil(x);   returns x rounded "up" to tthe nearest integer
// x = Math.trunc(x);  returns the integer part of x 
// x= Math.pow(x,2);  returns the value of x to the power 2
// x = Math.sqrt(x); returns square root of x
// x = Math.abs(x); returns the absolute(Positive) value of x
// x =  Math.random();  returns a random number between 0(inclusive)and 1(exclusive)  

// Math.random() used with Math.floor() can be used to return random integers
// example: Math.floor(Math.random()*5); returns a random integer from 0 to 4 

maximum = Math.max(x,y,z); // return the highest value in a set of numbers
minimum  = Math.min(x,y,z); // return the lowest value in a set of numbers

/* x = Math.sign(x); returns if x is negative, positive or null
    -1 represents negative
     1 represents positive
     0 represents null

     example: Math.null(x) will return -1  */


console.log(minimum);
console.log(maximum);
console.log(x);


// PROJECT: CODE TO GENERATE RANDOM NUMBERS

document.getElementById("demo").innerHTML = 
randomNumber();

function randomNumber(a,b){
    return Math.floor(Math.random(0,10) * 10)
}