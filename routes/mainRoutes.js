const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.all("/", mainController.main);

module.exports = router;
