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

// const alphabates = ["a", "b", "c", "d"];

// const resultA = [alphabates]
// const resultB = [...alphabates]

// console.log(resultA);
// console.log(resultB);

// console.log(1);
// // console.log(setTimeout(() => 2, 3000));
// setTimeout(() => console.log(2), 3000);
// console.log(3);

// let text = "you are succesfully login";
// if (text.includes("success")) {
//   console.log(text);
// } else {
//   console.log("not included");
// }

const myArr = [
  { name: "X00", price: 100 },
  //   {name:"X01",price:100 },
  //   {name:"X02",price:100 },
  //   {name:"X03",price:100 },
  { name: "X04", price: 110 },
  //   {name:"X05",price:110 },
  //   {name:"X06",price:110 },
  //   {name:"X07",price:110 },
  { name: "X08", price: 120 },
  //   {name:"X09",price:120 },
  //   {name:"X10",price:120 },
  { name: "X16", price: 140 },
  //   {name:"X11",price:120 },
  { name: "X12", price: 130 },
  //   {name:"X13",price:130 },
  //   {name:"X14",price:130 },
  //   {name:"X15",price:130 },
  //   {name:"X17",price:140 },
  //   {name:"X18",price:140 },
  //   {name:"X19",price:140 }
];
console.log(myArr);
myArr.sort((p1, p2) => {
  if (p1.price < p2.price) return -1;
  if (p1.price > p2.price) return 1;
  return 0;
});
console.log(myArr);
// let txt = "";
// myArr.forEach(myFunction);

// function myFunction(value) {
//   txt += value.name + " " + value.price + "<br>";
// }
// console.log(txt);
// document.getElementById("demo").innerHTML = txt;
