
//forEach() = method used to iterate over the elements of
//            an array and apply a specified function (callback) to each element
//           array.forEach(callback)
//           element, index, array are provided 

let fruits = ["banana","mango","orange","pawpaw"];

fruits.forEach(upperCase);

function upperCase(element,index,array){
  array[index] = element.toUpperCase();
console.log(array[index]);
}


let numbers= [1,2,3,,4,5];

function timesTwo(element,index,array){
    array[index] = element * 2;
    console.log(array[index])
}
numbers.forEach(timesTwo);