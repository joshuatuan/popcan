import { useEffect, useRef, useState } from "react";
import { useMoviesContext } from "../../contexts/MoviesContext";
import { useKey } from "../../hooks/useKey";
import Loader from "../../components/Loader";
import StarRating from "../../components/StarRating";
import { useAddMovie } from "../watched-movies/useAddMovie";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const KEY = "21f3e4c5";

function MovieDetails({ selectedId }) {
  const { watchedMovies, handleAddWatched, handleCloseMovie } =
    useMoviesContext();
  const { addMovie, isAdding } = useAddMovie();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);
  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedId);
  const watchedUserRating = watchedMovies.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie;

  async function handleAdd() {
    if (!userRating || !selectedId) {
      return;
    }
    addMovie({ movie_id: selectedId, user_rating: userRating });
    handleCloseMovie();
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
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
      if (!Title) return;
      document.title = `Movie | ${Title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [Title],
  );

  useKey("Escape", handleCloseMovie);

  return (
    <div className="text-lg">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex">
            <button
              className="absolute left-[0.6rem] top-[0.6rem] z-[999] flex cursor-pointer items-center justify-center border-none text-2xl font-bold text-background-500"
              onClick={handleCloseMovie}
            >
              <ArrowLeftCircleIcon className="h-10 text-primary" />
            </button>
            <img className="w-1/3" src={Poster} alt={`Poster of ${Title}`} />
            <div className="flex w-full flex-col gap-3 bg-background-100 px-6 py-5">
              <h2 className="mb-5 text-xl"> {Title} </h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p> {Genre} </p>
              <p className="flex items-center gap-2">
                <span>⭐️</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section className="flex flex-col items-center gap-6 p-10">
            <div className="mb-3 flex min-w-[335px] max-w-[335px] flex-col gap-6 rounded-2xl bg-background-100 px-5 py-8 font-semibold">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="cursor-pointer rounded-full border-none bg-primary py-3 text-base font-bold text-text transition-all duration-300"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-center">
                  You&apos;ve already rated this movie with {watchedUserRating}{" "}
                  ⭐️
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <p>
                <em> {Plot} </em>
              </p>
              <p>Starring {Actors} </p>
              <p>Directed by {Director} </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
