import MissingPoster from "../../components/MissingPoster";
import MovieTitle from "../../components/MovieTitle";

function MovieHeader({ poster, title, released, runtime, genre, imdbRating }) {
  return (
    <header className="mb-2 flex">
      {poster && poster !== "N/A" ? (
        <img
          className="w-[35%] rounded-tl-xl border-b border-background-300 md:rounded-none"
          src={poster}
          alt={`Poster of ${title}`}
        />
      ) : (
        <MissingPoster className="flex w-[70%] items-center justify-center rounded-tl-xl border-2 border-background-300 md:rounded-none" />
      )}

      <div className="flex w-full flex-col gap-5 rounded-tr-xl bg-background-100 p-5 text-sm">
        <MovieTitle>{title}</MovieTitle>
        <p>
          {released} &bull; {runtime && runtime !== "N/A" && runtime}
        </p>
        <p> {genre} </p>
        <p className="flex items-center gap-1">
          <span>⭐️</span>
          {imdbRating} IMDB Rating
        </p>
      </div>
    </header>
  );
}

export default MovieHeader;
