const express = require("express");
const { userData, signup } = require("../controller/auth/auth");

const router = express.Router();

router.get('/helloWorld', (req, res) => {
    res.end("hello world routing is successfully Mount!!!!")
});
router.post('/user', (req, res) => {
    res.send({
        status: 200,
        message: "users post succcessfully",
        data: "hello user"
    })
});
// add ageChecker middleware before the main function 
router.post('/userData', userData);
router.post('/signup', signup);


module.exports = router;