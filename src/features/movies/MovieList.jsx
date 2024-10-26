import { useMoviesContext } from "../../contexts/MoviesContext";
import Movie from "./Movie";

function MovieList() {
  const { movies } = useMoviesContext();
  return (
    <ul className="list-none overflow-auto">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
