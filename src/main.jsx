import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MoviesProvider } from "./contexts/MoviesContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { WatchedMoviesProvider } from "./contexts/WatchedMoviesContext.jsx";
import { UIProvider } from "./contexts/UIContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <WatchedMoviesProvider>
        <MoviesProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </MoviesProvider>
      </WatchedMoviesProvider>
    </AuthProvider>
  </QueryClientProvider>,
);
