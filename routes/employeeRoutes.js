const express = require("express");
const employeeController = require("../controller/employeeController");

const router = express.Router();

router
  .route("/createEmployee")
  .post(employeeController.createEmployee);

module.exports = router;
