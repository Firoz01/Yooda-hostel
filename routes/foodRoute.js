const express = require("express");
const foodController = require("../controllers/foodController");
const router = express.Router();

router.post("/", foodController.createFood);
router.get("/", foodController.getList)
router
  .route("/:id")
  .get(foodController.getAFood)
  .put(foodController.updateFood)
  .delete(foodController.deleteFood);
module.exports = router;
