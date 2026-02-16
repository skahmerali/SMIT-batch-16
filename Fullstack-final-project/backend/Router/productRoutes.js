const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const { addProduct, getProducts, deleteProduct , updateProduct} = require('../Controllers/productController');

router.post("/add", addProduct);
router.get("/get", getProducts);
router.delete("/deleteProduct", deleteProduct)
router.put("/updateProduct", updateProduct)

module.exports = router