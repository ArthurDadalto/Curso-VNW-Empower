import React, { useState } from "react";

const Main = () => {
  const [titulo, setTitulo] = useState("Primeira aula do ano");
  const [like, setLike] = useState(0);

  function alteraTitulo() {
    setTitulo("Sejam todos bem vindos!");
  }

  return (
    <main>
      <h1>{titulo}</h1>
      <button onClick={alteraTitulo}>Mudar</button>
      <h1>{like}</h1>
      <button onClick={() => setLike(like + 1)}>Curtir</button>
    </main>
  );
};

export default Main;
