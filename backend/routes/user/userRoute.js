const express = require('express');
const router = express.Router();

const userRegisterController = require('../../controllers/userController');




router.post('/signup', userRegisterController)

module.exports = router;