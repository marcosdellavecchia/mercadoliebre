const fs = require("fs");
const path = require("path");

function saveUsers(users) {
    const usersJSON = JSON.stringify(users, null, 2);
    fs.writeFileSync(
        path.resolve(__dirname, "../data/usersDataBase.json"),
        usersJSON
    );
}

module.exports = saveUsers;
