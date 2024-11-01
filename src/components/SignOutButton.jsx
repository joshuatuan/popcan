import { useMoviesContext } from "../contexts/MoviesContext";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useSignOut } from "../lib/authHooks";

function SignOutButton() {
  const { signOut, isSigningOut } = useSignOut();
  const { setQuery } = useMoviesContext();
  function handleSignOut() {
    signOut();
    setQuery("");
  }

  return (
    <div className="flex items-center gap-1">
      <UserCircleIcon className="hidden h-10 md:block" />
      <button
        className="items-end rounded-xl bg-gray-800 px-2 py-1 text-sm font-medium text-text hover:bg-gray-900"
        onClick={handleSignOut}
        disabled={isSigningOut}
      >
        Sign out
      </button>
    </div>
  );
}

export default SignOutButton;
