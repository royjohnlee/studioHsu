
const express = require('express');
const router = express.Router();
const emailCtrl = require('../../controllers/api/email');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', emailCtrl.create);
router.put('/:id', emailCtrl.update)
router.delete('/:id', emailCtrl.delete)


module.exports = router;
