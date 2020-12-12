const fs = require("fs");
const path = require("path");

getProducts = () => {
    const dbJson = fs.readFileSync(
        path.resolve(__dirname, "../data/productsDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

const mainController = {
    main: (req, res) => {
        const products = getProducts();

        res.render("index", { products: products });
    },
    search: (req, res) => {
        const database = getProducts();
        let keyword = req.query.busqueda;
        let results = [];

        for (let i = 0; i < database.length; i++) {
            if (
                database[i].name.toLowerCase().includes(keyword.toLowerCase())
            ) {
                results.push(database[i]);
            }
        }

        res.render("product-search", {
            results: results,
            keyword: keyword,
        });
    },
};

module.exports = mainController;
