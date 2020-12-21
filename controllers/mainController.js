const getProducts = require("../utils/getProducts");

const mainController = {
    main: (req, res) => {
        const products = getProducts();
        res.render("index", {
            products: products,
        });
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
