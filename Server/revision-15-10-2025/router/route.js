const express = require("express");
const { signUp, login } = require("../controller/auth");
const authrization = require("../middleware/authentication");

const router = express.Router();

router.post("/createUser", signUp);
// middleware
router.post("/login", login);

module.exports = router;
