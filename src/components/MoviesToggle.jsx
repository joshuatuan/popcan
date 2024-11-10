import { useUIContext } from "../contexts/UIContext";

function MoviesToggle({ className }) {
  const { view, setView } = useUIContext();
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-primaryLight p-1 ${className}`}
    >
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
      className={`rounded-xl px-2 py-2 pr-3 text-base transition-all duration-200 hover:bg-primary-400 md:px-7 md:py-2 md:text-base ${isActive && "bg-primary-500 hover:!bg-primary-500"}`}
    >
      {children}
    </button>
  );
}
