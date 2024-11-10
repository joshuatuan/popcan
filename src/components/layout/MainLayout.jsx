import { useUIContext } from "../../contexts/UIContext";
import MoviesContainer from "../../features/movies/MoviesContainer";
import WatchedMoviesContainer from "../../features/watched-movies/WatchedMoviesContainer";
import AuthContainer from "../../features/auth/AuthContainer";
import WelcomePage from "../WelcomePage";

function MainLayout() {
  const { view } = useUIContext();
  return (
    <main className="mx-auto mt-3 flex min-h-[200px] max-w-full justify-center p-3 md:mt-8 md:p-10">
      {view === "myList" && <WatchedMoviesContainer />}
      {view === "browseMovies" && <MoviesContainer />}
      {view === "auth" && <AuthContainer />}
      {view === "welcome" && <WelcomePage />}
    </main>
  );
}

export default MainLayout;
