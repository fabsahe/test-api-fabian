require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// Puerto
const PORT = process.env.PORT || 4000;

// Inicialización
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/api/", require("./routes/user_route"));

app.get("/", (req, res) => {
  res.send("La API funciona");
});

// Ejecutar servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto: ${PORT}`);
});
