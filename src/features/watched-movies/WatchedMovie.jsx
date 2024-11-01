import { useRemoveMovie } from "./useRemoveMovie";
import { XMarkIcon } from "@heroicons/react/16/solid";
import MovieTitle from "../../components/MovieTitle";

function WatchedMovie({ movie, isLastRow }) {
  const { removeMovie, isRemoving } = useRemoveMovie();
  return (
    <li
      className={`grid max-h-[200px] max-w-[500px] grid-cols-[4rem_1fr] grid-rows-2 items-center gap-5 p-5 pb-8 font-medium md:font-normal ${isLastRow ? "mb-4 border-none pb-2" : "border-b border-background-100"}`}
    >
      <img
        className="row-span-full w-full scale-125"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <MovieTitle>{movie.Title}</MovieTitle>
      <div className="flex items-center justify-around gap-0 text-base md:text-lg">
        <MovieStat icon="⭐️">{movie.imdbRating}</MovieStat>
        <MovieStat icon="🌟">{movie.userRating}</MovieStat>
        <MovieStat icon="⏳">{movie.Runtime}</MovieStat>
        <button
          onClick={() => removeMovie(movie.imdbID)}
          className="ml-2 rounded-full bg-red-500 transition-all duration-300 hover:bg-red-600"
          disabled={isRemoving}
        >
          <XMarkIcon className="h-5 cursor-pointer text-black" />
        </button>
      </div>
    </li>
  );
}
export default WatchedMovie;

function MovieStat({ children, icon }) {
  return (
    <p className="flex items-center gap-[2px]">
      <span>{icon}</span>
      <span className="text-sm md:text-base">{children}</span>
    </p>
  );
}
