import { useMoviesContext } from "../contexts/MoviesContext";

function SearchResults() {
  const { movies } = useMoviesContext();
  return (
    <>
      {movies.length > 0 && (
        <span className="font-semibold">Found {movies.length} results</span>
      )}
    </>
  );
}

export default SearchResults;
