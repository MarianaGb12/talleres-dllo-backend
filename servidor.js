const express = require("express");
const cors = require("cors");

const taller1 = require("./taller1");
const taller2 = require("./taller-02");
const taller3 = require("./taller-03");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/taller1", (req, res) => {
  const resultado = taller1.ejecutar(); 
  res.json({ resultado });
});

app.get("/api/taller2", (req, res) => {
  const resultado = taller2.ejecutar();
  res.json({ resultado });
});

app.get("/api/taller3", (req, res) => {
  const resultado = taller3.ejecutar();
  res.json({ resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor API en puerto ${PORT}`));
