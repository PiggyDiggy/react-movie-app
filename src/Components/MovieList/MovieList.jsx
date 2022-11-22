import { useRef, useEffect } from "react";
import { MovieCard } from "../MovieCard";
import css from "./MovieList.module.css";

export const MovieList = ({ movies, error, loadMore, apiExhausted }) => {
  const list = useRef(null);

  useEffect(() => {
    if (apiExhausted || !list.current) return;
    const lastCard = list.current.children[movies.length - 1];
    const options = { threshold: 0.8 };
    const observer = new IntersectionObserver(([card]) => {
      if (card.isIntersecting) {
        loadMore();
        observer.unobserve(card.target);
      }
    }, options);
    observer.observe(lastCard);

    return () => {
      observer.disconnect();
    };
  }, [movies, apiExhausted]);

  if (error) {
    return <div className={css.error}>{error}</div>;
  }

  return (
    <>
      {movies.length > 0 ? (
        <div className={css["movies-wrapper"]}>
          <ul ref={list} className={css.movies}>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
