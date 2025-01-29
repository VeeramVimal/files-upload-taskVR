const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const Db_connection = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

Db_connection;

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", router);

app.use((req, res, next) => {
    next(new Error("Not found"));
});

module.exports = app;