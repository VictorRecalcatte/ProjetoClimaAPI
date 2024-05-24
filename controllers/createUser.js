import { db } from "../db.js";

export const creatUsers = (req, res) => {
  const q = "INSERT INTO usuarios ('nome', 'email','fone') VALUES(? ? ?)";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
];
  db.query(q, values, (err, result) => {
    if (err) {
      console.error('Erro ao obter dados do banco de dados:', err);
     res.status(500).send('Erro ao obter dados do banco de dados.');
    } else {
     res.json(result);
    }
  });
};