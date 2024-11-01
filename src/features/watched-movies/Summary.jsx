import { useMoviesContext } from "../../contexts/MoviesContext";
import { average } from "../../utils/helpers";
import SummaryStat from "./SummaryStat";

function Summary() {
  const { watchedMovies } = useMoviesContext();

  const avgImdbRating = average(
    watchedMovies
      ?.map((movie) => movie.imdbRating)
      .filter((average) => !isNaN(average)),
  );
  const avgUserRating = average(
    watchedMovies?.map((movie) => movie.userRating),
  );
  const avgRuntime = average(
    watchedMovies
      ?.map((movie) => {
        const runtimeStr = movie?.Runtime; // e.g., "23 min"
        const runtimeNumber = runtimeStr?.split(" ")[0]; // Get the first part, which is the number
        return Number(runtimeNumber); // Convert to number
      })
      .filter((runtime) => !isNaN(runtime)),
  );

  return (
    <div className="mb-8 mt-2 flex flex-col justify-center">
      <h1 className="mb-6 pl-3 text-center text-2xl font-medium uppercase md:text-start">
        Movies you&apos;ve rated 💖
      </h1>
      <div className="mx-auto grid grid-cols-2 justify-items-stretch gap-2 gap-x-2 md:mx-0 md:flex md:justify-center md:gap-2">
        <SummaryStat label="No. of movies watched:" logo="🎞️">
          {watchedMovies?.length}
        </SummaryStat>

        <SummaryStat label="Avg. IMDB ratings:" logo="⭐️">
          {avgImdbRating?.toFixed(2)}
        </SummaryStat>

        <SummaryStat label="Avg. user rating" logo="🌟">
          {avgUserRating?.toFixed(2)}
        </SummaryStat>

        <SummaryStat label="Avg. runtime" logo="⏳">
          {avgRuntime?.toFixed(2)} min
        </SummaryStat>
      </div>
    </div>
  );
}

export default Summary;
