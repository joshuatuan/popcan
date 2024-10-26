import { XCircleIcon } from "@heroicons/react/24/solid";
import { useRemoveMovie } from "./useRemoveMovie";
import { PhoneXMarkIcon, XMarkIcon } from "@heroicons/react/16/solid";

function WatchedMovie({ movie }) {
  const { removeMovie, isRemoving } = useRemoveMovie();

  return (
    <li className="grid grid-cols-[4rem_1fr] grid-rows-2 items-center gap-5 border-b border-background-100 p-7">
      <img
        className="row-span-full w-full scale-125"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3 className="text-lg">{movie.Title}</h3>
      <div className="flex items-center justify-around gap-3">
        <p className="flex items-center gap-1">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap-1">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap-1">
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>

        <button
          onClick={() => removeMovie(movie.imdbID)}
          className="duration-30 ml-2 rounded-full bg-red transition-all hover:bg-redDark"
          disabled={isRemoving}
        >
          <XMarkIcon className="h-5 cursor-pointer text-black" />
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
