const db = require('../db/db');


class CasosRepository {

  async findAll() {
    try {
      return await db('casos').select('*');
    } catch (error) {
      console.error('Erro ao buscar todos os casos:', error);
      throw new Error('Falha ao buscar casos.');
    }
  }

  async findById(id) {
    try {
      const caso = await db('casos').where({ id: id }).first();
      return caso;
    } catch (error) {
      console.error(`Erro ao buscar caso com id ${id}:`, error);
      throw new Error('Falha ao buscar caso.');
    }
  }

  async create(casoData) {
    try {
      const [novoCaso] = await db('casos').insert(casoData).returning('*');
      return novoCaso;
    } catch (error) {
      console.error('Erro ao criar caso:', error);
      throw new Error('Falha ao criar caso.');
    }
  }


  async update(id, fieldsToUpdate) {
    try {
      const [casoAtualizado] = await db('casos').where({ id: id }).update(fieldsToUpdate).returning('*');
      return casoAtualizado;
    } catch (error)
    {
      console.error(`Erro ao atualizar caso com id ${id}:`, error);
      throw new Error('Falha ao atualizar caso.');
    }
  }

  async remove(id) {
    try {
      const count = await db('casos').where({ id: id }).del();
      return count > 0;
    } catch (error) {
      console.error(`Erro ao deletar caso com id ${id}:`, error);
      throw new Error('Falha ao deletar caso.');
    }
  }

  async findByAgenteId(agenteId) {
    try {
      return await db('casos').where({ agente_id: agenteId }).select('*');
    } catch (error) {
      console.error(`Erro ao buscar casos para o agente com id ${agenteId}:`, error);
      throw new Error('Falha ao buscar casos do agente.');
    }
  }
}

module.exports = new CasosRepository();
