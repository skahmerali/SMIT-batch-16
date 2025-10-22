const express = require("express");
const { userAuth, login } = require("../controller/auth");
const authrization = require("../middleware/authentication");

const router = express.Router();

router.post('/createUser', userAuth);
// middleware
router.post('/login', authrization, login);


module.exports = router;