function assertAdminMiddleware(req, res, next) {
    if (!res.locals.user.admin) {
        res.redirect("/auth/login");
    } else {
        next();
    }
}

module.exports = assertAdminMiddleware;
