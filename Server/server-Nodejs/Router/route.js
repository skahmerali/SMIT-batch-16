const express = require('express');
const { auth, login, singup, userDetails } = require('../Controllers/userAuth');
const { ageChecker } = require('../Middleware/ageChecker');
// const auth = require('../Controllers/userAuth');
// const login = require('../Controllers/userAuth');
const router = express.Router();

router.get('/', auth);
router.post('/login', login);
router.post('/signup', singup);
router.get('/userDetails', userDetails);

module.exports = router;
