const mongoose = require("mongoose")
// Defining schema
let schemaClass = new mongoose.Schema({
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
    // age: {
    //     type: Number,
    //     required: true
    // },
    // date: new Date.now()
});
// creating model from the schema
let Schema = mongoose.model('userData', schemaClass);

module.exports = {
    Schema
}