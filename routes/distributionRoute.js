const express = require("express");
const distributionController = require("../controllers/distributionController");
const router = express.Router();

router.post("/", distributionController.createDistribution);
router.get("/", distributionController.getList);

module.exports = router;