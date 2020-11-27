const path = require("path");

const loginController = {
    main: (req, res) => {
        res.render("login");
    },
};

module.exports = loginController;
