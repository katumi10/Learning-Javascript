// .reduce() = reduce the elements of an array to 
//                 a single value



const grades = [20,12,10,40,60,100,4];

const maximum = grades.reduce(maxNum);
const minimum = grades.reduce(minNum);
const total = grades.reduce(sum);

 console.log(total);
// find the maximum number of an array
function maxNum(accumulator,element){
    return Math.max(accumulator,element);
}
// find the minimum number of an array
function minNum(accumulator,element){
    return Math.min(accumulator,element);
}

//find the total of an array
function sum(accumulator,element){
    return accumulator + element
}