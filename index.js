import express from 'express';
import cors from 'cors';
import { db } from "./db.js";

const app = express();//criar app
app.use(express.json());
const port = 3636; // definir porta

app.use(cors()); //usar cors


app.get('/projetos', (req, res) => {
  const q = "SELECT * FROM projetos ORDER BY data_criacao DESC;";
  db.query(q, (err, result) => {
    if (err) {
      console.error('Erro ao obter dados do banco de dados:', err);
      res.status(500).send('vc entrou em admin');
    } else {
      res.json(result);
    }
});
});

//mostrar usuarios
app.get('/', (req, res) => {
  res.send = "Projeto Meio Ambiente"

});
  
//cadastrar novo usuario
app.post('/novoprojeto', (req, res) => {
  const q = "INSERT INTO projetos (`nome`, `descricao`) VALUES (?,?)";
  const values = [
    req.body.nome,
    req.body.descricao,
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados:', err);
      res.status(500).send('Erro ao inserir dados no banco de dados.');
    } else {
      res.status(200).send('Projeto cadastrado');
    }
  });
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});