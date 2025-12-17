const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        lowercase: true,
        trim: true // Removes leading/trailing whitespace
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const myUser = mongoose.model('myUser', userSchema);
mongoose.connect('mongodb+srv://Ahmer:I0vGBnnQuXCS6MpM@cluster0.lnsqyol.mongodb.net/?appName=Cluster0')
    .then(() => console.log('✅ Connected to MongoDB successfully!'))
    .catch(err => console.error('❌ MongoDB connection failed:', err));

const userData = (req, res) => {
    const { fname, lname, email, pasowrd, age } = req.body;
    if (age > 18) {
        res.send({
            status: 200,
            message: "users post succcessfully",
            data: "user is over age"
        })
    }
    res.send({
        status: 200,
        message: "users post succcessfully",
        data: "user is under age"
    });
};
const signup = (req, res) => {
    const { email, fName, lName, password } = req.body;
    let users = { email, fName, lName, password };
    const newUser = new myUser(users);

    newUser.save()
        .then(savedDoc => console.log('User saved:', savedDoc))
        .catch(err => console.error('Error saving user:', err));
    res.send({
        status: 200,
        message: 'user created succssfully',
        newUser
    })
    // let userDetails = {
    //     "ref": userSalaryDetails._id,
    //     user: "ahmer",
    //     _id: "sdkjbnjkbfbwfbweiufbw"
    // }
    // let userSalaryDetails = {
    //     _id: "bjhsbajhsbajhsba28128",
    // }
    // const email = "ahmerali@gmail.com";
    // const name = "ahmer ali";
    // const password = "ahmerali";
    // const age = "18"; 
    // const data = [];


}

module.exports = { userData, signup };