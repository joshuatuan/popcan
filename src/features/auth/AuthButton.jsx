import SpinnerMini from "../../components/ui/SpinnerMini";

function AuthButton({ isSubmitting, children }) {
  return (
    <button className="mt-2 rounded-xl bg-primaryLight px-3 py-2 font-semibold transition-all duration-200 hover:bg-primary-500">
      {isSubmitting ? (
        <SpinnerMini className="mx-auto border-text border-r-primaryLight" />
      ) : (
        children
      )}
    </button>
  );
}

export default AuthButton;
