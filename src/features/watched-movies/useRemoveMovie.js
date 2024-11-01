import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeRatedMovie } from "../../lib/apiMovies";

export function useRemoveMovie() {
  const queryCLient = useQueryClient();

  const { mutate: removeMovie, isPending: isRemoving } = useMutation({
    mutationFn: removeRatedMovie,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["watchedMovies"] });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { removeMovie, isRemoving };
}
