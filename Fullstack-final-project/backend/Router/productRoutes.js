const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const { addProduct, getProducts } = require('../Controllers/productController');

router.post("/add", addProduct);
router.get("/get", getProducts);

module.exports = router