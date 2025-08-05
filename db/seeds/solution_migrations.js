exports.seed = async function(knex) {
  // Deleta todos os registros existentes
  await knex('casos').del()
  await knex('agentes').del()

  // Insere agentes
  await knex('agentes').insert([
    { nome: 'Fox Mulder', dataDeIncorporacao: '1986-10-24', cargo: 'Agente Especial' },
    { nome: 'Dana Scully', dataDeIncorporacao: '1992-07-01', cargo: 'Agente Especial / Médica Legista' }
  ]);

  // Pega os IDs dos agentes para associar aos casos
  const mulder = await knex('agentes').where({ nome: 'Fox Mulder' }).first();
  const scully = await knex('agentes').where({ nome: 'Dana Scully' }).first();

  // Insere casos
  await knex('casos').insert([
    { titulo: 'O Monstro de Jersey', descricao: 'Investigação sobre uma criatura lendária em Nova Jersey.', status: 'solucionado', agente_id: mulder.id },
    { titulo: 'Conduíte', descricao: 'O desaparecimento de uma jovem com possíveis ligações extraterrestres.', status: 'aberto', agente_id: scully.id }
  ]);
};