import { useEffect } from "react";
import { useKey } from "../../hooks/useKey";
import BackButton from "../../components/ui/BackButton";
import RatingSection from "./RatingSection";
import MovieHeader from "./MovieHeader";
import MovieMoreInfo from "./MovieMoreInfo";
import { useUIContext } from "../../contexts/UIContext";
import Spinner from "../../components/ui/Spinner";

import { useMovieDetails } from "./useMovieDetails";

function MovieDetails() {
  const { selectedId, handleCloseMovie } = useUIContext();
  const { movie, isLoading, error } = useMovieDetails(selectedId);

  useKey("Escape", handleCloseMovie);

  useEffect(
    function () {
      if (!movie?.Title) return;
      document.title = `Movie | ${movie.Title}`;

      return function () {
        document.title = "Popcan";
      };
    },
    [movie?.Title],
  );

  if (!selectedId || selectedId === "") {
    return <div className="mt-16 text-center"> </div>;
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="mb-5 md:hidden">
            <BackButton />
          </div>
          <div className="rounded-2xl bg-background-500">
            <MovieHeader
              poster={movie.Poster}
              title={movie.Title}
              released={movie.Released}
              genre={movie.Genre}
              runtime={movie.Runtime}
              imdbRating={movie.imdbRating}
            />
            <section className="flex flex-col items-center gap-6 px-6 py-3 pb-8">
              <RatingSection />
              <MovieMoreInfo
                plot={movie.Plot}
                actors={movie.Actors}
                director={movie.Director}
              />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
