import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, result) => {
        if (err) {
          console.error('Erro ao obter dados do banco de dados:', err);
          res.status(500).send('Erro ao obter dados do banco de dados.');
        } else {
          res.json(result);
        }
    });
};