const express = require('express');
const { seller } = require('../controllers/seller');
const router = express.Router();

router.post('/seller', seller);

module.exports = router;