import { useQuery } from "@tanstack/react-query";
import { getRatedMovies } from "../../lib/apiMovies";

export function useWatchedMovies() {
  const {
    data: watchedMovies,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["watchedMovies"],
    queryFn: getRatedMovies,
  });
  return { watchedMovies, isLoading, error };
}
