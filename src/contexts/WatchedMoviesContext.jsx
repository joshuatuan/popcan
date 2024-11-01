import { createContext, useContext } from "react";
import { useWatchedMovies } from "../features/watched-movies/useWatchedMovies";

const WatchedMoviesContext = createContext();

export function WatchedMoviesProvider({ children }) {
  const { watchedMovies, isLoading, error } = useWatchedMovies();
  return (
    <WatchedMoviesContext.Provider value={{ watchedMovies, isLoading, error }}>
      {children}
    </WatchedMoviesContext.Provider>
  );
}

export const useWatchedMoviesContext = () => {
  const context = useContext(WatchedMoviesContext);
  if (context === null)
    throw new Error(
      "useWatchedMovies must be used within a WatchedMoviesProvider",
    );
  return context;
};
