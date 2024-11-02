import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertRating } from "../../lib/apiMovies";

export function useAddMovie() {
  const queryClient = useQueryClient();
  const {
    mutate: addMovie,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationFn: insertRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchedMovies"] });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { addMovie, isAdding, error };
}
