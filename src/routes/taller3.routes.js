const express = require('express');
const router = express.Router();

const { desglosarString, twoSum, conversionRomana, descomposicion } = require('../taller-03');

router.post('/desglosarString', (req, res) => {
  const { string, tipo } = req.body;
  if (typeof string !== 'string' || typeof tipo !== 'string') return res.status(400).json({ error: 'string y tipo deben ser strings' });
  try {
    const resultado = desglosarString(string, tipo);
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/twoSum', (req, res) => {
  const { listNums, num } = req.body;
  if (!Array.isArray(listNums) || typeof num !== 'number') return res.status(400).json({ error: 'entrada inválida' });
  const resultado = twoSum(listNums, num);
  res.json({ resultado });
});

router.post('/conversionRomana', (req, res) => {
  const { cifraRomana } = req.body;
  if (typeof cifraRomana !== 'string') return res.status(400).json({ error: 'cifraRomana debe ser un string' });
  const resultado = conversionRomana(cifraRomana);
  res.json({ resultado });
});

router.post('/descomposicion', (req, res) => {
  const { string } = req.body;
  if (typeof string !== 'string') return res.status(400).json({ error: 'string debe ser string' });
  const resultado = descomposicion(string);
  res.json({ resultado });
});

module.exports = router;
