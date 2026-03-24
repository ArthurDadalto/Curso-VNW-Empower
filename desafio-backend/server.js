require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let cadastros = [];
let proximoID = 1;

app.use(express.json());

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function telefoneValido(telefone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(telefone);
}

function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;
  if (!nome || nome.lenght < 3) {
    return res.status(400).json({
      erro: "Nome é obrigatório e deve ter pelo menos 3 letras",
    });
  }
  if (!email || emailValido(email)) {
    return res.status(400).json({
      erro: "Email Invalido",
    });
  }
  if (!telefone || telefoneValido(telefone)) {
    return res.status(400).json({
      erro: "Telefone Invalido",
    });
  }
  if (!mensagem || mensagem.lenght > 499(mensagem)) {
    return res.status(400).json({
      erro: "Obrigatório adicionar um texto",
    });
  }
  next();
}

app.get("/", (req, res) => {
  res.send("API rodando!");
});

app.get("/cadastros", (req, res) => {
  res.json(cadastros);
});

app.post("/cadastros", (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const novoCadastro = {
    id: proximoID++,
    nome,
    email,
    telefone,
    mensagem: mensagem || null,
  };
  cadastros.push(novoCadastro);
  res.status(201).json({
    mensagem: "Cadastro enviado com sucesso",
    cadastro: novoCadastro,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
