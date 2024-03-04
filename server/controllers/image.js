const Image = require("../models/Image");

const uploadImage = async (req, res) => {
  Image.create({image: req.file.filename})
  .then(result => res.json(result))
  .catch(err => console.log(err))
};

const getImage = async (req, res) => {
  Image.find()
  .then(images => res.json(images))
  .catch(err => res.json(err))
};

module.exports = {
  uploadImage,
  getImage
};
