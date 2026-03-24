const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let usuarios = [
  { id: 1, nome: "Arthur", idade: 25 },
  { id: 2, nome: "Fábio", idade: 34 },
];

app.get("/usuarios", (req, res) => {
  res.status(200).json(usuarios);
});

app.post("/usuarios", (req, res) => {
  const { nome, idade } = req.body;
  const novoUsuario = {
    id: usuarios.lenght + 1,
    nome,
    idade,
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
