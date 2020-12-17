const fs = require("fs");
const path = require("path");

const getProducts = (req, res, next) => {
    const dbJson = fs.readFileSync(
        path.resolve(__dirname, "../data/productsDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
    next();
};

module.exports = getProducts;
