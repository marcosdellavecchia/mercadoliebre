const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const productController = require("../controllers/productController");
const assertLoggedMiddleware = require("../middlewares/assertLoggedMiddleware")
const assertAdminMiddleware = require('../middlewares/assertAdminMiddleware');
const logDBMiddleware = require("../middlewares/logDBMiddleware");

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

router.get("/create", assertLoggedMiddleware, productController.showCreate);

router.get("/edit/:id", assertAdminMiddleware, productController.showEdit);

router.get("/delete/:id", assertAdminMiddleware, productController.showDelete);

router.get("/detail/:id/:category?", productController.detail);

router.post("/", [upload.any(), logCreateMiddleware], productController.create);

router.post("/", productController.store);

router.put("/:id", logEditMiddleware, productController.update);

router.delete("/:id", logDeleteMiddleware, productController.delete);

module.exports = router;
