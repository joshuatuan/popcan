import ErrorMessage from "../../components/ErrorMessage";
import Search from "../../components/Search";
import SpinnerMini from "../../components/SpinnerMini";
import { useMoviesContext } from "../../contexts/MoviesContext";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import MovieSearchResult from "./MovieSearchResult";

function MoviesContainer() {
  const { isLoadingMovies, movies, errorMovies, selectedId } =
    useMoviesContext();

  return (
    <div className="w-full max-w-5xl">
      <div className="mr-4 flex flex-col items-center justify-center gap-4 transition-all duration-300 md:flex-row">
        <div className="mb-2 flex w-full items-center justify-center gap-4 md:mb-5 md:justify-start">
          <Search />
          {isLoadingMovies && <SpinnerMini className="w-7" />}
        </div>

        <MovieSearchResult />
      </div>

      <div
        className={`grid h-[calc(100vh-15rem)] w-full grid-cols-1 gap-0 rounded-xl md:w-auto md:grid-cols-2 md:gap-0 md:bg-background-500 ${
          movies.length > 0 ? "md:overflow-y-auto" : "h-full"
        }`}
      >
        {movies.length === 0 && !errorMovies ? (
          <p className="flex items-center justify-center text-lg text-gray-600 md:col-span-2 md:text-2xl">
            Start by searching for a film
          </p>
        ) : (
          <>
            <div
              className={`overflow-y-auto ${selectedId ? "hidden" : "block"} md:block`}
            >
              {movies.length > 0 && <MovieList />}
            </div>
            {selectedId && <MovieDetails />}
          </>
        )}
      </div>
    </div>
  );
}

export default MoviesContainer;
