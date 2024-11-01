import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthForms() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="w-full max-w-md rounded-xl bg-background-500 p-8">
      {isSignUp ? (
        <div className="flex flex-col gap-8">
          <SignUpForm />

          <div className="flex flex-col items-center">
            <p>Already have an account?</p>
            <button
              className="hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Sign in instead
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <SignInForm />
          <div className="flex flex-col items-center">
            <p>Don&apos;t have an account?</p>
            <button
              className="hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Sign up here
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
