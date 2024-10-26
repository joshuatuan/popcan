import { useState } from "react";
import { signIn, signUp } from "../lib/apiAuth";

export default function AuthForms() {
  const [authMethod, setAuthMethod] = useState("signIn");

  return (
    <div>
      {authMethod === "signUp" ? (
        <div>
          <SignUpForm />
          <span>
            Already have an account?
            <button onClick={() => setAuthMethod("signIn")}>
              Sign in instead
            </button>
          </span>
        </div>
      ) : (
        <div>
          <SignInForm />
          <span>
            Don&apos;t an account?
            <button onClick={() => setAuthMethod("signUp")}>
              Sign up here
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button>Sign up</button>
    </form>
  );
}

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button>Sign in</button>
    </form>
  );
}
