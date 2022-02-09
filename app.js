const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

// const range = require('./range');
// app.use(range());
app.use(cors());

const foodRouter = require('./routes/foodRoute');

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get('/', function (req, res, next) {
//   res.header("Content-Range", "foods 0-20/20");
//   next();
// })

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/foods', foodRouter);

module.exports = app;
