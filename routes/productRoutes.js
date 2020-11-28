const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/:category/:id/detail", productController.detail);

module.exports = router;
