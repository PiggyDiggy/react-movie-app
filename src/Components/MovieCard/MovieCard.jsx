import css from "./MovieCard.module.css";
import { useState } from "react";
import { MovieOverview } from "../MovieOverview";
import { fetchData } from "../../utils";
import { FeaturesList } from "../FeaturesList";
import { Skeleton } from "../Skeleton";

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

  const overviewTitle = (
    <h1 className={css.overview__title}>
      <span>{movie.Title}</span>
      <span className={css.overview__type}>— {movie.Type}</span>
    </h1>
  );

  const overviewDescription = Object.keys(detailedInfo).length ? (
    <FeaturesList features={detailedInfo} />
  ) : (
    <Skeleton count={4} />
  );

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
      <MovieOverview close={closeOverview} isOpen={overviewVisible}>
        {{
          title: overviewTitle,
          description: overviewDescription,
        }}
      </MovieOverview>
    </>
  );
};
