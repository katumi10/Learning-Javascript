/* inheritance =  allows a new class to inherit properties from an existing class(pareent => child)
Helps with code reusabilty   

*/


//parent class
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
}


// children classes
//children classes can have their own unique properties

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`The ${this.name} is running`)
    }
}


class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`The ${this.name} is swimming`)
    }
}
const rabbit = new Rabbit();
const fish = new Fish();

rabbit.eat();
console.log(fish.alive);
rabbit.run();
fish.swim();