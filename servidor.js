const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/taller1', require('./src/routes/taller1.routes'));
app.use('/api/taller2', require('./src/routes/taller2.routes'));
app.use('/api/taller3', require('./src/routes/taller3.routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor API en puerto ${PORT}`));
