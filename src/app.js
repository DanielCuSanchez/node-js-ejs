const express = require("express");
const morgan = require("morgan");
const path = require("path");
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);

//Static files
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes/router"));

module.exports = { app, PORT };
