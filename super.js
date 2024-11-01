 
//Super   =  akeyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
//           this = this.object
//           super = the parent

class Employees{

    constructor(name,age,height,favFood){
         this.name = name;
         this.age = age;
         this.height = height;
         this.favFood = favFood;
    }
}

class Employee1 extends Employees{

    constructor(name,age,height,favFood){
    super(name,age,height,favFood);
    }
}

class Employee2 extends Employees{

    constructor(name,age,height,favFood){
    super(name,age,height,favFood);
    }
}

class Employee3 extends Employees{

    constructor(name,age,height,favFood){
    super(name,age,height,favFood);
    }
}

Employee1 = new Employee1("John",23, "tall", "Pizza");
Employee2 = new Employee2("James",25, "tall", "Chicken wings");
Employee3 = new Employee3("Williams",43, "short", "Sushi");


console.log(Employee1.name);
console.log(Employee3.favFood);
console.log(Employee1);
console.log(Employee2);
console.log(`My name is ${Employee1.name}. I am very ${Employee1.height} and I like ${Employee1.favFood}`);
