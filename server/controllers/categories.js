const Categories = require("../models/Categories");
const categoriesData = require("../models/Categories");

exports.Categories = async (req, res) => {
    try {
    const {
        name,
        src
    } = req.body;

    const categories = await new Categories({
        name,
        src
    }).save();
    res.json({
        success: true,
        user: categories
    });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

exports.categoriesData = async (req, res) => {
  try {
    const data = await categoriesData.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
