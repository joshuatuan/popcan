import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";
import WatchedMovie from "./WatchedMovie";

function WatchedMovieList() {
  const { watchedMovies } = useWatchedMoviesContext();
  const totalMovies = watchedMovies?.length;

  return (
    <ul
      className={`grid ${watchedMovies?.length < 3 ? "h-[calc(100vh-35rem)]" : "h-[calc(100vh-23rem)]"} min-h-[400px] list-none justify-center overflow-scroll rounded-lg border-background-100 md:h-[calc(100vh-29rem)] md:grid-cols-2`}
    >
      {watchedMovies?.map((movie, index) => {
        const isLastRow =
          totalMovies % 2 === 0
            ? index >= totalMovies - 2
            : index === totalMovies - 1;
        return (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            isLastRow={isLastRow}
          />
        );
      })}
    </ul>
  );
}

export default WatchedMovieList;
