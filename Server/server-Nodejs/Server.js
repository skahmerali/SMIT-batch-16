const express = require('express');

const app = express();

const router = require('./Router/route');

const PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get(('/ahmer'), function (req, res, next) {
//     res.send('hello world!!!');
// })



app.use('/api', router);
// app.use((req, res, next) => {
//     // console.log('another middleware called');
//     // req.ahmer = 'hello ahmer';
//     // console.log(req.headers);
//     // next();
// })
// app.get('/', (req, res, next) => {
//     console.log(req.ahmer);
//     res.send('hello world!!!');
// })
// app.post('/login', (req, res, next) => {
//     const { userEmail, passowrd } = req.body;
//     let isFound = false;
//     console.log(userEmail);
//     console.log(passowrd);
//     if (passowrd.length < 5) {
//         return res.send("password length must be at least 5")
//     }
//     for (var i = 0; i < userData.length; i++) {
//         if (userEmail === userData[i].email
//             &&
//             passowrd === userData[i].pass) {
//             isFound = true;
//             return res.send({
//                 status: 200,
//                 message: 'login successfully'
//             })
//         }
//     }

//     if (isFound === false) {
//         res.send({
//             status: 404,
//             message: 'User Not found'
//         })
//     }

// })

app.listen(PORT, () => {
    // template littrels
    console.log(`server is running on ${PORT}`)
})