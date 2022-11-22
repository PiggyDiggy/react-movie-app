import { useState, useRef } from "react";
import { MovieList } from "./Components/MovieList";
import { ScrollButton } from "./Components/ScrollButton";
import { Search } from "./Components/Search";
import { Loader } from "./Components/Loader";
import { fetchData } from "./utils/fetchData";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const appRef = useRef(null);

  const apiExhausted = totalCount === movies.length && totalCount !== 0;
  const loaderVisible = page > 0 && !error && !apiExhausted;

  const searchMovies = async () => {
    if (search === "") return;
    setPage(1);
    setMovies([]);
    setError("");
    const response = await fetchData({ s: search, page: 1 });
    if (response.Response === "True") {
      setMovies(response.Search);
      setTotalCount(Number(response.totalResults));
    } else {
      setError(response.Error);
      setTotalCount(0);
    }
  };

  const loadMore = async () => {
    setPage((prev) => prev + 1);
    const response = await fetchData({ s: search, page: page + 1 });
    setMovies((prev) => prev.concat(response.Search));
  };

  const clear = () => {
    setSearch("");
    setError("");
  };

  return (
    <div className="App" ref={appRef}>
      <Search
        error={error}
        search={search}
        setSearch={setSearch}
        placeholder="Title"
        onSubmit={searchMovies}
        clear={clear}
      />
      <MovieList
        movies={movies}
        error={error}
        loadMore={loadMore}
        apiExhausted={apiExhausted}
      />
      <ScrollButton scrollable={appRef.current} />
      {loaderVisible && <Loader />}
    </div>
  );
};
