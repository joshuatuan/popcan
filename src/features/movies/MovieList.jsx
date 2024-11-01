import { useMoviesContext } from "../../contexts/MoviesContext";
import { useUIContext } from "../../contexts/UIContext";
import Movie from "./Movie";

function MovieList() {
  const { movies, error, isLoading } = useMoviesContext();
  const { handleSelectMovie } = useUIContext();

  if (movies.length < 1) handleSelectMovie("");

  return (
    <div className="md:h-full">
      {!isLoading && !error && (
        <ul className="list-none rounded-xl border-r-2 border-background-100 bg-background-500 p-2">
          {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
