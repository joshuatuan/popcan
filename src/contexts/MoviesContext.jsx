import { createContext, useContext, useState } from "react";
import { useMoviesData } from "../features/movies/useMoviesData";

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMoviesData(query);

  return (
    <MoviesContext.Provider value={{ movies, isLoading, error, setQuery }}>
      {children}
    </MoviesContext.Provider>
  );
}

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error("useMoviesContext must be used within a MoviesProvider");
  }
  return context;
};
