const express = require('express');
const router = express.Router();
const { Categories, categoriesData } = require('../controllers/categories');

// router.post('/upload', Categories);
router.get('/categories', categoriesData);
router.post('/categories', Categories);

module.exports = router;