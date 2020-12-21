const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

const authenticateMiddleware = require("../middlewares/authenticateMiddleware");

router.all("/", mainController.main);

router.get("/search", mainController.search);

module.exports = router;
