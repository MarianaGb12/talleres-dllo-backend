const express = require('express');
const router = express.Router();

const { findMax, includes, sum, missingNumbers } = require('../taller-02');

router.post('/findMax', (req, res) => {
  const { list } = req.body;
  if (!Array.isArray(list)) return res.status(400).json({ error: 'list debe ser un array' });
  const resultado = findMax(list);
  res.json({ resultado });
});

router.post('/includes', (req, res) => {
  const { list, num } = req.body;
  if (!Array.isArray(list)) return res.status(400).json({ error: 'list debe ser un array' });
  const resultado = includes(list, num);
  res.json({ resultado });
});

router.post('/sum', (req, res) => {
  const { list } = req.body;
  if (!Array.isArray(list)) return res.status(400).json({ error: 'list debe ser un array' });
  const resultado = sum(list);
  res.json({ resultado });
});

router.post('/missingNumbers', (req, res) => {
  const { list } = req.body;
  if (!Array.isArray(list)) return res.status(400).json({ error: 'list debe ser un array' });
  const resultado = missingNumbers(list);
  res.json({ resultado });
});

module.exports = router;
