const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
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
function singup(req, res, next) {

    // Defining schema
    let schemaClass = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        },
        date: new Date.now()
    });
    // creating model from the schema
    let Schema = mongoose.model('Ahmer', schemaClass);

    let schema1 = new Schema({
        name: "GeeksForGeeks"
    });
    // will have a default value of John Doe
    let schema2 = new Schema({});

    const { name, email, password } = req.body;

    // console.log(req.ahmer);
    res.send('hello world!!!');
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

module.exports = { auth, login };