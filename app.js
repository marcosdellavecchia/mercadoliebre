const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

const mainRoutes = require("./routes/mainRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");
const productRoutes = require("./routes/productRoutes");

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

app.use("/", mainRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/products", productRoutes);

app.get("*", (req, res) => {
    res.send("Error 404 - No encontramos esta página :/");
});
