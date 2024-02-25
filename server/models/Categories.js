const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      text: true,
    },
    src: {
      type: String,
      trim: true,
    }
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("Categories", categoriesSchema);
