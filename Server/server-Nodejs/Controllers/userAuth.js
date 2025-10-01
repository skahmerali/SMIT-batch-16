const mongoose = require('mongoose');

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

    // Defining schema
    let schemaClass = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        // age: {
        //     type: Number,
        //     required: true
        // },
        // date: new Date.now()
    });
    // creating model from the schema
    let Schema = mongoose.model('userData', schemaClass);
    try {
        const { name, email, password } = req.body;
        const newUser = new Schema({ name, email, password });
        await newUser.save(); // Inserts a new document
        // console.log(req.ahmer);
        res.send('hello world!!!');
    }catch(err){
        res.send({
            status: 500, 
            message:"server code is failed",
            err,
        })
    }
}
function login(req, res, next) {
    const { userEmail, passowrd } = req.body;
    let isFound = false;
    console.log(userEmail);
    console.log(passowrd);
    if (passowrd.length < 5) {
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

};

module.exports = { auth, login, singup };