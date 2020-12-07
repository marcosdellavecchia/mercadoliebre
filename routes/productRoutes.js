const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.index);

router.get("/create", productController.showCreate);

router.get("/edit/:id", productController.showEdit);

router.get("/delete/:id", productController.showDelete);

router.get("/detail/:id/:category?", productController.detail);

router.post("/", productController.create);

router.post("/", productController.store);

router.put("/:id", productController.update);

router.delete("/:id", productController.delete);

module.exports = router;
