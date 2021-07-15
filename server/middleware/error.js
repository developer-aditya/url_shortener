const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;

	// Log For Developers
	console.log(err);

	// Mongoose Bad ObjectID Error
	if (err.name === 'CastError') {
		const message = `Wrong Formatted MongoDB ID: ${err.value}`;
		error = new ErrorResponse(message, 400);
	}

	//  Mongoose Duplicate Key Error
	if (err.code === 11000) {
		const message = ` Long Url Already Exists in Record`;
		error = new ErrorResponse(message, 400);
	}

	// Mongoose Validation Error
	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((value) => value.message);
		error = new ErrorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message,
	});
};

module.exports = errorHandler;
