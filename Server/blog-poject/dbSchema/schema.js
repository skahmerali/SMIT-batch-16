const mongoose = require("mongoose");
let signupSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
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
});
let loginSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

let userSchema = mongoose.model('users', signupSchema);
let loginModal = mongoose.model('users', loginSchema);

module.exports = {
    userSchema, loginModal
}