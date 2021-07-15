const User = require('../model/user.model');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');

// @desc POST user register
// @route /auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	const user = await User.create({ name, email, password });
	setTokenInCookie(user, res, 200, 'User Added Sucessfully');
});

// @desc GET user logout
// @route /auth/logout
// @access public
exports.logout = asyncHandler(async (req, res, next) => {
	res.cookie('token', 'null', {
		httpOnly: true,
		sameSite: true,
		expires: new Date(Date.now() + 1000),
	});
	res.status(200).json({
		success: true,
		msg: 'User Logged Out Sucessfully',
	});
});

// @desc POST user login
// @route /auth/login
// @access public
exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select('+password');
	if (!user) {
		return next(new ErrorResponse(`Invalid Credentials`, 401));
	}

	const verified = await user.validatePassword(password);
	if (!verified) {
		return next(new ErrorResponse(`Invalid Credentials`, 401));
	}

	setTokenInCookie(user, res, 200, 'User Logged In');
});

// @desc GET logged in user
// @route /auth/getme
// @access protected
exports.getMe = asyncHandler(async (req, res, next) => {
	const { name, email } = req.user;
	res.status(200).json({
		success: true,
		msg: 'User Fetched Sucessfully',
		data: { name, email },
	});
});

const setTokenInCookie = (user, res, status, msg) => {
	const token = user.getSignedJwt();
	const options = {
		httpOnly: true,
		sameSite: true,
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
		),
	};

	const { name, email, id } = user;

	res.cookie('token', token, options);
	res.status(200).json({
		success: true,
		msg,
		data: { name, email, id },
	});
};
