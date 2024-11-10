import { useAuthContext } from "../contexts/AuthContext";
import { useUIContext } from "../contexts/UIContext";

function WelcomePage() {
  const { setView } = useUIContext();
  const { session } = useAuthContext();
  return (
    <div className="mb-8 mt-8 flex flex-col items-center bg-background-900 px-4 md:mt-0 md:items-start">
      <h1 className="mb-4 text-center text-6xl font-semibold text-white md:text-start">
        Welcome to Popcan!
      </h1>

      <h3 className="mb-8 text-2xl font-medium md:mb-4">
        Save & Rate Your Favorite Movies
      </h3>

      <p className="mb-6 max-w-md text-base leading-7 text-text md:max-w-lg">
        Discover, rate, and save your favorite movies all in one place. Sign in
        to keep track of what you&apos;ve watched and build your personalized
        movie list.
      </p>
      <button
        onClick={() => setView(session ? "myList" : "auth")}
        className="mb-10 hidden w-full rounded-full bg-primary-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-400 md:block md:max-w-xs"
      >
        {session ? "Go to My Movies" : "Get Started"}
      </button>

      <section className="grid max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-lg border-4 border-primaryLight p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Rate Movies⭐
          </h2>
          <p>Share your thoughts and rate movies you&apos;ve watched.</p>
        </div>
        <div className="rounded-lg border-4 border-primaryLight p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Save Your Favorites❤️
          </h2>
          <p>Keep a list of your top picks and access them anytime.</p>
        </div>
        <div className="rounded-lg border-4 border-primaryLight p-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Personalized Lists🎞️
          </h2>
          <p>Sign in to create your own list and sync across devices.</p>
        </div>
      </section>

      <button
        onClick={() => setView("auth")}
        className="mt-10 block w-full rounded-full bg-primary-500 px-6 py-3 text-center text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-400 sm:max-w-xs md:hidden"
      >
        {session ? "Go to My Movies" : "Get Started"}
      </button>
    </div>
  );
}

export default WelcomePage;
