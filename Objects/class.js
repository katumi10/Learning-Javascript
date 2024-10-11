// class = (ES6 feature) provides a more structural and
//      cleaner way to work with objects compared to
//      traditional constructor funtion. Eg. static keyword
//      encapsulation, inheritance


class Family{
  constructor(name, age, color){
    this.name = name,
    this.age = age,
    this.color = color
  }

  Myself(){
    console.log(`My name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
    console.log(`I am ${this.color} in complexion`)
  }

  cousins(){
    console.log(`I am the cousin.My name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
    console.log(`I am ${this.color} in cmplexion`);
  }
}

const Family1 = new Family("John Doe",40, "dark");
const Family2 = new Family("Rebecca Franklin", 39, "fair");
const Family3 = new Family("Peter Pan", 29 , "chocolate");

Family1.Myself();
Family2.Myself();
Family3.cousins();