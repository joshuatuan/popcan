import { useUIContext } from "../../contexts/UIContext";

function AuthToggle() {
  const { setView } = useUIContext();
  return (
    <button
      onClick={() => setView("auth")}
      className="rounded-xl bg-text p-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-white hover:text-gray-950"
    >
      Sign in
    </button>
  );
}

export default AuthToggle;
