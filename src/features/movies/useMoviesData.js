import { useState, useEffect } from "react";
import { fetchMovieSearch } from "../../lib/apiMovies";

export function useMoviesData(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // debounce delay in ms

    return () => clearTimeout(handler);
  }, [query]);

  // Fetch movies
  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchMovieSearch(debouncedQuery, controller.signal);
        setMovies(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          setMovies([]);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (debouncedQuery.length < 3) {
      setMovies([]);
      setError("");
      // handleCloseMovie();
      return;
    }

    getMovies();
    return () => controller.abort();
  }, [debouncedQuery]);

  return { movies, isLoading, error };
}
