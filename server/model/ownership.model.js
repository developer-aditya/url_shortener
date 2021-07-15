const Mongoose = require('mongoose');

const OwnershipSchema = new Mongoose.Schema({
	user: {
		type: Mongoose.ObjectId,
		ref: 'User',
		required: true,
	},
	url: {
		type: Mongoose.ObjectId,
		ref: 'Url',
		required: true,
	},
});

OwnershipSchema.index({ user: 1, url: 1 }, { unique: true });

module.exports = Mongoose.model('Owner', OwnershipSchema, 'ownerColl');
