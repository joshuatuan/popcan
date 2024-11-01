import { useRef } from "react";
import { useKey } from "../hooks/useKey";
import { useMoviesContext } from "../contexts/MoviesContext";

function Search() {
  const { query, setQuery, handleSelectMovie } = useMoviesContext();
  const inputElement = useRef(null);

  if (query.length < 1) handleSelectMovie(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return; // if actively searching, do not do siht
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="text-md w-full rounded-xl border-none bg-background-300 px-5 py-3 text-text transition-colors duration-300 placeholder:text-textDark focus:outline-none focus:ring-2 focus:ring-primary-500 md:max-w-sm"
      type="text"
      placeholder="Search films..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

export default Search;
