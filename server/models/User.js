const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    cpf: {
      type: Number,
      required: [true, "cpf is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ]
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("User", userSchema);
