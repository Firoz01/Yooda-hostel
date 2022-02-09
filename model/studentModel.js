const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Student must have name"],
    },
    roll: {
      type: Number,
      required: [true, "Student must have roll"],
    },
    age: {
      type: Number,
      required: [true, "Student must have age"],
    },
    class: {
      type: String,
      required: [true, "Student must have class"],
    },
    hall: {
      type: String,
      required: [true, "Student must have hall"],
    },
    isStatus: {
      type: Boolean,
      default: false,
      required: [true, "Student must have status"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
