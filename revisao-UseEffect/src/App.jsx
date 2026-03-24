import { useEffect, useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);
  const [mode, setMode] = useState("White");
  // useEffect(() => {
  //   console.log("Bem vindos a nossa aula de revisão");
  // });

  // useEffect(() => {
  //   console.log(`O contador mudou para: ${contador}`);
  // }, [contador]);

  // useEffect(() => {
  //   document.title = `Contador: ${contador}`;
  // }, [contador]);

  // useEffect(() => {
  //   if (contador === 1) {
  //     document.body.style.backgroundColor = "red";
  //   } else if (contador === 2) {
  //     document.body.style.backgroundColor = "green";
  //   } else if (contador === 3) {
  //     document.body.style.backgroundColor = "pink";
  //   }
  // }, [contador]);

  function dark() {
    setMode("Dark");
  }
  function white() {
    setMode("White");
  }
  useEffect(() => {
    if (mode === "Dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#333";
    }
  }, [mode]);

  return (
    <>
      <h1>Revisão de useEffect</h1>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <h2>{mode}</h2>
      <button
        onClick={() => {
          if (mode == "Dark") {
            white();
          } else {
            dark();
          }
        }}
      >
        Mudar cor de fundo
      </button>
    </>
  );
};

export default App;
