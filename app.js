const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateMiddleware = require("./middlewares/authenticateMiddleware");

//Middlewares
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(session({ secret: "Mensaje secreto" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authenticateMiddleware);

//Motor de vistas
app.set("view engine", "ejs");
app.set("views", [
    __dirname + "/views",
    __dirname + "/views/users",
    __dirname + "/views/products",
    __dirname + "/views/partials",
]);

// Levantando el servidor
app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

//Rutas
app.use("/", mainRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Setea 'user' dentro de locals para usarla despues
app.locals.user = null;

//404
app.get("*", (req, res) => {
    res.send("Error 404 - No encontramos esta página :/");
});
