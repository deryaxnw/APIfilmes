import { useContext } from "react";
import "./index.scss";
import { Usecontext } from "../../service/StorageContext";
import { MovieType } from "../../types";
import MovieCard from "../MovieCard/MovieCard";

export default function List() {
  const { dados } = useContext(Usecontext);

  return (
    <ul className="movie-list">
      {dados.map((filmes: MovieType) => (
        <MovieCard 
        key={filmes.id}
        movieType= {filmes} />
      ))}
    </ul>
  );
}
