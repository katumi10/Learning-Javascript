// this = reference to the object where THIS  is used
//         (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name : "John",
    age : 19,
    work : "engineer", 
    about :function(){console.log(`My name is ${this.name} and I am an ${this.work}.I am ${this.age} years old.`)}
}

//this keyword does not work with arow functions

person1.about();