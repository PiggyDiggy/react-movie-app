import { MovieCard } from "../MovieCard";
import css from "./MovieList.module.css";

export const MovieList = ({ movies, error }) => {
  return (
    <div className={css["movies-wrapper"]}>
      {error ? (
        <div className={css.error}>{error}</div>
      ) : (
        <ul className={css.movies}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};
