import ErrorMessage from "../../components/ErrorMessage";
import { useMoviesContext } from "../../contexts/MoviesContext";
import { useUIContext } from "../../contexts/UIContext";

function MovieSearchResult() {
  const { movies, error } = useMoviesContext();
  const { selectedId } = useUIContext();

  return (
    <div
      className={`mb-2 ml-2 text-nowrap md:mb-4 ${error ? "self-center" : "self-start"} md:m-0 md:self-center`}
    >
      {error && (
        <ErrorMessage className="text-lg font-medium">{error}</ErrorMessage>
      )}
      {!error && (
        <div className={`mb-1 ${selectedId ? "hidden" : "block"} md:block`}>
          {movies.length > 0 && (
            <span className="ml-1 font-semibold">
              Found {movies.length} results
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieSearchResult;
