const express = require("express");
const User = require("../controllers/user")

const router = express.Router();

router.route("/register")
    .post(User.registerUser)

module.exports = router;