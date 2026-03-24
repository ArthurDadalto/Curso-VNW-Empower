import React, { useEffect, useState } from "react";

const App = () => {
  // useEffect(() =>{

  //   console.log('Estou de olho!!')

  // })

  // useEffect(() =>{

  //   alert('Se inscreva na nossa pagina!!')

  // },[])

  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Contador mudou para:", contador);
  }, [contador]);

  return (
    <>
      <h1>Boa noite!</h1>

      <h2>{contador}</h2>

      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
};

export default App;
