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
    showCreate: (req, res) => {
        res.render("product-create");
    },
    create: (req, res) => {
        const message = "Product Created: " + JSON.stringify(req.body);
        res.send(message);
    },
    store: (req, res) => {
        // Ruta de almacenamiento de productos
    },
    showEdit: (req, res) => {
        const products = getProducts();
        const requiredProducts = products.find((product) => {
            return product.id == req.params.id;
        });

        if (requiredProducts == null) {
            return res.send("Error 404 - Producto no encontrado");
        }
        res.render("product-edit", {
            product: requiredProducts,
            toThousand: toThousand,
        });
    },
    edit: (req, res) => {
        const message = "Product Edited: " + JSON.stringify(req.body);
        res.send(message);
    },
    update: (req, res) => {
        // Ruta de recepcion de formulario update
    },
    destroy: (req, res) => {
        // Ruta de eliminacion de producto
    },
};

module.exports = productController;
