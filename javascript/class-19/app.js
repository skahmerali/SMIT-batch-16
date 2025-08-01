var students = [];

function signup() {
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var stdData = {
    firstName: firstName,
    "last Name": lastName,
    age,
    email,
    password,
  };

  students.push(stdData);
  window.localStorage.setItem("data", JSON.stringify(students));
}
