import { useState } from "react";
import { MovieList } from "./Components/MovieList";
import { Button } from "./Components/Button";
import { Search } from "./Components/Search";
import { fetchData } from "./utils/fetchData";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const loadButtonVisible = totalCount > movies.length;

  const searchMovies = async () => {
    if (search === "") return;
    setPage(1);
    const response = await fetchData({ s: search, page: 1 });
    if (response.Response === "True") {
      setMovies(response.Search);
      setError("");
      setTotalCount(Number(response.totalResults));
    } else {
      setMovies([]);
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
    <div className="App">
      <Search
        error={error}
        search={search}
        setSearch={setSearch}
        placeholder="Title"
        onSubmit={searchMovies}
        clear={clear}
      />
      <MovieList movies={movies} error={error} />
      {loadButtonVisible && <Button onClick={loadMore}>Load More</Button>}
    </div>
  );
};
