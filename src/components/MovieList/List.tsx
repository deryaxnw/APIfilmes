import { useContext } from "react";
import "./index.scss";
import { MovieType, Usecontext } from "../../service/StorageContext";



export default function List() {
  const { dados } = useContext(Usecontext);

  return (
    <ul className="movie-list">
      {dados.map((filmes: MovieType) => (
        <li key={filmes.id} className="movie-card">
          <p>{filmes.title}</p>
          <p className="description">{filmes.overview}</p>
          <img src={`https://image.tmdb.org/t/p/original${filmes.poster_path}`} alt="" />
          <p>
            {filmes.vote_average}
          </p>
        </li>
      ))}
    </ul>
  );
}
