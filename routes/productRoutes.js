const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const productController = require("../controllers/productController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + "/../public/images/products");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

router.get("/", productController.index);

router.get("/create", productController.showCreate);

router.get("/edit/:id", productController.showEdit);

router.get("/delete/:id", productController.showDelete);

router.get("/detail/:id/:category?", productController.detail);

router.post("/", upload.any(), productController.create);

router.post("/", productController.store);

router.put("/:id", productController.update);

router.delete("/:id", productController.delete);

module.exports = router;
