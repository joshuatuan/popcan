import { useAuthContext } from "../../contexts/AuthContext";
import AuthToggle from "../../features/auth/AuthToggle";
import MoviesToggle from "../MoviesToggle";
import SignOutButton from "../../features/auth/SignOutButton";
import Logo from "../ui/Logo";

function NavBar() {
  const { session } = useAuthContext();

  return (
    <div className="sticky top-0 max-w-7xl md:top-5">
      <div className="absolute top-[-20px] -z-10 hidden h-14 w-full bg-background-900 md:block">
        <span className="sr-only">upper background for navbar</span>
      </div>

      <nav className="z-10 mx-auto grid h-20 grid-cols-[1fr_4rem] items-center justify-items-start bg-primary-500 px-4 transition-all duration-200 sm:grid-cols-[8rem_1fr_8rem] sm:justify-items-center sm:px-4 md:rounded-2xl">
        <div className="hidden sm:block">
          <Logo />
        </div>
        <MoviesToggle />
        {session ? <SignOutButton /> : <AuthToggle />}
      </nav>
    </div>
  );
}

export default NavBar;
