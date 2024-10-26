import Box from "../../components/Box";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import { useMoviesContext } from "../../contexts/MoviesContext";
import MovieDetails from "../movies/MovieDetails";
import Summary from "./Summary";
import WatchedMovieList from "./WatchedMovieList";

function WatchedMoviesContainer() {
  const { selectedId, isLoadingWatchedMovies, watchedMoviesError } =
    useMoviesContext();
  return (
    <Box>
      {selectedId ? (
        <MovieDetails selectedId={selectedId} />
      ) : (
        <>
          {isLoadingWatchedMovies && <Loader />}
          {watchedMoviesError && <ErrorMessage />}
          {!isLoadingWatchedMovies && !watchedMoviesError && (
            <>
              <Summary />
              <WatchedMovieList />
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default WatchedMoviesContainer;
