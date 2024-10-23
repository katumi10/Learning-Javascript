//constructor =  special methos for defining the 
//            pproperties and methods of objects.

//         sometimes we need to create many objects
//         of the same type.To create an object type 
//      we use an an object constructor function.

function employee(name,age,work,car){
    this.name = name,
    this.age = age,
    this.work = work,
    this.car = car
};

const employee1 = new employee("John",23,"manager", "toyota");

const employee2 = new employee("Emmanuel", 30, "Director", "Honda");

const employee3 = new employee("Wilson", 32, "Admin", "Benz");

console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.work);
console.log(employee1.car);

console.log(`My name is ${employee2.name}.I am ${employee2.age} years old.I am a ${employee2.work}. I drive a ${employee2.car}.`)

console.log(employee3.name);
console.log(employee3.age);
console.log(employee3.work);
console.log(employee3.car);



