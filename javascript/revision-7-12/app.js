// Operators 
// > Greater than 
// < less than 
// <= less than and equal to 
// >= Greater than and equal to 
// == check the value 
// === check the value and type
// ! this is a not symbol 
// != not equal to 
// !== not equal to the value and not equal to the type
// && is checking both sides are true or not
// || is checking one sides should be true


// if (!sirAhmer) {
//     alert("Class cant be start");
// }else if (sirIbrahim) {
//     alert("class now can be start")
// }else {
//     alert("today is no class")
// }
// Ambiguity
// if (2 > 1 && (5 < 10 || 1 > 7)) {
//     alert("you are good!!!")
// }

var arrays = [4, 6, "ahmer", "SMIT", true, 0.5];
// Store multiple data in one varriable
// We can store multiple data types
// indexing are starting from 0
// the length of the array is start from 1 (quantity)
// console.log(arrays[4])
// console.log(arrays.length)

// for (var i = 0; i < 5; i++) {
//     console.log("bye bye world");
//     for (var j = 0; j < 10; j++) {
//         console.log("hello world")
//     }
// }


var num = +prompt("Enter your number");
for (var i=1;i<=10;i++) {
  document.write( num+"x"+i +"="+ num * i+"<br>" ); 
}