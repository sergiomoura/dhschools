// Importando o express
const express = require('express');

// Importando o Controller
const AreasController = require('../controllers/AreasController');

// Criando o roteador
const router = express.Router();

// Definindo rota get para '/areas' que direciona requisição para AreasController.index
router.get('/areas', AreasController.index);

// Exportando o roteador
module.exports = router;