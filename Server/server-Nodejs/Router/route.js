const express = require('express');
const { auth, login, singup } = require('../Controllers/userAuth');
const { ageChecker } = require('../Middleware/ageChecker');
// const auth = require('../Controllers/userAuth');
// const login = require('../Controllers/userAuth');
const router = express.Router();

router.get('/', auth);
router.post('/login', ageChecker, login);
router.post('/signup', singup);

module.exports = router;
