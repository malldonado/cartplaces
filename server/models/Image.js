const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  image: String
});

module.exports = mongoose.model("Imagem", imageSchema);
