const AgentesRepository = require('../repositories/agentesRepository');

class AgentesController {

  async getAll(req, res, next) {
    try {
      const agentes = await AgentesRepository.getAll();
      res.status(200).json(agentes);
    } catch (error) {
      next(error); // Passa o erro para o middleware de erro
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const agente = await AgentesRepository.findById(Number(id));

      if (!agente) {
        return res.status(404).json({ message: 'Agente não encontrado.' });
      }

      res.status(200).json(agente);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const novoAgente = await AgentesRepository.create(req.body);
      res.status(201).json(novoAgente);
    } catch (error) {
      next(error);
    }
  }


  async update(req, res, next) {
    try {
      const { id } = req.params;
      const agenteAtualizado = await AgentesRepository.update(Number(id), req.body);

      if (!agenteAtualizado) {
        return res.status(404).json({ message: 'Agente não encontrado para atualização.' });
      }

      res.status(200).json(agenteAtualizado);
    } catch (error) {
      next(error);
    }
  }


  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const sucesso = await AgentesRepository.remove(Number(id));

      if (!sucesso) {
        return res.status(404).json({ message: 'Agente não encontrado para deleção.' });
      }

      res.status(204).send(); // Sem conteúdo na resposta
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AgentesController();
