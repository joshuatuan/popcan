import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../../lib/apiMovies";

export function useMovieDetails(id) {
  const {
    data: movie,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
  return { movie, isLoading, error };
}
