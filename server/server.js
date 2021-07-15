const express = require('express');
const connectDB = require('./db');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const dotenv = require('dotenv');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

dotenv.config({ path: path.resolve(process.cwd(), 'config', 'config.env') });
connectDB();

// Serving static build files from client
app.use(express.static(path.resolve(process.cwd(), 'client', 'build')));

// Initialize Routers
const authRouter = require('./routers/auth.route');
const urlRouter = require('./routers/url.route');
const { rerouteUrl } = require('./controller/url.controller');
const { readFileSync } = require('fs');

// Middlware to read body and cookie data
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging request
app.use(logger);

// Mount Routers
app.get('/', (req, res) => {
	res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'));
});
app.get('/:shortened', rerouteUrl);
app.use('/auth', authRouter);
app.use('/url', urlRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Running on PORT: ${PORT}`));
