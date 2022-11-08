import { useRef, useEffect } from "react";
import { MovieCard } from "../MovieCard";
import css from "./MovieList.module.css";

export const MovieList = ({ movies, error, loadMore, apiExhausted }) => {
  const list = useRef(null);

  useEffect(() => {
    if (apiExhausted) return;
    const lastCard = list.current.children[movies.length - 1];
    const options = { threshold: 0.8 };
    const observer = new IntersectionObserver(([card]) => {
      if (card.isIntersecting) {
        loadMore();
      }
    }, options);
    observer.observe(lastCard);

    return () => {
      observer.disconnect();
    };
  }, [movies, apiExhausted]);

  return (
    <div className={css["movies-wrapper"]}>
      {error ? (
        <div className={css.error}>{error}</div>
      ) : (
        <ul ref={list} className={css.movies}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};
