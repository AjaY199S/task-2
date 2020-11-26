var express = require("express");
var router = express.Router();

const _user = require("../app/user.contoller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/signup", _user.signup);
router.post("/login", _user.login);
router.post("/profile", _user.authenticate, _user.updateProfile);

module.exports = router;
