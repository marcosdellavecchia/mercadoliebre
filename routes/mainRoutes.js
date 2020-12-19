const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

const authenticate = require("../middlewares/authenticateMiddleware");

router.all("/", authenticate, mainController.main);

router.get("/search", mainController.search);

module.exports = router;
