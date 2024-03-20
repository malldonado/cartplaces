const Categories = require("../models/Categories");

const categories = async (req, res) => {
  try {
    const category = await new Categories({
      // title: req.body.title,
      // filename: req.file.originalname,
      // contentType: req.file.mimetype,
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
    const data = await Categories.find();
    console.log(data)
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  categories,
  categoriesData
};
