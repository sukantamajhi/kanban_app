const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.connUri)

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("Database is connected successfully");
});

conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});

conn.on("error", (err) => console.error(err, "connection error:"));

module.exports = conn;
