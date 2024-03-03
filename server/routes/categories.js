const express = require('express');
const router = express.Router();
const multer = require('multer');
const Categories = require('../controllers/categories');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/categories', upload.single('image'), Categories.categories);
router.get('/categories', Categories.categoriesData);
router.get('/categories-decode', Categories.categoriesDecode);

module.exports = router;