const Student = require("../model/studentModel");
const catchAsync = require("../utils/catchAsync");

exports.createStudent = catchAsync(async (req, res, next) => {
  const newStudent = await Student.create(req.body);
  return res.status(200).json({
    status: "success",
    data: newStudent,
  });
});

exports.updateStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!student) {
    return next(new AppError("No student found with that Id", 404));
  }
  res.status(200).json(student);
});

exports.getList = catchAsync(async (req, res, next) => {
  const students = await Student.find();
  const total = await Student.count();
  res.set("x-total-count", total);
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  res.json(students);
});

exports.getAStudent = catchAsync(async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  res.status(200).json(student);
});
exports.deleteStudent = catchAsync(async (req, res, next) => {
  const doc = await Student.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError("No Student document found with that Id", 404));
  }
  res.status(200).json(doc);
});