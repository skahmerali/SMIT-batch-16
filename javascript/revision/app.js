// var , let,  const
// var huzaifa = "huzaifa ahmed";
// console.log(huzaifa);
// document.write(huzaifa);
// alert(huzaifa);
// let userName = prompt ("Enter your first name ?");

// console.log(userName);

// var number = 2323232;
// var userNumber = +prompt("Enter your desire number");
// console.log(userNumber);
// var userNumber = Number(prompt("Enter your desire number"));
// console.log(userNumber);
// var userNumber = parseInt(prompt("Enter your desire number"));
// console.log(userNumber);
// var userNumber = parseFloat(prompt("Enter your desire number"));
// console.log(userNumber);
// DMAS
// var result = 76 + 7 * 6 / 2 - 6;
// console.log(result);

// alert("Now we are getting 2 inputs from you and give you a result in DMAS rule");
// let num1 = +prompt("Enter your first desire number : ");
// let num2 = +prompt("Enter your second desire number  : ");
// let result ; 
// result = num1 + num2;
// let result = console.log("Here is your addition result : ", num1 + num2)
// let result = console.log("Here is your addition result : ", num1 + num2)
//  console.log("Here is your Addition result : ", result);
//  result = num1 - num2;
//  console.log("Here is your Subtraction result : ", result);
//  result = num1 * num2;
//  console.log("Here is your Multiplication result : ", result);
//  result = num1 / num2;
//  console.log("Here is your Division result : ", result);

let num1 = +prompt("enter your first number:");
let num2 = +prompt("enter your second number:");
let operator = prompt("enter the operator");
if(operator == "+"){
    console.log(num1 + num2);
}
else if(operator == "-"){
    console.log(num1 - num2);
}
else if(operator == "*"){
    console.log(num1 * num2);
}
else if(operator == "/"){
    console.log(num1 / num2);
}
else{
    console.log("Kindly select these operaters *,+,-,/");
}

