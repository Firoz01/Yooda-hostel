const mongoose = require("mongoose");

const distributionSchema = new mongoose.Schema(
  {
    // date: {
    //   type: Date,
    //   required: [true, "Must have date"],
    // },
    shift: {
      type: Boolean,
      default: false,
      required: [true, "Must have shift"],
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    student: {
      type: mongoose.Types.ObjectId,
      ref: "Student",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Distribution = mongoose.model("Distribution", distributionSchema);
module.exports = Distribution;
