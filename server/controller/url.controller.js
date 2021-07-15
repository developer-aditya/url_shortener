const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Url = require('../model/url.model');
const Ownership = require('../model/ownership.model');
const Mongoose = require('mongoose');

// @desc GET url of a user by Id
// @route /url/:id
// @access public
exports.getUrlById = asyncHandler(async (req, res, next) => {
	const url = await Url.findById(req.params.id);
	if (!url) {
		return next(new ErrorResponse('No Url record Found', 404));
	}
	res.status(200).json({
		success: true,
		msg: 'Url fetched sucessfully',
		data: url,
	});
});

// @desc GET url of a user
// @route /url/getall
// @access protected
exports.getAllUrl = asyncHandler(async (req, res, next) => {
	const url = await Ownership.find({ user: req.user._id }).populate({
		path: 'url',
		select: 'long short counter createdAt __v',
	});

	res.status(200).json({
		success: true,
		msg: 'Url fetched sucessfully',
		data: url,
	});
});

// @desc POST new url to db
// @route /url/add
// @access protected
exports.newUrl = asyncHandler(async (req, res, next) => {
	const { long } = req.body;
	let url = await Url.findOne({ long });
	if (!url) url = await Url.create({ long });
	await Ownership.create({ url: url._id, user: req.user._id });

	res.status(200).json({
		success: true,
		msg: 'Url Added Sucessfully',
		data: url._id,
	});
});

// @desc re-route to long url
// @route /:shortened
// @access public
exports.rerouteUrl = asyncHandler(async (req, res, next) => {
	const url = req.params.shortened;
	const counter = getCounter(url);

	const longurl = await Url.findOne({ counter });
	if (!longurl) {
		res.redirect('/');
	}
	res.redirect(longurl.long);
});

// @desc PUT url to db
// @route /url/update
// @access protected
exports.updateUrl = asyncHandler(async (req, res, next) => {
	const { long, short } = req.body;
	const counter = getCounter(short);

	const oldLong = await Url.findOne({ counter });

	// establish new ownership if doesnt exists else updating ownership
	let url = await Url.findOne({ long });
	if (!url) url = await Url.create({ long });
	await Ownership.findOneAndUpdate(
		{ url: oldLong._id, user: req.user._id },
		{ url: url._id },
	);

	// Removing url if it has no relationship
	let exists = await Ownership.exists({ url: oldLong._id });
	if (!exists) await Url.findByIdAndDelete(oldLong._id);

	res.status(200).json({
		success: true,
		msg: 'Url Updated Sucessfully',
		data: url._id,
	});
});

// @desc DELETE url from db
// @route /url/delete/:id
// @access protected
exports.deleteUrl = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	await Ownership.findOneAndDelete({ url: id, user: req.user._id });

	const exists = await Ownership.exists({ url: id });
	if (!exists) {
		await Url.findByIdAndDelete(id);
	}

	res.status(200).json({
		success: true,
		msg: 'Url Deleted Sucessfully',
		data: {},
	});
});

const getCounter = (url) => {
	let counter = 0;
	// Decoding HANaja8 to its corresponding integer
	for (let i = 0; i < url.length; i++) {
		if (url[i] >= 'a' && url[i] <= 'z')
			counter = counter * 62 + url.charCodeAt(i) - 97;
		else if (url[i] >= 'A' && url[i] <= 'Z')
			counter = counter * 62 + url.charCodeAt(i) - 65 + 26;
		else if (url[i] >= '0' && url[i] <= '9')
			counter = counter * 62 + url.charCodeAt(i) - 65 + 52;
	}
	return counter;
};
