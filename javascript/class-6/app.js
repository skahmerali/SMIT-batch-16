// var arrays = ["ahmer", 76, false, 0.9,  ["ali", false]];

// console.log(arrays);

// arrays[2] = "true";
// console.log(arrays[2]);
// arrays.pop();

// console.log(arrays[4][1]);
// console.log(arrays[4]);
// console.log(arrays[4]);
// arrays[4].pop();
// console.log(arrays);

// var arrays = ["ahmer", "ali", "sheikh", "saylani"];

// arrays.push("ahmer", 25);
// console.log(arrays);
// var userEmails = [];
// var userInput = prompt("enter your email.. :");
// var isFound = false;
// // var result ;
// for (var i = 0; i < userInput.length; i++) {
//   // result= userInput[i];
//   if (userInput[i] === "@") {
//     userEmails.push(userInput);
//     isFoundis = true;
//   }
//   // else{
//   //     console.log("your email is invalid")
//   // }
// }
// if (isFound === false) {
//   console.log("your email is invalid");
// }
// console.log(userEmails);

var emails = ["ahmer@gmail.com", "ali@gmail.com" , "sheikh@gmail.com"];
var passwords = ["12345", "54321", "13579"];

var userEmail = prompt("kindly write your email");
var userPassword = prompt("kindly write your password");
var isFound = false;
for(var i=0;i<emails.length;i++){
    if(userEmail === emails[i]&& userPassword===passwords[i]){
        isFound = true
        alert("Login Successfully")
    } 
}
if(isFound === false){
    alert("Login Faild")
}
