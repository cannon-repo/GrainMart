const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserControllers");

router.post("/register", UserController.postRegister);

router.post("/login", UserController.postLogin);

router.get("/logout", UserController.getLogout);

router.get("/loggeduser", UserController.getLoggedUser);

router.get("/allusers", UserController.authUser, UserController.getAllUsers);

module.exports = router;