import { createContext, useContext, useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import supabase from "../utils/supabase";
import { useWatchedMovies } from "../features/watched-movies/useWatchedMovies";
import { useQueryClient } from "@tanstack/react-query";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [query, setQuery] = useState("");
  const [view, setView] = useState("myList");
  const queryClient = useQueryClient();

  // const [watched, setWatched] = useLocalStorageState([], "watched");

  const [selectedId, setSelectedId] = useState(null);
  const [session, setSession] = useState(null);

  const { watchedMovies, isLoadingWatchedMovies, watchedMoviesError } =
    useWatchedMovies();

  const [isLoadingSession, setIsLoadingSession] = useState(true); // Track session loading

  // Update watched state when ratedMovies changes

  useEffect(() => {
    // Fetch the current session on app load
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoadingSession(false);
      if (error) throw new Error(error.message);
    };
    getSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        queryClient.invalidateQueries(["watchedMovies"]);
      },
    );

    // Clean up listener on component unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [queryClient]);

  //Movies api call
  const { movies, isLoading, error } = useMovies(query);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    // setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(deleteMovieId) {
    // setWatched((watched) =>
    //   watched.filter((movie) => movie.imdbID !== deleteMovieId)
    // );
  }

  return (
    <MoviesContext.Provider
      value={{
        session,
        isLoadingSession,
        watchedMovies,
        watchedMoviesError,
        isLoadingWatchedMovies,
        selectedId,
        view,
        setView,
        query,
        setQuery,
        movies,
        isLoading,
        error,
        handleAddWatched,
        handleCloseMovie,
        handleDeleteWatched,
        handleSelectMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;

export function useMoviesContext() {
  const moviesContext = useContext(MoviesContext);
  if (moviesContext === null)
    throw new Error("movies context was used outside its provider cuh");
  return moviesContext;
}
