import { useContext, useState } from "react";
import "./index.scss";
import { Usecontext } from "../../service/StorageContext";
import { MovieType } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import ReactLoading from 'react-loading'

export default function List() {
  const { dados , isLoading} = useContext(Usecontext);
  

    if(isLoading){
        return (
            <div className="loading-container">
                  <ReactLoading type='spin' color='#6046ff' height={"5%"} width={"5%"} />
            </div>
        )
    }

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
