const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = new Mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please Add a Name'],
	},
	email: {
		type: String,
		required: [true, 'Please Add an Email'],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please Add a Proper Email',
		],
	},
	password: {
		type: String,
		required: [true, 'Please add a password'],
		minLength: 6,
		select: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.validatePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwt = function () {
	const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		algorithm: 'HS256',
		expiresIn: process.env.JWT_EXPIRE_IN,
	});
	return token;
};

module.exports = Mongoose.model('User', UserSchema, 'userColl');
