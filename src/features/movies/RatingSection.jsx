import { useEffect, useRef } from "react";
import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";
import { useAddMovie } from "../watched-movies/useAddMovie";
import { useAuthContext } from "../../contexts/AuthContext";
import { useUIContext } from "../../contexts/UIContext";

import SpinnerMini from "../../components/SpinnerMini";
import StarRating from "../../components/StarRating";

export default function RatingSection() {
  const { addMovie, isAdding } = useAddMovie();
  const { session } = useAuthContext();
  const { watchedMovies } = useWatchedMoviesContext();
  const { userRating, setUserRating, setView, selectedId } = useUIContext();

  const isWatched = watchedMovies
    ?.map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watchedMovies?.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const countRef = useRef(0);
  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  async function handleAdd() {
    if (!userRating || !selectedId) {
      return;
    }
    await addMovie({ movie_id: selectedId, user_rating: userRating });
  }

  return (
    <div className="mb-3 flex min-w-[335px] max-w-[335px] flex-col gap-6 rounded-2xl bg-background-100 p-6 font-semibold">
      {!isWatched ? (
        <>
          <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
          {!session && (
            <button
              className="cursor-pointer rounded-full border-none bg-text py-3 font-semibold text-gray-800 transition-all duration-100 hover:bg-textDark"
              onClick={() => {
                setView("auth");
                setUserRating("");
              }}
            >
              Sign in to save this movie
            </button>
          )}
          {session && userRating > 0 && (
            <button
              className={`cursor-pointer rounded-full border-none py-3 text-sm font-bold text-text transition-all duration-300 hover:bg-primary-500 ${
                isAdding ? "bg-primaryLight" : "bg-primaryLight"
              }`}
              onClick={handleAdd}
              disabled={isAdding}
            >
              {isAdding ? (
                <span className="flex items-center justify-center gap-2">
                  Adding to list
                  <SpinnerMini className="w-5 border-primary-100 border-r-primary-300" />
                </span>
              ) : (
                "+ Add to list"
              )}
            </button>
          )}
        </>
      ) : (
        <p className="flex items-center justify-center gap-[2px]">
          You&apos;ve rated this movie with {watchedUserRating}
          <p className="inline pb-[2px]">⭐️</p>
        </p>
      )}
    </div>
  );
}
