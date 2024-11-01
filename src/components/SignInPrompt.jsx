import { useMoviesContext } from "../contexts/MoviesContext";

function SignInPrompt() {
  const { setView } = useMoviesContext();
  return (
    <div className="flex w-full items-center justify-center rounded-xl bg-background-500 p-10 text-center text-textDark">
      <span
        className="cursor-pointer text-lg text-text underline md:text-xl"
        onClick={() => setView("auth")}
        role="button"
      >
        Please sign in to start saving movies
      </span>
    </div>
  );
}

export default SignInPrompt;
