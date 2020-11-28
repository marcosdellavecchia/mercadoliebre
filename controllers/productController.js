const fs = require("fs");
const path = require("path");

getProducts = () => {
    const dbJson = fs.readFileSync(
        path.resolve(__dirname, "../data/productsDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

const productController = {
    detail: (req, res) => {
        const products = getProducts();
        const id = req.params.id;

        const toThousand = (n) =>
            n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const selectProduct = products.find((product) => {
            return id == product.id;
        });
        res.render("product-detail", {
            product: selectProduct,
            toThousand: toThousand,
        });
    },
};

module.exports = productController;
