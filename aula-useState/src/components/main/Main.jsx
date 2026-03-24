import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [usuario, setUsuario] = useState([]);

  const enviar = (e) => {
    e.preventDefault();
    const usuariosObj = {
      nome: nome,
      idade: idade,
      cidade: cidade,
    };
    setUsuario(...usuario, usuariosObj);
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <form onSubmit={() =>enviar}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <input
          type="text"
          placeholder="Idade"
          onChange={(e) => setIdade(e.target.value)}
          value={idade}
        />
        <input
          type="text"
          placeholder="Cidade"
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <section>
        {usuario.map((item) => (
          <div>
            <h2>Nome: {item.nome}</h2>
            <h3>Idade: {item.idade}</h3>
            <h3>Cidade: {item.cidade}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}
