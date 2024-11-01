import { useEffect, useState } from "react";
import { useMoviesContext } from "../../contexts/MoviesContext";
import { useKey } from "../../hooks/useKey";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/BackButton";
import RatingSection from "./RatingSection";
import MovieHeader from "./MovieHeader";
import MovieMoreInfo from "./MovieMoreInfo";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

function MovieDetails() {
  const { selectedId, handleCloseMovie } = useMoviesContext();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useKey("Escape", handleCloseMovie);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`,
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId],
  );

  useEffect(
    function () {
      if (!movie.Title) return;
      document.title = `Movie | ${movie.Title}`;

      return function () {
        document.title = "POPCAN";
      };
    },
    [movie.Title],
  );

  if (!selectedId || selectedId === "") {
    return <div className="mt-16 text-center"> </div>;
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
