require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Bem vindo a segunda aula de node e express");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
