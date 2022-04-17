const express = require("express");
const router = express.Router();
const ProductControllers = require("../Controllers/ProductControllers");

router.get("/:category", ProductControllers.getProductByCategory);

router.get("/find/:ProductId", ProductControllers.getProductByProductId);

module.exports = router;