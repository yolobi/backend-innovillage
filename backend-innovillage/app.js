require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const URL = "/api/v1";

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var desaRouter = require("./routes/desa");
var innovatorRouter = require("./routes/innovator");
var inovasiRouter = require("./routes/inovasi");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${URL}/`, indexRouter);
app.use(`${URL}/auth`, authRouter);
app.use(`${URL}/desa`, desaRouter);
app.use(`${URL}/innovator`, innovatorRouter);
app.use(`${URL}/inovasi`, inovasiRouter);

module.exports = app;
