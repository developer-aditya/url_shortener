const Mongoose = require('mongoose');

const UrlSchema = new Mongoose.Schema({
	long: {
		type: String,
		required: [true, 'Please provide a Long URL'],
		index: { unique: true },
	},
	short: {
		type: String,
	},
	counter: {
		type: Number,
		index: { unique: true },
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = Mongoose.model('Url', UrlSchema, 'urlColl');
