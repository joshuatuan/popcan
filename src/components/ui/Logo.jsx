import { useUIContext } from "../../contexts/UIContext";

function Logo() {
  const { setView } = useUIContext();
  return (
    <h1
      className="cursor-pointer text-xl font-semibold text-white"
      onClick={() => setView("welcome")}
    >
      <span className="text-3xl" role="img" aria-label="popcorn emoji">
        🍿
      </span>
      <span className="hidden sm:inline">POPCAN</span>
    </h1>
  );
}

export default Logo;
