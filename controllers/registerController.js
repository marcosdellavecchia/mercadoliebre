const path = require("path");

const registerController = {
    main: (req, res) => {
        res.render("register");
    },
};

module.exports = registerController;
