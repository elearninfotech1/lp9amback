let mongoose = require("mongoose");

let studentShema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
});

module.exports = mongoose.model("users", studentShema);
