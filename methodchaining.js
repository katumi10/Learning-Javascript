// Method chaining : calling one method after another
//  in one line of code 

let myName = "Janet";
let age = "20";
let word = "my name is"
let sentence = word + " "  + myName;
console.log(sentence)


// Using method chaining

console.log(sentence.charAt(0).toUpperCase());
console.log(word.replaceAll(" "," ").toUpperCase() + " " + myName)