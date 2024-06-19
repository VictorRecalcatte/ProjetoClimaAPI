import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: "db-victor.ceoweta0tvps.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "ProjetoAC",
});

const app = express();
app.use(express.json());
app.use(cors());

const port = 3636;

// Endpoint para listar todos os projetos
app.get('/projetos', (req, res) => {
  const query = "SELECT * FROM projetos ORDER BY data_criacao DESC;";
  db.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao obter dados do banco de dados:', err);
      res.status(500).send('Erro ao obter dados do banco de dados.');
    } else {
      res.json(result);
    }
  });
});

// Endpoint para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.json({ message: "server is running" });
});

// Endpoint para cadastrar um novo projeto
app.post('/novoprojeto', (req, res) => {
  const query = "INSERT INTO projetos (`nome`, `descricao`, `objetivo`, `sobre`) VALUES (?,?,?,?)";
  const values = [
    req.body.nome,
    req.body.descricao,
    req.body.objetivo,
    req.body.sobre,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados:', err);
      res.status(500).send('Erro ao inserir dados no banco de dados.');
    } else {
      res.status(200).send('Projeto cadastrado com sucesso.');
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
