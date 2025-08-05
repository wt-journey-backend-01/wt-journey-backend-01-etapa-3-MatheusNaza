
const CasosRepository = require('../repositories/casosRepository');
const AgentesRepository = require('../repositories/agentesRepository');

class CasosController {

  async getAll(req, res, next) {
    try {
      const casos = await CasosRepository.getAll();
      res.status(200).json(casos);
    } catch (error) {
      next(error); // Passa o erro para o middleware de erro
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const caso = await CasosRepository.findById(Number(id));

      if (!caso) {
        return res.status(404).json({ message: 'Caso não encontrado.' });
      }

      res.status(200).json(caso);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const dadosCaso = req.body;

      // Validação: Verifica se o agente associado ao caso realmente existe
      if (dadosCaso.agente_id) {
        const agente = await AgentesRepository.findById(dadosCaso.agente_id);
        if (!agente) {
          return res.status(400).json({ message: 'O agente especificado não existe.' });
        }
      }

      const novoCaso = await CasosRepository.create(dadosCaso);
      res.status(201).json(novoCaso);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const dadosCaso = req.body;

      // Validação opcional: Se o agente_id está sendo alterado,
      // verifica se o novo agente existe.
      if (dadosCaso.agente_id) {
        const agente = await AgentesRepository.findById(dadosCaso.agente_id);
        if (!agente) {
          return res.status(400).json({ message: 'O novo agente especificado para o caso não existe.' });
        }
      }

      const casoAtualizado = await CasosRepository.update(Number(id), dadosCaso);

      if (!casoAtualizado) {
        return res.status(404).json({ message: 'Caso não encontrado para atualização.' });
      }

      res.status(200).json(casoAtualizado);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const sucesso = await CasosRepository.remove(Number(id));

      if (!sucesso) {
        return res.status(404).json({ message: 'Caso não encontrado para deleção.' });
      }

      res.status(204).send(); // Sem conteúdo na resposta
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CasosController();
