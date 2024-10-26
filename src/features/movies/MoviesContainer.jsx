import Box from "../../components/Box";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import { useMoviesContext } from "../../contexts/MoviesContext";
import MovieList from "./MovieList";

function MoviesContainer() {
  const { isLoading, error } = useMoviesContext();
  return (
    <Box>
      {isLoading && <Loader />}
      {!isLoading && !error && <MovieList />}
      {error && <ErrorMessage />}
    </Box>
  );
}

export default MoviesContainer;
