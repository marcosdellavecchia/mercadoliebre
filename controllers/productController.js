const fs = require("fs");
const path = require("path");

const getProducts = () => {
    const dbJson = fs.readFileSync(
        path.resolve(__dirname, "../data/productsDataBase.json"),
        { encoding: "utf-8" }
    );
    return JSON.parse(dbJson);
};

const toThousand = (n) =>
    n
        .toString()
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    index: (req, res) => {
        const products = getProducts();
        res.render("product-list", { products: products });
    },
    detail: (req, res) => {
        const products = getProducts();

        const selectProduct = products.find((product) => {
            return req.params.id == product.id;
        });
        res.render("product-detail", {
            product: selectProduct,
            toThousand: toThousand,
        });
    },
    create: (req, res) => {
        res.render("product-create");
    },
    store: (req, res) => {
        // Ruta de almacenamiento de productos
    },
    edit: (req, res) => {
        res.render("product-edit"),
            {
                product: selectProduct,
                toThousand: toThousand,
            };
    },
    update: (req, res) => {
        // Ruta de recepcion de formulario update
    },
    destroy: (req, res) => {
        // Ruta de eliminacion de producto
    },
};

module.exports = productController;
