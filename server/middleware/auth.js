const ErrorResponse = require('../utils/errorResponse');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

exports.protected = async (req, res, next) => {
	let token;
	if (req.cookies.token) {
		token = req.cookies.token;
	}

	if (!token) {
		return next(new ErrorResponse('uh-oh! User Not Logged In', 401));
	}
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(payload.id);
		next();
	} catch (error) {
		next(new ErrorResponse(error.message, 401));
	}
};
