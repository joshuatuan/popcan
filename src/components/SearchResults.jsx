import { useMoviesContext } from "../contexts/MoviesContext";

function SearchResults() {
  const { movies } = useMoviesContext();
  return (
    <div>
      {movies.length > 0 && (
        <span className="font-semibold">Found {movies.length} results</span>
      )}
    </div>
  );
}

export default SearchResults;
