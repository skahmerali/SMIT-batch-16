// function userData(userInput: String, userOutput: Number) {
//     console.log(userInput, userOutput);
// }

// userData("ahmer", 20);

// var userInput: unknown;
// userInput = "SMIT";
// console.log(typeof (userInput))
// userInput = 50;
// console.log(typeof (userInput))

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(typeof (ourTuple[0]));

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// https://www.coursera.org/articles/what-is-react-native