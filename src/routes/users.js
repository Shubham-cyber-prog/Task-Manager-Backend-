const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');

const usersController = new UsersController();

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);

module.exports = router;
