const express = require("express");
const viewController = require("../controller/viewController");

const router = express.Router();

router.route("/home").get(viewController.viewHome);
router.route("/register").get(viewController.viewRegister);
router.route("/employees").get(viewController.viewEmployees);

module.exports = router;
