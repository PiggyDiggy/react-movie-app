import { MovieCard } from "../MovieCard";
import css from "./MovieList.module.css";

export const MovieList = ({ movies, error }) => {
  return (
    <div className={css["movies-wrapper"]}>
      {movies.length ? (
        <ul className={css.movies}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      ) : (
        <div className={css.error}>{error}</div>
      )}
    </div>
  );
};
