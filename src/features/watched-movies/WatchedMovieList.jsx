import { useMoviesContext } from "../../contexts/MoviesContext";
import WatchedMovie from "./WatchedMovie";

function WatchedMovieList() {
  const { watchedMovies } = useMoviesContext();
  return (
    <ul className="list-none overflow-auto">
      {watchedMovies?.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
