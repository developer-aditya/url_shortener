const express = require('express');
const router = express.Router();
const { protected } = require('../middleware/auth');
const {
	login,
	register,
	logout,
	getMe,
} = require('../controller/auth.controller');

router.route('/getme').get(protected, getMe);

router.route('/logout').get(logout);
router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
