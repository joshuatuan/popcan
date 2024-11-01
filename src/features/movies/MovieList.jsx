import { useMoviesContext } from "../../contexts/MoviesContext";
import Movie from "./Movie";

function MovieList() {
  const { movies, error, isLoading, handleSelectMovie, selectedId } =
    useMoviesContext();

  if (movies.length < 1) handleSelectMovie("");

  return (
    <div className="md:h-full">
      {!isLoading && !error && (
        <ul className="list-none rounded-xl bg-background-500 p-2">
          {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
