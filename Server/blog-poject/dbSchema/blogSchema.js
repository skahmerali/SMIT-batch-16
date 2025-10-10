const mongoose = require("mongoose");
let blogsSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    blogDescripation: {
        type: String,
        required: true,
    },
    autherName: {
        type: String,
        required: true,
    },
});

let blogSchema = mongoose.model('blogs', blogsSchema);


module.exports = {
    blogSchema
}