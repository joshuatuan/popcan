import { useMoviesContext } from "../contexts/MoviesContext";
import MoviesContainer from "../features/movies/MoviesContainer";
import WatchedMoviesContainer from "../features/watched-movies/WatchedMoviesContainer";

function MainLayout({ children }) {
  const { view } = useMoviesContext();
  return (
    <main className="mt-10 flex h-[calc(100vh-15rem)] justify-center gap-10">
      {children}
    </main>
  );
}

export default MainLayout;
