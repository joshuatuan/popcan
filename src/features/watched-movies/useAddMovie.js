import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertRating } from "../../lib/apiMovies";

export function useAddMovie() {
  const queryCLient = useQueryClient();

  const { mutate: addMovie, isLoading: isAdding } = useMutation({
    mutationFn: insertRating,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["watchedMovies"] });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });
  return { addMovie, isAdding };
}
