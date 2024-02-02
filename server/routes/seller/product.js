const express = require('express');
const { productSellers } = require('../../controllers/seller/product');
const router = express.Router();

router.post('/product-sellers', productSellers);

module.exports = router;