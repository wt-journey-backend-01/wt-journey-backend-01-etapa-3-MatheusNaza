
const express = require('express');
const router = express.Router();
const AgentesController = require('../controllers/agentesController');


// Rota para buscar um agente por ID
router.get('/:id', AgentesController.getById);

// Rota para criar um novo agente
router.post('/', AgentesController.create);

// Rota para atualizar um agente por ID
router.put('/:id', AgentesController.update);

// Rota para deletar um agente por ID
router.delete('/:id', AgentesController.remove);

module.exports = router;
