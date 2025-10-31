const express = require("express");
const { signUp, login, home, updateUser } = require("../controller/auth");
const authrization = require("../middleware/authentication");

const router = express.Router();

router.post("/createUser", signUp);
// middleware
router.post("/login", login);
router.post("/home", authrization, home);
router.put("/userfinder", updateUser);

module.exports = router;
