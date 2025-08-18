var students = [];

function signup() {
  //repeatedAction();
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var users = window.localStorage.getItem("data");
  users = JSON.parse(users);
  // console.log(users);
  if(users){
    for ( let i = 0 ; i < users.length ; i++ ) {
      if (users[i].email === email){ 
        alert("email is already exist")
        return
      }
    }
  }
  

  var stdData = {
    firstName: firstName, // if the key and value are same so no need to reuse with property declartion 
    lastName: lastName, //if we use spaces in the name so implement "" or ''
    age,
    email,
    password,
  };

  students.push(stdData);
  window.localStorage.setItem("data", JSON.stringify(students));
  window.location.href = "login.html"
}

const login = () => {
  var loginEmail = document.getElementById('loginEmail').value;
  var loginPassword = document.getElementById('loginPassword').value;
  var getData = window.localStorage.getItem('data');

  getData = JSON.parse(getData);
  // console.log(getData[0].firstName);
  for (var i = 0; i <= getData.length; i++) {
    // console.log(getData[i]);
    if (getData[i].email === loginEmail && getData[i].password === loginPassword) {
      // console.log(getData[i]);
      window.localStorage.setItem('currentUser', JSON.stringify({ validUser: getData[i] }))
      window.location.href = 'home.html';
    };
  };
};

function getUser() {
  let user = window.localStorage.getItem("currentUser");
  user = JSON.parse(user);
  console.log(user.validUser.firstName, 'current user');
  let leftdiv = document.getElementById('left');
  let rightdiv = document.getElementById('right');

  leftdiv.innerHTML = user.validUser.firstName;
  
}



