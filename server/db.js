const Mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await Mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});

	console.log(`Connected To ${conn.connection.host}:${conn.connection.port} `);
};

module.exports = connectDB;
