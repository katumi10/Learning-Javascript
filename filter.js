// filter()  =   creates a new array by filtering
//                  out elements




const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const fruits = ["apple","mango","coconut","pawpaw","orange"];
const words = fruits.filter(longWords);

console.log(words);


function longWords(element){
    return element.length >= 6;
}