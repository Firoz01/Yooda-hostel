const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "food Item must have name"],
    },
    price: {
      type: Number,
      required: [true, "food Item must have price"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
