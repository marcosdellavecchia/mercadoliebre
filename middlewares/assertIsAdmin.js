function assertIsAdmin(req, res, next) {
    if (!req.loggedUser.admin) {
        res.redirect("/auth/login");
    } else {
        next();
    }
}

module.exports = assertIsAdmin;
