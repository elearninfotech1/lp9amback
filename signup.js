let mongoose = require("mongoose");

let employeeShema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
  address: String,
});

module.exports = mongoose.model("signup", employeeShema);
