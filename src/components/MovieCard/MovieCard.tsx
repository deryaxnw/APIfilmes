import { MovieType } from "../../types";
import Star from "../StarRating/Star";

export interface Props {
  movieType: MovieType;
}

export default function MovieCard(props: Props) {
  const movie = props.movieType;

  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-infos">
        <p className="movie-title">{movie.title}</p>
        <Star rating={movie.vote_average}/>
        <div className="hiden-content">
          <p className="description">{movie.overview}</p>
        </div>
      </div>

      
    </li>
  );
}
