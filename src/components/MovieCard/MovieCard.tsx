import { MovieType } from "../../types";

export interface Props {
    movieType: MovieType
}

export default function MovieCard(props: Props) {
    const movie = props.movieType


    return (
        <li key={movie.id} className="movie-card">
        <p>
          {movie.title}
        </p>
        <p className="description">
          {movie.overview}
        </p>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <p>
          {movie.vote_average}
        </p>
      </li>
    )
}