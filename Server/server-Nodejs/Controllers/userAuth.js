const mongoose = require('mongoose');
const { Schema } = require("./../schema/dbScehma")
const bcrypt = require('bcrypt');
const hashy = require('hashy');
const saltRounds = 10;

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
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
function auth(req, res, next) {
    // console.log(req.ahmer);
    res.send('hello world!!!');
}
async function singup(req, res, next) {
    try {
        const { fName, lName, email, password } = req.body;
        // const someOtherPlaintextPassword = 'not_bacon';
        // use for get API to get all user data
        // const data = await Schema.find({})
        // console.log(data);  
        // use for spacific user finding
        const user = await Schema.findOne({ email })
        console.log(user, 'line number 41');
        if (user) {
            return res.send({
                status: 505,
                message: "user already exists",
            })
        }
        hashy.hash(password, function (error, hash) {
            if (error) {
                return console.log(error);
            }
            const newUser = new Schema({ fName, lName, email, password: hash });
            newUser.save();
            res.send({
                status: 200,
                newUser,
                message: "user has been created successfully"
            });
            console.log("generated hash: ", hash);
        });

        // sometime npm libraries make some errors so need to learn it by the official documentation
        // bcrypt.hash(saltRounds ,async function (err, hash) {
        //     try {
        //         console.log(hash)
        //     } catch (err) {
        //         console.log(err)
        //     }
        //     // bcrypt.hash(password, salt, function (err, hash) {
        //     // console.log(salt);
        //     // console.log(password);
        //     // console.log(hash)
        //     if (!err) {

        //         // Store hash in your password DB.
        //     } else {
        //         console.log(err);
        //         res.send({
        //             status: 500,
        //             message: "server code is failed",
        //             err,
        //         })
        //     }
        // });
        // Inserts a new document
        // console.log(req.ahmer);


    } catch (err) {
        console.log(err);
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}
async function userDetails(req, res, next) {
    try {
        // const someOtherPlaintextPassword = 'not_bacon';
        // use for get API to get all user data
        // const data = await Schema.find({})
        // console.log(data);  
        // use for spacific user finding
        const users = await Schema.find()
        console.log(users, 'line number 41');
        res.send({
            message: "users recieved", 
            users
        })


    } catch (err) {
        console.log(err);
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}
async function login(req, res, next) {
    try {
        const { userEmail, password } = req.body;
        const user = await Schema.findOne({ email: userEmail })
        // let isFound = false;
        console.log(userEmail);
        console.log(password);
        console.log(user)
        hashy.verify(password, user.password, function (error, success) {
            if (error) {
                return console.error(err);
            }

            if (success) {
                console.log("you are now authenticated!");
                return res.send({
                    status: 200, 
                    message: "user successfully login!!!",
                })
            } else {
                console.warn("invalid password!");
            }
        });
        // if (passowrd.length < 5) {
        //     return res.send("password length must be at least 5")
        // }
        // for (var i = 0; i < userData.length; i++) {
        //     if (userEmail === userData[i].email
        //         &&
        //         passowrd === userData[i].pass) {
        //         isFound = true;
        //         return res.send({
        //             status: 200,
        //             message: 'login successfully'
        //         })
        //     }
        // }

        // if (isFound === false) {
        //     res.send({
        //         status: 404,
        //         message: 'User Not found'
        //     })
        // }
    }
    catch (err) {
        res.send({
            message: 'user not found',
            err,
            status: 404,
        })
    }
};

module.exports = { auth, login, singup, userDetails };