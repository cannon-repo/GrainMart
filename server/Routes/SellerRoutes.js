const express = require("express");
const router = express.Router();
const SellerController = require("../Controllers/SellerControllers");

router.post("/register", SellerController.postSellerRegister);

module.exports = router;