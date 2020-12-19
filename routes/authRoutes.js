const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "public/profile_pics/" });

const authController = require("../controllers/authController");

router.get("/login", authController.showLogin);
router.post("/login", authController.login);

router.get("/register", authController.showRegister);
router.post("/register", upload.single("avatar"), authController.register);

module.exports = router;
