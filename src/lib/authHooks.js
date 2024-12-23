import { useMutation } from "@tanstack/react-query";
import {
  signIn as signInApi,
  signOut as apiSignOut,
  signUp as signUpApi,
} from "./apiAuth";
import { useUIContext } from "../contexts/UIContext";

export function useSignIn() {
  const { setView } = useUIContext();
  const {
    mutate: signIn,
    isPending: isSigningIn,
    error: signInError,
  } = useMutation({
    mutationFn: signInApi,
    onSuccess: () => {
      setView("myList");
      localStorage.setItem("hasLoggedInBefore", "true");
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { signIn, isSigningIn, signInError };
}

export function useSignOut() {
  const { setView } = useUIContext();
  const { mutate: signOut, isPending: isSigningOut } = useMutation({
    mutationFn: apiSignOut,
    onSuccess: () => {
      // setView("auth");
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { signOut, isSigningOut };
}

export function useSignUp() {
  const { setView } = useUIContext();
  const {
    mutate: signUp,
    isPending: isSigningUp,
    error: signUpError,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      setView("myList");
      localStorage.setItem("hasLoggedInBefore", "true");
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { signUp, isSigningUp, signUpError };
}
