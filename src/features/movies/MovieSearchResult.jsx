import ErrorMessage from "../../components/ErrorMessage";
import { useMoviesContext } from "../../contexts/MoviesContext";

function MovieSearchResult() {
  const { movies, errorMovies, selectedId } = useMoviesContext();

  return (
    <div
      className={`mb-2 ml-2 text-nowrap md:mb-4 ${errorMovies ? "self-center" : "self-start"} md:m-0 md:self-center`}
    >
      {errorMovies && (
        <ErrorMessage className="text-lg font-medium">
          {errorMovies}
        </ErrorMessage>
      )}
      {!errorMovies && (
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
