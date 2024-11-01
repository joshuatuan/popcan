import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useMoviesContext } from "../../contexts/MoviesContext";
import MissingPoster from "../../components/MissingPoster";
import MovieTitle from "../../components/MovieTitle";

function Movie({ movie }) {
  const { handleSelectMovie, selectedId, setUserRating } = useMoviesContext();
  const isMovieSelected = selectedId === movie.imdbID;

  return (
    <li
      className={`grid cursor-pointer grid-cols-[6rem_1fr] grid-rows-2 items-center gap-5 rounded-xl border-b border-background-100 p-3 text-base transition-all duration-300 hover:bg-background-100 md:p-7 md:text-lg ${isMovieSelected && "bg-background-700"} `}
      onClick={() => {
        handleSelectMovie(movie.imdbID);
        setUserRating("");
      }}
    >
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          className="row-span-full w-full"
          src={movie.Poster}
          alt={`Poster of ${movie.Title}`}
        />
      ) : (
        <MissingPoster className="row-span-full flex items-center justify-center" />
      )}
      <MovieTitle>{movie.Title}</MovieTitle>
      <div className="flex items-center">
        <p className="flex items-center gap-1">
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
