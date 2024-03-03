const express = require("express");
const Image = require("../controllers/image");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

router.post('/image', upload.single('imagem'), Image.uploadImage);

module.exports = router;
