const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  image: String
});

module.exports = mongoose.model("Imagem", ImageSchema);
