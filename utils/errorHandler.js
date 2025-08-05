/**
 * @file Middleware para tratamento de erros.
 */

function errorHandler(err, req, res, next) {
  console.error('Ocorreu um erro:', err.stack);

  // Responde com um status 500 genérico para erros inesperados
  res.status(500).json({
    message: 'Ocorreu um erro interno no servidor.',
    error: err.message,
  });
}

module.exports = errorHandler;
