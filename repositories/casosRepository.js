const db = require("../db/db");

async function create(object) {
  try {
    const created = await db("casos").insert(object, ["*"]);
    return created[0];  // Retorna o primeiro objeto criado
  } catch (erro) {
    console.log(erro);
    return false;
  }
}

async function read(id) {
  try {
    const result = await db("casos").where({ id: id });
    if (result.length === 0) {
      return false;
    }
    return result[0];  // Retorna o primeiro objeto encontrado
  } catch (erro) {
    console.log(erro);
    return false;
  }
}

async function update(id, fieldsToUpdate) {
  try {
    const updated = await db("casos").where({ id: id }).update(fieldsToUpdate, ["*"]);
    if (updated === 0) {  // Se nenhuma linha foi atualizada
      return false;
    }
    return updated[0];  // Retorna o primeiro objeto atualizado
  } catch (erro) {
    console.log(erro);
    return false;
  }
}

async function remove(id) {
  try {
    const deleted = await db("casos").where({ id: id }).del();
    if (deleted === 0) {  // Se nenhuma linha foi deletada
      return false;
    }
    return deleted;  // Retorna o número de registros deletados
  } catch (erro) {
    console.log(erro);
    return false;
  }
}

// Teste de criação
//create({ nome: "Agente D", cargo: "Delegado",dataDeIncorporacao:new Date()})
//  .then((agente) => console.log(agente))  // Exibe o objeto criado
//  .catch((erro) => console.log(erro));  // Exibe erro, se houver
