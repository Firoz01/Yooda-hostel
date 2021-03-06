const Food = require("../model/foodModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createFood = catchAsync(async (req, res, next) => {
  const newFood = await Food.create(req.body);
  return res.status(200).json({
    status: "success",
    data: newFood,
  });
});

exports.updateFood = catchAsync(async (req, res, next) => {
  const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!food) {
    return next(new AppError("No food found with that Id", 404));
  }
  res.status(200).json(food);
});

exports.getList = catchAsync(async (req, res, next) => {
  const foods = await Food.find();
  const total = await Food.count();
  res.set("x-total-count", total);
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  res.json(foods);
});
exports.getAFood = catchAsync(async (req, res, next) => {
  const food = await Food.findById(req.params.id);
  res.status(200).json(food);
});
exports.deleteFood = catchAsync(async (req, res, next) => {
  const doc = await Food.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError("No food document found with that Id", 404));
  }
  res.status(200).json(doc);
});
