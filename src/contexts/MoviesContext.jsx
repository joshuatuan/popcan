import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useMovies } from "../features/movies/useMovies";
import supabase from "../lib/supabase";
import { useWatchedMovies } from "../features/watched-movies/useWatchedMovies";
import { useQueryClient } from "@tanstack/react-query";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
  const [session, setSession] = useState(null);

  // const initialView = !session ? "auth" : "myList";
  const [view, setView] = useState("myList"); //browseMovies, myList, auth
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [userRating, setUserRating] = useState("");

  const {
    movies,
    isLoading: isLoadingMovies,
    error: errorMovies,
  } = useMovies(query);

  const { watchedMovies, isLoadingWatchedMovies, watchedMoviesError } =
    useWatchedMovies();

  const queryClient = useQueryClient();

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(data.session);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };
    getSession();

    const { data } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      queryClient.invalidateQueries(["watchedMovies"]);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [queryClient]);

  const handleSelectMovie = (id) => {
    setSelectedId((prevId) => (id === prevId ? null : id));
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const contextValue = useMemo(
    () => ({
      session,
      isLoadingSession: !session,
      watchedMovies,
      isLoadingWatchedMovies,
      watchedMoviesError,
      selectedId,
      view,
      setView,
      query,
      setQuery,
      movies,
      userRating,
      setUserRating,
      isLoadingMovies,
      errorMovies,
      handleCloseMovie,
      handleSelectMovie,
    }),
    [
      session,
      watchedMovies,
      isLoadingWatchedMovies,
      watchedMoviesError,
      selectedId,
      view,
      query,
      movies,
      userRating,
      isLoadingMovies,
      errorMovies,
    ],
  );

  return (
    <MoviesContext.Provider value={contextValue}>
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
