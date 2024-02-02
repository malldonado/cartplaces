const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    nameSeller: {
      type: String,
      required: [true, "Name seller is required"],
      trim: true,
      text: true,
    },
    cpfSeller: {
        type: Number,
        required: [true, "CPF seller is required"],
        trim: true
      },
    // search: [
    //   {
    //     user: {
    //       type: ObjectId,
    //       ref: "User",
    //     },
    //   },
    // ],
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("Seller", userSchema);
