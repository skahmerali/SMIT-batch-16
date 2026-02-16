const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    discountPrice: {
        type: Number,
        min: 0,
    },

    category: {
        type: String,
        
        ref: "Category",
        required: true,
    },

    brand: {
        type: String,
        trim: true,
    },

    sku: {
        type: String,
        unique: true,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },

    // images: [
    //   {
    //     url: { type: String, required: true },
    //     altText: { type: String },
    //   },
    // ],

    // ratingsAverage: {
    //   type: Number,
    //   min: 0,
    //   max: 5,
    //   default: 0,
    // },

    // ratingsCount: {
    //   type: Number,
    //   default: 0,
    // },

    // isFeatured: {
    //   type: Boolean,
    //   default: false,
    // },

    isActive: {
        type: Boolean,
        default: true,
    },

    // tags: [String],
},
    // {
    //     timestamps: true, // adds createdAt & updatedAt
    // }
);

const ProductModel = model("Products", ProductSchema)

module.exports = ProductModel
