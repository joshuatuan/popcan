import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useMoviesContext } from "../contexts/MoviesContext";

function BackButton() {
  const { handleSelectMovie } = useMoviesContext();
  return (
    <button
      onClick={() => handleSelectMovie("")}
      className="flex cursor-pointer items-center gap-1 rounded-xl bg-background-100 px-4 py-3 pr-6 text-sm font-medium"
    >
      <span>
        <ChevronLeftIcon className="h-5" />
      </span>
      Go back
    </button>
  );
}

export default BackButton;
