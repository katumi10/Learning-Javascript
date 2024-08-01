 //function: a block of code designed to perform a specific task

 /*syntax:
 the function keyword followed by the function name followed by parenthesis()
 eg. function  myFunction(x,y,z){
    code to be executed
 }
 (x,y,z) are function parameters
 function aargumentss are the values received by the function when it is invoked(called)
 */

 //calling a function which performs some calculation and returns the result

//  let x= myFunction(4,3);
//  console.log(x);

//  function myFunction(a,b){
//     return a*b;
//  }
 //output is 12
 //2 or 3 parameters can be used

 
 let x= myFunction(4,3,2);
 console.log(x);

 function myFunction(a,b,c){
    return a*b/c;
 }
//  returns 6


// ***function expressions

//example

// const hello = function(){
//    console.log("hello");
// }

// hello();
// *** arrow functions

const hello = () =>{
   console.log("Hello");
}
hello();