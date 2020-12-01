const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");

router.get("/", loginController.main);
router.post("/", loginController.send);

module.exports = router;
