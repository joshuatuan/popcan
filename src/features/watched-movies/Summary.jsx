import { useMoviesContext } from "../../contexts/MoviesContext";
import { average } from "../../utils/helpers";

function Summary() {
  const { watchedMovies } = useMoviesContext();

  const avgImdbRating = average(
    watchedMovies?.map((movie) => movie.imdbRating),
  );
  const avgUserRating = average(
    watchedMovies?.map((movie) => movie.userRating),
  );
  // const avgRuntime = average(
  //   watchedMovies?.map((movie) => {
  //     const runtimeStr = movie?.Runtime; // e.g., "23 min"
  //     const runtimeNumber = runtimeStr?.split(" ")[0]; // Get the first part, which is the number
  //     return Number(runtimeNumber); // Convert to number
  //   })
  // );

  return (
    <div className="rounded-2xl px-7 py-8 shadow-md">
      <h2 className="mb-4 text-center text-lg uppercase">
        Movies you&apos;ve watched
      </h2>
      <div className="flex items-center justify-around text-lg font-semibold">
        <p className="flex items-center gap-2">
          <span>#️⃣</span>
          <span>{watchedMovies?.length} movies</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⭐️</span>
          <span>{avgImdbRating?.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{avgUserRating?.toFixed(2)}</span>
        </p>
        {/* <p>
          <span>⏳</span>
          <span>{avgRuntime?.toFixed(2)} min</span>
        </p> */}
      </div>
    </div>
  );
}

export default Summary;
