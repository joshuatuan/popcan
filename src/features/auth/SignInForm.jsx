import { useState } from "react";
import { useSignIn } from "../../lib/authHooks";
import AuthButton from "./AuthButton";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ErrorMessage from "../../components/ErrorMessage";

function SignInForm() {
  const { signIn, isSigningIn, signInError } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.dir(signInError);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn({ email, password });
      }}
      className="flex flex-col gap-4"
    >
      <InputField type="email" onChange={setEmail} label="Email" />
      <PasswordInput onChange={setPassword} />
      {signInError && (
        <ErrorMessage className="text-sm font-medium">
          {signInError.message}
        </ErrorMessage>
      )}
      <AuthButton isSubmitting={isSigningIn}>Sign In</AuthButton>
    </form>
  );
}
export default SignInForm;
