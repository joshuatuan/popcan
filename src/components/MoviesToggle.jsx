import { useMoviesContext } from "../contexts/MoviesContext";

function MoviesToggle() {
  const { view, setView } = useMoviesContext();
  return (
    <div className="flex items-center justify-center rounded-2xl bg-primaryLight p-1">
      <ButtonToggle
        onClick={() => setView("browseMovies")}
        isActive={view === "browseMovies"}
      >
        🔍 Browse Movies
      </ButtonToggle>
      <ButtonToggle
        onClick={() => setView("myList")}
        isActive={view === "myList"}
      >
        💖 My List
      </ButtonToggle>
    </div>
  );
}

export default MoviesToggle;

function ButtonToggle({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-primary-400 rounded-2xl px-3 py-2 ${isActive && "bg-primary-500 hover:!bg-primary-500"}`}
    >
      {children}
    </button>
  );
}
