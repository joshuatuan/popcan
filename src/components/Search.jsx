import { useRef } from "react";
import { useKey } from "../hooks/useKey";
import { useMoviesContext } from "../contexts/MoviesContext";

function Search() {
  const { query, setQuery } = useMoviesContext();
  const inputElement = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return; // if actively searching, do not do siht
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="text-md w-[24rem] justify-self-center rounded-xl border-none bg-primaryLight px-5 py-3 text-text transition-all duration-300 placeholder:text-textDark focus:-translate-y-1 focus:shadow-md focus:outline-none"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

export default Search;
