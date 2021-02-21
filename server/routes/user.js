const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/user.js');

router.post('/signin', usercontroller.signin);
router.post('/signup', usercontroller.signup);

module.exports = router;
