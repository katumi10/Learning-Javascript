
//array = like a variable that can store multiple values

//You can access an array element by referring to the index number
const cars = ["BMW","Mercedes","Tundra","Toyota"];
  let car = cars[1];
  console.log(car); //output is Mercedes

  //Changing an array element
  const fruits = ["Apple","banana","orange","pawpaw"];
        fruits[0] = "mango";
        console.log(fruits); //output is Mango,banana,orange,pawpaw

        //Adding an array element(.push method)
        fruits.push("guava");
        console.log(fruits);// Mango,banana,orange,pawpaw,guava

        //Or using .length method
        fruits[fruits.length] = "lemon";
        console.log(fruits)//Mango,banana,orange,pawpaw,guava,lemon

    //removing last element of an array
    fruits.pop();
    console.log(fruits)//Mango,banana,orange,pawpaw,guava

    //adding an element at the beginning of an array
    fruits.unshift("watermelon");

    //removing an element at the beginning of an array
    fruits.shift();

    //the length of an  array
    let length = fruits.length;
    console.log(length);  //displays 5

    //finding the index of an element in an array
    let index = fruits.indexOf("banana");
    console.log(index) //displays 1


    //shortcut for displaying elements an array

    for(let fruit of fruits){
      console.log(fruit);
    }