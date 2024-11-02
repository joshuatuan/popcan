import EmptyList from "../../components/EmptyList";
import ErrorMessage from "../../components/ErrorMessage";
import SignInPrompt from "../../components/SignInPrompt";
import Spinner from "../../components/Spinner";
import { useAuthContext } from "../../contexts/AuthContext";
import { useWatchedMoviesContext } from "../../contexts/WatchedMoviesContext";
import Summary from "./Summary";
import WatchedMovieList from "./WatchedMovieList";

function WatchedMoviesContainer() {
  const { session } = useAuthContext();
  const { watchedMovies, isLoading, error } = useWatchedMoviesContext();

  if (watchedMovies?.length < 1) return <EmptyList />;

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner className="mx-auto" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center">
        <ErrorMessage />
      </div>
    );

  if (!session) return <SignInPrompt />;

  return (
    <div className="w-full max-w-3xl rounded-lg bg-background-500 p-4 pb-0 md:px-7 md:pt-8">
      <Summary />
      <WatchedMovieList />
    </div>
  );
}

export default WatchedMoviesContainer;
