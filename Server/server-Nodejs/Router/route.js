const express = require('express');
const app = express();
const { auth, login } = require('../Controllers/userAuth');
// const auth = require('../Controllers/userAuth');
// const login = require('../Controllers/userAuth');
const router = express.Router();

router.get('/', auth);
router.post('/login', login);

module.exports  = router;
