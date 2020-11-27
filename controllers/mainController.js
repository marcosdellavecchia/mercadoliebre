const fs = require("fs");
const path = require("path");

const mainController = {
    main: (req, res) => {
        getProducts = () => {
            const dbJson = fs.readFileSync(
                path.resolve(__dirname, "../data/productsDataBase.json"),
                { encoding: "utf-8" }
            );
            return JSON.parse(dbJson);
        };
        const products = getProducts();

        res.render("index", { products: products });
    },
};

module.exports = mainController;
