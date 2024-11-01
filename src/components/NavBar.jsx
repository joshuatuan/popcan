import { useAuthContext } from "../contexts/AuthContext";
import AuthToggle from "./AuthToggle";
import MoviesToggle from "./MoviesToggle";
import SignOutButton from "./SignOutButton";

function NavBar() {
  const { session } = useAuthContext();

  return (
    <nav className="sticky top-0 z-50 mx-auto grid h-20 max-w-7xl grid-cols-[1fr_5rem] items-center justify-items-start bg-primary-500 px-2 transition-all duration-200 md:top-5 md:grid-cols-[8rem_1fr_8rem] md:justify-items-center md:rounded-2xl md:px-4">
      <div className="hidden cursor-default items-center md:flex">
        <h1 className="text-xl font-semibold text-white">
          <span className="text-3xl" role="img">
            🍿
          </span>
          POPCAN
        </h1>
      </div>
      <MoviesToggle />

      {session ? <SignOutButton /> : <AuthToggle />}
    </nav>
  );
}

export default NavBar;
