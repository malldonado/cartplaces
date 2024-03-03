const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema(
  {
    title: String,
    filename: String,
    contentType: String,
    image: Buffer
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("Categories", categoriesSchema);
