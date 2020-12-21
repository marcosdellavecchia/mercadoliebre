const getUsers = require("../utils/getUsers");

// Guarda la info del usuario logueado en locals.user

function authenticateMiddleware(req, res, next) {
    const id = req.session.loggedUserId;

    if (!id) return next();

    const users = getUsers();

    const loggedUser = users.find((user) => {
        return user.id == id;
    });

    if (!loggedUser) {
        delete req.session.loggedUserId;
        return next();
    }

    res.locals.user = loggedUser;

    next();
}

module.exports = authenticateMiddleware;
