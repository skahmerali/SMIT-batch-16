// let sum = 0;
// const numbers = [65, 44, 12, 4];
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// numbers.forEach(myFunction);
// function myFunction(item) {
//   sum += item;
// }

// console.log(sum);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age <= 18;
// }
// console.log(result);

// const ages = [32, 33, 16, 40];
// let array = []
// for (let i = 0; i < ages.length; i++) {

//     if(ages[i] <= 18){

//         array.push(ages[i])

//     }
// }
// console.log(array)

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);
// const sortArray = numbers.map((e)=> {
//     // return e;
//     // return e > 18;
//     return e === 200;
// })
// console.log(newArr);
// console.log(sortArray);

const alphabates = ["a", "b", "c", "d"];

const resultA = [alphabates]
const resultB = [...alphabates]

console.log(resultA);
console.log(resultB);