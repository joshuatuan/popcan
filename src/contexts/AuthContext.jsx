import { useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";
import { getSession as fetchSession } from "../lib/apiAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const getSession = async () => {
      try {
        const session = await fetchSession();
        setSession(session);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        queryClient.invalidateQueries(["watchedMovies"]);
      },
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [queryClient]);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
