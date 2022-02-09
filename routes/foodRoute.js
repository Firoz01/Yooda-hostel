const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();

router.post("/", foodController.createFood);
router.get("/", foodController.getList, function (req, res, next) {
  res.header("Content-Range", "foods 0-20/20");
  next();
});
router
  .route("/:id")
  .put(foodController.updateFood)
  .delete(foodController.deleteFood);
module.exports = router;
