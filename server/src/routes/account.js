const express = require("express");
const router = express.Router();

const loginController = require("../controllers/LoginController");
// const middlewareController = require("../controllers/MiddlewareController");

//LOGIN
router.get("/login", loginController.login);
router.post("/login", loginController.loginAccount);
router.post("/register", loginController.register);

module.exports = router;
