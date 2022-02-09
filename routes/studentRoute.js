const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.post("/", studentController.createStudent);
router.get("/", studentController.getList, function (req, res, next) {
  res.header("Content-Range", "foods 0-20/20");
  next();
});
router
  .route("/:id")
  .get(studentController.getAStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);
module.exports = router;
