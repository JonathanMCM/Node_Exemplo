const http = require('http');

// Cria um servidor que responde a todas as requisições com uma mensagem simples
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, turma de TDS! Bem-vindo ao Node.js!');
});

// Define a porta do servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
