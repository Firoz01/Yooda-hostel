const Distribution = require("../model/distributionModel");
const catchAsync = require("../utils/catchAsync");

exports.createDistribution = catchAsync(async (req, res, next) => {
  const newDistribution = await Distribution.create(req.body);
  res.status(200).json(newDistribution);
});

exports.getList = catchAsync(async (req, res, next) => {
  const distribution = await Distribution.find();
  res.json(distribution);
});
