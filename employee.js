let mongoose = require("mongoose");

let employeeShema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  salary: Number,
  address: String,
});

module.exports = mongoose.model("employees", employeeShema);
