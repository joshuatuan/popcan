import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertRating } from "../../lib/apiMovies";
import { useMoviesContext } from "../../contexts/MoviesContext";

export function useAddMovie() {
  const queryClient = useQueryClient();
  const { handleSelectMovie } = useMoviesContext();
  const { mutate: addMovie, isPending: isAdding } = useMutation({
    mutationFn: insertRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchedMovies"] });
      // handleSelectMovie("");
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  // Log isAdding directly within the hook to verify its value
  return { addMovie, isAdding };
}
