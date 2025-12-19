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
module.exports = myUser;