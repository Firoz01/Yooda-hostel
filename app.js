const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());

const foodRouter = require("./routes/foodRoute");
const studentRouter = require("./routes/studentRoute");
const distributionRouter = require("./routes/distributionRoute");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/foods", foodRouter);
app.use("/students", studentRouter);
app.use("/distribution", distributionRouter);
module.exports = app;
