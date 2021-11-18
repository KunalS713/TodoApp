const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect("mongodb://localhost/todo_dev");
// mongoose.connect("mongodb://localhost");


const db = mongoose.connection;

// handling db connection error
db.on("error", console.error.bind(console, "Error connecting"));

// handling db connection success
db.once("open", function() {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
