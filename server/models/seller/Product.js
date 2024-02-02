const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    nameProduct: {
      type: String,
      required: [true, "Name product is required"],
      trim: true,
      text: true,
    },
    valueProduct: {
      type: Number,
      required: [true, "Value product is required"],
      trim: true,
    },
    discountProduct: {
      type: Number,
      required: [true, "Discount product is required"],
      trim: true,
    },
    imageProduct: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
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

module.exports = mongoose.model("Product", userSchema);
