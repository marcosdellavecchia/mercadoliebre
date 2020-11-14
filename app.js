const express = require("express");
const app = express();
const path = require("path");

// Hace que los archivos de /public se vuelvan disponibles para el HTML
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

// el metodo 'all' permite que tambien se acepte la solicitud POST (en este caso, para los datos de login y register)
app.all("/", (req, res) => {
    // path.resolve hace que la ruta sea multiplataforma, evitando problemas con la barra en windows
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});

app.get("*", (req, res) => {
    res.send("Error 404 - No encontramos esta página :/");
});
