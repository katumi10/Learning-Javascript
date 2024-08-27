 // OBJECT = a cllecion of related properties and/ or 
 //           methods. Can represent real world objects
 //           object = {key:value , function()}


 const person1 = {
    firstName : "John",
    lastName : "Doe",
    age : 20,
    occupation : "Doctor" ,
    isMarried : true ,
    greet  : function (){console.log("Good morning")}//function expression
 }
 const person2 = {
    firstName : "James",
    lastName : "Bush",
    age : 28,
    occupation : "Pharmacict" ,
    isMarried : false ,
    greet : () => console.log("Good afternoon") //arrow function
 }
 const person3 = {
    firstName : "Abigail",
    lastName : "Raymond",
    age : 30,
    occupation : "Pilot" ,
    isMarried : true ,
 }


//  console.log(person1.firstName);
//  console.log(person1.lastName);
//  console.log(person1.age);
//  console.log(person1.occupation);
//  console.log("Is married:" +  person1.isMarried);

person1.greet();
person2.greet();