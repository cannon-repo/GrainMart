const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserControllers");
const UserDataController = require("../Controllers/UserDataControllers");

router.post("/register", UserController.postRegister);

router.post("/login", UserController.postLogin);

router.get("/logout", UserController.getLogout);

router.get("/loggeduser", UserController.getLoggedUser);

router.get("/allusers", UserController.authUser, UserController.getAllUsers);

router.post("/addwishlist", UserDataController.addUserWishlistItems);

router.post("/addcartitems", UserDataController.addUserCartItems);

router.post("/deletewishlist", UserDataController.deleteUserWishlistItems);

router.post("/deletecartitems", UserDataController.deleteUserCartItems);

router.get("/getuserwishlist/:UserId", UserDataController.getUserWishlist);

router.get("/getusercart/:UserId", UserDataController.getUserCart);

module.exports = router;