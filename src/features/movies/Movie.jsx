import { useMoviesContext } from "../../contexts/MoviesContext";

function Movie({ movie }) {
  const { handleSelectMovie } = useMoviesContext();
  return (
    <li
      className="relative grid cursor-pointer grid-cols-[4rem_1fr] grid-rows-2 items-center gap-5 border-b border-background-100 p-7 text-lg transition-all duration-300 hover:bg-background-100"
      onClick={() => handleSelectMovie(movie.imdbID)}
    >
      <img
        className="row-span-full w-full scale-125"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3 className="text-lg">{movie.Title}</h3>
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
