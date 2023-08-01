const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Puedes cambiar el puerto aquí si lo deseas

// Ruta principal que muestra "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
