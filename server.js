require('dotenv').config(); // Garante que as variáveis de ambiente sejam carregadas
const express = require('express');
const agentesRouter = require('./routes/agentesRoutes');
const casosRouter = require('./routes/casosRoutes');
const errorHandler = require('./utils/errorHandler'); // Importa o handler de erro

const app = express();
const PORT = 3000;

// Middleware para interpretar o corpo da requisição como JSON
app.use(express.json());

// Rotas da aplicação
app.use('/agentes', agentesRouter);
app.use('/casos', casosRouter);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});
