const express = require("express")
const router = express.Router()
const auth = require("../middleware/authMiddleware")
const verifyAdmin = require("../middleware/verifyAdmin")
const { addProduct, getProducts, deleteProduct , updateProduct} = require('../Controllers/productController');

router.post("/add", auth, verifyAdmin, addProduct);
router.get("/getProduct", getProducts);
router.delete("/deleteProduct", deleteProduct)
router.put("/updateProduct", updateProduct)

module.exports = router