import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Style.scss";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      const dados = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      );

      try {
        setFilmes(dados.data.results);
        console.log(dados.data.results);
      } catch (erro) {
        alert(`Houve um erro${erro}`);
      }
    };
    buscarDados();
  }, []);

  return (
    <>
      <header>
        <h1>
          Cine<span>VnW</span>
        </h1>

        <div className="div">
          <input type="text" placeholder="Buscar filmes..." />

          <FaSearch />
        </div>
      </header>

      <main>
        <section className="boxCard">
          {filmes.map((item, id) => (
            <article className="card_image" key={id}>
              <div className="card">
                <span>New</span>

                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={`Imagem do filme ${item.title}`}
                />

                <div className="play">▶</div>
              </div>
              <h2>{item.title}</h2>
              <h3>{Math.floor(item.vote_average)}/10</h3>
              <div>⭐⭐⭐⭐☆</div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
