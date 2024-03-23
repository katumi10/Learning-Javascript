// a variable is a container for storing data
// to declare a variable we use var, let or const


// let 
let surName = "John";//string
let age = 42 ; //number
let happy = false;//boolean

console.log(age);
console.log(surName);
console.log(happy)
//some examples

console.log("Hello", surName);
console.log("Hello", surName , "you are" ,age, "years old");
console.log("Are you Sad:", happy);

//InnerHTML
//you can access ana HTML element with JavaScript using 
//document.getElementById(" ID") method
document.getElementById("p1").innerHTML = "Hello " + surName;
document.getElementById("p2").innerHTML = "Hello " + surName + " you are "+ age +"years old";
document.getElementById("p3").innerHTML = "Are you Sad: "+ happy

