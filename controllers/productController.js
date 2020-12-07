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
        //1. Lee lo que ya hay en la db y lo descomprime en un array
        const database = getProducts();

        //2. Itera el JSON para agregar un nuevo ID a cada producto. Agrega los datos que recibe del formulario a newProduct.
        let newProduct = null;

        for (let i = 0; i < database.length; i++) {
            newProduct = {
                id: database[i].id + 1,
                name: req.body.name,
                description: req.body.description,
                price: Number(req.body.price),
                discount: Number(req.body.discount),
                image: req.body.image,
            };
        }

        //3. Agrega newProduct al final del array database
        database.push(newProduct);

        //4. Vuelve a pasar a string la base de datos para escribir el contenido nuevo.
        const databaseJSON = JSON.stringify(database);

        //5. Escribe el nuevo contenido en la base de datos sobrescribiendo lo anterior
        fs.writeFileSync(
            __dirname + "/../data/productsDataBase.json",
            databaseJSON
        );

        const message = "Product Created: " + JSON.stringify(newProduct);
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
    update: (req, res) => {
        //1. Lee lo que ya hay en la db y lo descomprime en un array
        const database = getProducts();

        //2. Guarda el producto requerido por ID en una variable
        const requiredProduct = database.find((product) => {
            return product.id == req.params.id;
        });

        //3. Crea un producto editado con las modificaciones realizadas conservando el ID original
        const editedProduct = {
            id: requiredProduct.id,
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.body.image,
        };

        //4. Inserta el producto editado en el indice donde se encontraba el producto requerido
        database.splice(database.indexOf(requiredProduct), 1, editedProduct);

        //5. Vuelve a pasar a string la base de datos para escribir el contenido nuevo.
        const databaseJSON = JSON.stringify(database);

        //6. Escribe el nuevo contenido en la base de datos sobrescribiendo lo anterior
        fs.writeFileSync(
            __dirname + "/../data/productsDataBase.json",
            databaseJSON
        );

        const message = "Product Edited: " + JSON.stringify(editedProduct);
        res.send(message);
    },
    showDelete: (req, res) => {
        const products = getProducts();
        const requiredProducts = products.find((product) => {
            return product.id == req.params.id;
        });

        if (requiredProducts == null) {
            return res.send("Error 404 - Producto no encontrado");
        }

        res.render("product-delete", {
            product: requiredProducts,
        });
    },
    delete: (req, res) => {
        const database = getProducts();
        const requiredProduct = database.find((product) => {
            return product.id == req.params.id;
        });

        database.splice(database.indexOf(requiredProduct), 1);

        const databaseJSON = JSON.stringify(database);

        fs.writeFileSync(
            __dirname + "/../data/productsDataBase.json",
            databaseJSON
        );

        res.send("Product deleted: " + JSON.stringify(requiredProduct));
    },
};

module.exports = productController;
