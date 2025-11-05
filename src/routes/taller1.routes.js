const express = require('express');
const router = express.Router();

const { convertidorTemp, resolvedor, mejorParidad, peorParidad } = require('../talleres/taller1');

router.post('/convertidorTemp', (req, res) => {
  const { celsius } = req.body;
  if (typeof celsius !== 'number') return res.status(400).json({ error: 'celsius debe ser un número' });
  const resultado = convertidorTemp(celsius);
  res.json({ resultado });
});

router.post('/resolvedor', (req, res) => {
  const { a, b, c, signo } = req.body;
  if ([a, b, c].some(x => typeof x !== 'number')) return res.status(400).json({ error: 'a, b, c deben ser números' });
  const resultado = resolvedor(a, b, c, signo);
  res.json({ resultado });
});

router.post('/mejorParidad', (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number') return res.status(400).json({ error: 'n debe ser un número' });
  const resultado = mejorParidad(n);
  res.json({ resultado });
});

router.post('/peorParidad', (req, res) => {
  const { n } = req.body;
  if (typeof n !== 'number') return res.status(400).json({ error: 'n debe ser un número' });
  const resultado = peorParidad(n);
  res.json({ resultado });
});

module.exports = router;
