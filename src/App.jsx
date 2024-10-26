import NavBar from "./components/NavBar";
import AuthForms from "./components/AuthForms";
import { useMoviesContext } from "./contexts/MoviesContext";
import MoviesContainer from "./features/movies/MoviesContainer";
import WatchedMoviesContainer from "./features/watched-movies/WatchedMoviesContainer";
import MainLayout from "./components/MainLayout";

export default function App() {
  const { session } = useMoviesContext();

  return (
    <div>
      <NavBar />
      {!session ? (
        <AuthForms />
      ) : (
        <MainLayout>
          <MoviesContainer />
          <WatchedMoviesContainer />
        </MainLayout>
      )}
    </div>
  );
}
