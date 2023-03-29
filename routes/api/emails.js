
const express = require('express');
const router = express.Router();
const emailCtrl = require('../../controllers/api/email');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', emailCtrl.create);


module.exports = router;
