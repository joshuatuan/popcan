import { FilmIcon } from "@heroicons/react/24/solid";

function MissingPoster({ className }) {
  return (
    <div className={`items-center justify-center text-2xl ${className}`}>
      <FilmIcon className="h-14" />
    </div>
  );
}

export default MissingPoster;
