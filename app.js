const express = require("express");
const app = express();
const path = require("path");

// Hace que los archivos de /public se vuelvan disponibles para el HTML
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server  running on port 3000.");
});

app.get("/", (req, res) => {
  // path.resolve hace que la ruta sea multiplataforma, evitando problemas con la barra en windows
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("*", (req, res) => {
  res.send("Houston, tenemos un error 404!");
});
