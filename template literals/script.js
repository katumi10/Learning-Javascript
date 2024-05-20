//template literals use (``)backticks rather then quotes to define a string

//example 1

firstName = "Katumi";
surName = "Amadu";

someText =
 `My name is ${firstName} and my surname is ${surName}`;

document.getElementById("demo").innerHTML = someText;

//with template literals you can use both single and double quotes inside a string

let text = `He's often called "Johnny"`