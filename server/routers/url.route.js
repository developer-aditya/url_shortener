const express = require('express');
const router = express.Router();
const {
	newUrl,
	getAllUrl,
	deleteUrl,
	updateUrl,
	getUrlById,
} = require('../controller/url.controller');
const { protected } = require('../middleware/auth');

router.route('/getall').get(protected, getAllUrl);
router.route('/:id').get(getUrlById);
router.route('/add').post(protected, newUrl);
router.route('/update').put(protected, updateUrl);
router.route('/delete/:id').delete(protected, deleteUrl);

module.exports = router;
