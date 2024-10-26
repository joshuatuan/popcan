import { useMoviesContext } from "../contexts/MoviesContext";

function ErrorMessage() {
  const { error } = useMoviesContext();

  return (
    <p className="px-10 text-center text-xl">
      <span>❌</span> {error}
    </p>
  );
}

export default ErrorMessage;
