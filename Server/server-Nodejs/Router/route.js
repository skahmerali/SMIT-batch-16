const express = require('express');
const { auth, login } = require('../Controllers/userAuth');
const { ageChecker } = require('../Middleware/ageChecker');
// const auth = require('../Controllers/userAuth');
// const login = require('../Controllers/userAuth');
const router = express.Router();

router.get('/', auth);
router.post('/login',ageChecker, login);

module.exports  = router;
