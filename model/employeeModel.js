const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeesSchema);

module.exports = Employee;
