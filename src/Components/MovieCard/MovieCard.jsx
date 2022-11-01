import css from "./MovieCard.module.css";
import { MovieOverview } from "../MovieOverview";
import { useState } from "react";
import { fetchData } from "../../utils/fetchData";

const imgPlaceholderSrc = "https://via.placeholder.com/400";

export const MovieCard = ({ movie }) => {
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [detailedInfo, setDetailedInfo] = useState({});
  const closeOverview = () => setOverviewVisible(false);

  const fetchMovieInfo = async () => {
    setOverviewVisible(true);
    if (Object.keys(detailedInfo).length) return;

    const info = await fetchData({ i: movie.imdbID });
    setDetailedInfo({
      released: info.Released,
      rating: info.imdbRating,
      plot: info.Plot,
    });
  };

  return (
    <>
      <li className={css.movie} onClick={fetchMovieInfo}>
        <div className={css.movie__year}>{movie.Year}</div>
        <img
          className={css.movie__poster}
          src={movie.Poster === "N/A" ? imgPlaceholderSrc : movie.Poster}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = imgPlaceholderSrc;
          }}
          alt="Poster"
        />
        <div className={css.movie__info}>
          <div className={css.movie__type}>{movie.Type}</div>
          <div className={css.movie__title}>{movie.Title}</div>
        </div>
      </li>
      <MovieOverview
        close={closeOverview}
        isOpen={overviewVisible}
        info={detailedInfo}
        movie={movie}
      />
    </>
  );
};
