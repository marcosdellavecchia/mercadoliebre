function assertLoggedIn(req, res, next) {
    if (!req.loggedUser) {
        res.redirect("/auth/login");
    } else {
        next();
    }
}

module.exports = assertLoggedIn;
