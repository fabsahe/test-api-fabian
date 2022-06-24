const express = require("express");
const router = express.Router();

const { newUser } = require("../controllers/user_controller");

router.route("/user/new").post(newUser);

module.exports = router;
