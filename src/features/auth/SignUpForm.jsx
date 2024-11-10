import { useState } from "react";
import AuthButton from "./AuthButton";
import InputField from "./InputField";
import { useSignUp } from "../../lib/authHooks";
import PasswordInput from "./PasswordInput";
import ErrorMessage from "../../components/ErrorMessage";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, isSigningUp, signUpError } = useSignUp();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signUp({ email, password });
      }}
      className="flex flex-col gap-4"
    >
      <InputField type="email" onChange={setEmail} label="Email" />

      <PasswordInput onChange={setPassword} />
      {signUpError && (
        <ErrorMessage className="text-sm font-medium">
          {signUpError.message}
        </ErrorMessage>
      )}
      <AuthButton isSubmitting={isSigningUp}>Sign Up</AuthButton>
    </form>
  );
}

export default SignUpForm;
