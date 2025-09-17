const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get(('/ahmer'), function (req, res, next) {
//     res.send('hello world!!!');
// })

let userData = [
    {
        email: 'ahmer@gmail.com',
        pass: '12345'
    },
    {
        email: 'ali@gmail.com',
        pass: '54321'
    }
]

app.post('/login', (req, res, next) => {
    const { userEmail, passowrd } = req.body;
    let isFound = false;
    console.log(userEmail);
    console.log(passowrd);
    if(passowrd.length < 5){
        return res.send("password length must be at least 5")
    }
    for (var i = 0; i < userData.length; i++) {
        if (userEmail === userData[i].email
            &&
            passowrd === userData[i].pass) {
            isFound = true;
            return res.send({
                status: 200,
                message: 'login successfully'
            })
        }
    }

    if (isFound === false) {
        res.send({
                status: 404,
                message: 'User Not found'
            })
    }

})

app.listen(PORT, () => {
    // template littrels
    console.log(`server is running on ${PORT}`)
})