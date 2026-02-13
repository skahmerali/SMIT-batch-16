// create a function which is responsible for handling all the product related operations like create, update, delete and get products. Only admin can create, update and delete products while both admin and user can get products. Use role based access control to restrict the access to certain routes based on the user's role.

const Product = require('../model/productModel');

const addProduct = async (req, res) => {
    try {
        const { name, description, price, discountPrice, category, brand, sku, stock, isActive } = req.body;
        const newProduct = await Product.create({ name, description, price, discountPrice, category, brand, sku, stock, isActive });
        console.log(newProduct, 'line 9')
        // const result = await newProduct.save();
        console.log(newProduct, 'lin11')
        res.status(200).json({ message: "Product created", success: true, newProduct })
    } catch (err) {
        res.send({ message: "Product creation failed", err })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: "Product gatted", success: true, products })
    } catch (err) {
        res.json(400).json({ message: "Product creation failed" })
    }
}

module.exports = { addProduct, getProducts };
