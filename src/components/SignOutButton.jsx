import { signOut } from "../lib/apiAuth";
import { useMoviesContext } from "../contexts/MoviesContext";

function SignOutButton() {
  const { setQuery } = useMoviesContext();

  function handleSignOut() {
    signOut(); // Sign out the user
    setQuery("");
  }

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;
