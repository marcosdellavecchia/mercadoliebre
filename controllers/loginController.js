const loginController = {
    main: (req, res) => {
        res.render("login");
    },
    send: (req, res) => {
        res.redirect("login");
    },
};

module.exports = loginController;
