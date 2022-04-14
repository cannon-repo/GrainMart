const express = require("express");
const router = express.Router();
const ProductControllers = require("../Controllers/ProductControllers");

router.get("/:category", ProductControllers.getProductByCategory);

module.exports = router;