import { useUIContext } from "../contexts/UIContext";

function EmptyList() {
  const { setView } = useUIContext();
  return (
    <div className="flex items-center justify-center text-textDark">
      <p>
        List empty. Start by{" "}
        <span
          className="cursor-pointer text-primaryLight"
          onClick={() => setView("browseMovies")}
          role="link"
        >
          browsing movies
        </span>
      </p>
    </div>
  );
}

export default EmptyList;
