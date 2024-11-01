import { useQuery } from "@tanstack/react-query";
import { getRatedMovies } from "../../lib/apiMovies";

export function useWatchedMovies() {
  const {
    data: watchedMovies,
    isPending: isLoadingWatchedMovies,
    error: watchedMoviesError,
  } = useQuery({
    queryKey: ["watchedMovies"],
    queryFn: getRatedMovies,
  });
  return { watchedMovies, isLoadingWatchedMovies, watchedMoviesError };
}
