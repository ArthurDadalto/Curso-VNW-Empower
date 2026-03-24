const express = require("express");
const app = express();
const PORT = 3000;

// function meuLogger(req, res, next) {
//   console.log("Uma requisição foi feita");
//   next();
// }

// app.use(meuLogger);

// function verificarAcesso(req, res, next) {
//   const autorizado = false;

//   if (!autorizado) {
//     return res.send("Acesso negado");
//   }

//   next()
// }

// app.get("/", (req, res) => {
//   res.send("Dia chuvoso!");
// });

// app.get("/area-restrita", verificarAcesso, (req, res) => {
//   res.send("Bem vindo à área restrita!");
// });

app.get("/usuario/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Você pediu o usuário: ${id}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
