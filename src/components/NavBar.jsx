import { useMoviesContext } from "../contexts/MoviesContext";
import MoviesToggle from "./MoviesToggle";
import Search from "./Search";
import SignOutButton from "./SignOutButton";

function NavBar() {
  const { movies, session } = useMoviesContext();

  return (
    <nav className="bg-primary-500 mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl px-4">
      <div className="flex items-center">
        <span className="text-3xl" role="img">
          🍿
        </span>
        <h1 className="hidden text-xl font-semibold text-white md:block">
          popcan
        </h1>
      </div>
      <Search />
      {/* <MoviesToggle /> */}

      {session && <SignOutButton />}
    </nav>
  );
}

{
  /* <p className="num-results">
{movies.length > 0 && (
  <span>
    Found <strong>{movies.length}</strong> results
  </span>
)}
</p> */
}

export default NavBar;
