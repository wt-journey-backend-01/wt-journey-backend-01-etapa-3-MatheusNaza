exports.seed = function (knex) {
  return knex('agentes')
    .del()
    .then(() => {
      return knex('agentes').insert([
        { nome: 'Agente A', dataDeIncorporacao: '2010-01-01', cargo: 'Investigador' },
        { nome: 'Agente B', dataDeIncorporacao: '2012-03-05', cargo: 'Perito' },
      ]);
    })
    .then(() => {
      return knex('casos').insert([
        { titulo: 'Caso 1', descricao: 'Roubo', status: 'aberto', agente_id: 1 },
        { titulo: 'Caso 2', descricao: 'Homicídio', status: 'solucionado', agente_id: 2 },
      ]);
    });
};
