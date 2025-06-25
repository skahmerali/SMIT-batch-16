// let shamshad = {
//   name: " ",
//   age: "",
//   gender: "",
//   education: "",
//   "subject name" : "",
// };
// let students = [
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
//   {
//     name: " ",
//     age: "",
//     gender: "",
//     education: "",
//   },
// ];

// let obj = {
//   plan1: {
//     name: "Basic",
//     monthly: "$3.99",
//     diskSpace: "100 Gb",
//     dataTransfer: "1000 GB/Mo",
//     sitePages: "10",
//   },
//   plan2: {
//     name: "Professional",
//     monthly: "$3.99",
//     diskSpace: "100 Gb",
//     dataTransfer: "1000 GB/Mo",
//     sitePages: "10",
//   },
//   plan3: {
//     name: "ultimate",
//     monthly: "$3.99",
//     diskSpace: "100 Gb",
//     dataTransfer: "1000 GB/Mo",
//     sitePages: "10",
//   },
// };
var students = [];

function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var DOB = document.getElementById("DOB").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var student = {
    firstName: firstName,
    lastName: lastName,
    DOB,
    email,
    password,
  };
  students.push(student);

  console.log(students);
}
