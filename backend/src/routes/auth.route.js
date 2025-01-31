const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();

router.route("/login").get((req, res) => {
    console.log("asdfasdfas");
    res.send({ msg: "hi dude"})
});

router.route("/register").post(authController.userRegister);
router.route("/login").post(authController.userLogin);


module.exports = router;