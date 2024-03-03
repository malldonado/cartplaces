const Categories = require("../models/Categories");
const { fromByteArray, toByteArray } = require('base64-js');

const categories = async (req, res) => {
  try {
    const category = await new Categories({
      title: req.body.title,
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      image: req.file.buffer,
    }).save();

    res.json({
      success: true,
      category: category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const categoriesData = async (req, res) => {
  try {
    const data = await Categories.find({});
    res.json(data);
    // const image = data.image.replace(/^data:image\/\w+;base64,/, '');
    // const buffer = Buffer.from(image, 'base64');

    // Salva o buffer como uma imagem
    // fs.writeFileSync('imagem_decodificada.jpg', buffer);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const categoriesDecode = async (req, res) => {
  try {
    const decoded = Buffer.from(toByteArray(Categories.image), 'utf8').toString();
    res.json(decoded)
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  categories,
  categoriesData,
  categoriesDecode
};
