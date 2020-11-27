const path = require("path");

const mainController = {
    main: (req, res) => {
        res.render("index");
    },
};

module.exports = mainController;
