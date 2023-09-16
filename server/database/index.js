const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sukantamajhi:sukantamajhi123@cluster0.ckvumem.mongodb.net/taskcollection?retryWrites=true&w=majority")

var conn = mongoose.connection;

conn.on("connected", function () {
    console.log("Database is connected successfully");
});

conn.on("disconnected", function () {
    console.log("database is disconnected successfully");
});

conn.on("error", (err) => console.error(err, "connection error:"));

module.exports = conn;
